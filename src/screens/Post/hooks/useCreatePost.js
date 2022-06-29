import { useState } from 'react'
import { storage } from '../../../firebase/firebase'
import { createPost } from '../../../services/PostServices'
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import {useDispatch} from 'react-redux'
import {addPost} from '../../../redux/postReducer'
import { addUserPost } from '../../../redux/userReducer'

export const useCreatePost = (props) => {

    const { navigation } = props
    const [isPublic, setIsPublic] = useState(true)
    const [content, setContent] = useState('')
    const [foods, setFoods] = useState([])
    const [photos, setPhotos] = useState([])
    const [location, setLocation] = useState('')
    const [region, setRegion] = useState({})
    const dispatch = useDispatch()

    const eventChangeMode = () => {
        setIsPublic(!isPublic)
    }

    const onRecipeConfirm = (f) => {
        setFoods(f)
    }

    const eventRecipeAttached = () => {
        navigation.navigate('RecipeAttached', { onConfirm: onRecipeConfirm, foods: foods })
    }

    const onPressPhoto = () => {
        navigation.navigate('ImagePickerMultiple', { onCallBack: onSetPhotos })
    }

    const onSetPhotos = (p) => {
        setPhotos(p)
    }

    const onCancel = () => {
        navigation.goBack()
    }

    const handleContentChange = (text) => {
        setContent(text)
    }

    const onDone = (address, reg) => {
        setLocation(address)
        setRegion(reg)
    }

    const onPressCheckIn = () => {
        navigation.navigate('Map', { onCancel: onCancel, onDone: onDone })
    }


    const onCreatePost = () => {
        try {
            const metadata = {
                contentType: 'image/jpeg',
            };

            let urlsPhoto = []
            photos.forEach(async (photo, index) => {
                let filename = `post/post-${Date.now()}-${photo.name}`
                const imageRef = ref(storage, `images/${filename}`)
                const img = await fetch(photo.uri)
                const blob = await img.blob()

                uploadBytesResumable(imageRef, blob, metadata).then(snapshot => {
                    getDownloadURL(snapshot.ref).then((downloadURL) => {
                        urlsPhoto.push(downloadURL)
                        if (index === photos.length - 1) {
                            createPost({
                                foods: foods.map(food => food._id),
                                content: content,
                                photos: urlsPhoto,
                                location: {
                                    name: location,
                                    lat: region.latitude,
                                    lng: region.longitude,
                                },
                                is_public: isPublic,
                            }).then((res) => {
                                console.log(res.data.post);
                                dispatch(addPost(res.data.post))
                                dispatch(addUserPost(res.data.post))
                            })
                        }
                    })
                })
            })
            console.log('finished')
            navigation.goBack()

        } catch (error) {
            console.log(error.respone.data);
        }
    }

    return (
        { isPublic, foods, content, location, photos, eventChangeMode, eventRecipeAttached, onPressCheckIn, handleContentChange, onPressPhoto, onCreatePost }
    )
}
