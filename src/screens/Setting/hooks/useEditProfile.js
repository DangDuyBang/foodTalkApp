import { useState } from 'react'
import * as ImagePicker from 'expo-image-picker';
import { storage } from '../../../firebase/firebase';
import { uploadBytesResumable, getDownloadURL, ref } from 'firebase/storage';
import { updateAvatarPic, updateCoverPic, updateProfile } from '../../../services/AuthServices';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser, updateAvatar, updateCover } from '../../../redux/reducers/userReducer';
import { setToast } from '../../../redux/reducers/uiReducer';

function useEditProfile({ navigation }) {
    const currentUser = useSelector(state => state.user.currentUser);
    const dispatch = useDispatch()

    const [uriCover, setUriCover] = useState(null)
    const [uriAvatar, setUriAvatar] = useState(null)
    const [payload, setPayload] = useState({
        email: currentUser.email,
        first_name: currentUser.first_name,
        last_name: currentUser.last_name,
        username: currentUser.username,
        about: currentUser.about,
    })

    const onFirstNameChange = (text) => {
        setPayload({ ...payload, first_name: text })
    }

    const onLastNameChange = (text) => {
        setPayload({ ...payload, last_name: text })

    }

    const onUsernameChange = (text) => {
        setPayload({ ...payload, username: text })
    }

    const onAboutChange = (text) => {
        setPayload({ ...payload, about: text })
    }

    const openCoverImagePickerAsync = async (isUseCamera, bs, isAvatar) => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }

        let pickerResult
        if (isUseCamera) {
            pickerResult = await ImagePicker.launchCameraAsync();
        } else {
            pickerResult = await ImagePicker.launchImageLibraryAsync();
        }
        console.log(pickerResult);
        if (!pickerResult.cancelled) {
            if (isAvatar) {
                setUriAvatar(pickerResult)
                bs
            } else {
                setUriCover(pickerResult)
                bs
            }
        }
    }

    const changeProfile = async () => {
        if (payload.username === currentUser.username) {
            const data = { ...payload }
            delete payload['username']
            setPayload({ ...data })

        }

        console.log(payload);
        await updateProfile(payload).then(respone => {
            dispatch(setCurrentUser(respone.data.user))
            dispatch(setToast({
                type: 'success',
                text1: 'Update profile',
                text2: respone.data.message
            }))
            navigation.goBack()
        }).catch(err => {
            if (err.response) {
                dispatch(setToast({
                    type: 'error',
                    text1: 'Update profile',
                    text2: err.response.data.error
                }))
            }
        })
    }

    const onChangeProfile = async () => {
        const metadata = {
            contentType: 'image/jpeg',
        };

        if (uriCover) {

            let filename = `cover/user${Date.now()}-${payload.username}`
            const imageRef = ref(storage, `images/${filename}`)
            const img = await fetch(uriCover.uri)
            const blob = await img.blob()

            uploadBytesResumable(imageRef, blob, metadata).then(snapshot => {
                getDownloadURL(snapshot.ref).then((downloadURL) => {
                    dispatch(updateCover(downloadURL))
                    updateCoverPic({ cover_url: downloadURL })
                        .then(response => console.log(response.data.message))
                        .catch(err => {
                            if (err.respone) {
                                console.log(err.respone.data.error);
                            }
                        })
                })
            })
        }

        if (uriAvatar) {
            let file = `avatar/user-${Date.now()}-${payload.username}`
            const iRef = ref(storage, `images/${file}`)
            const i = await fetch(uriAvatar.uri)
            const b = await i.blob()

            uploadBytesResumable(iRef, b, metadata).then(snapshot => {
                getDownloadURL(snapshot.ref).then((downloadURL) => {
                    dispatch(updateAvatar(downloadURL))
                    updateAvatarPic({ avatar_url: downloadURL })
                        .then(response => console.log(response.data.message))
                        .catch(err => {
                            if (err.respone) {
                                console.log(err.respone.data.error)
                            }
                        })
                })
            })

        }
        changeProfile()
    }

    return {
        uriCover, uriAvatar, openCoverImagePickerAsync, payload, onFirstNameChange, onLastNameChange, onUsernameChange, onAboutChange, onChangeProfile
    }

}

export default useEditProfile