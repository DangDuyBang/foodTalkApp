import React from 'react'
import * as ImagePicker from 'expo-image-picker';
import { storage } from '../../../firebase/firebase'
import { signUpUser } from '../../../services/AuthServices';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { UIContext } from '../../../providers/UIProvider';
import { useDispatch } from 'react-redux';
import { setToast } from '../../../redux/uiReducer'

const useSignup = ({ navigation }) => {

    const [payload, setPayload] = React.useState({})
    const [loading, setLoading] = React.useState(false)
    const [checked, setChecked] = React.useState(false)
    const [error, setError] = React.useState({})
    const [confirmPassword, setConfirmPassword] = React.useState('')
    const [uri, setUri] = React.useState('')
    const dispatch = useDispatch()

    const handleUsernameChange = (username) => {
        setPayload({ ...payload, username: username })
    }

    const handleFirstNameChange = (first_name) => {
        setPayload({ ...payload, first_name: first_name })
    }

    const handleLastNameChange = (last_name) => {
        setPayload({ ...payload, last_name: last_name })
    }

    const handlePasswordChange = (password) => {
        setPayload({ ...payload, password: password })
    }

    const handleEmailChange = (email) => {
        setPayload({ ...payload, email: email })
    }

    const handleConfirmPasswordChange = (password) => {
        setConfirmPassword(password)
    }

    const handleCheckedChange = () => {
        setChecked(!checked)
    }

    const openImagePickerAsync = async (isUseCamera) => {
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

        if (!pickerResult.cancelled) {
            setUri(pickerResult)
        }
    }

    const handleConfirm = async () => {
        if (!checked) {
            setError({ checked: 'Please check to the agree' })
            return
        }

        if (confirmPassword !== payload.password) {
            setError({ confirm_password: 'Password does not match' })
            return
        }

        setLoading(true)

        if (uri) {
            const metadata = {
                contentType: 'image/jpeg',
            };
            let filename = `avatar/user-${Date.now()}-${payload.password}`
            const imageRef = ref(storage, `images/${filename}`)
            const img = await fetch(uri.uri)
            const blob = await img.blob()

            uploadBytesResumable(imageRef, blob, metadata).then(snapshot => {
                getDownloadURL(snapshot.ref).then((downloadURL) => {
                    setPayload({ ...payload, avatar_url: downloadURL })
                    handleOnSignUp()
                })
            })
        }
        else {
            setPayload({ ...payload, avatar_url: 'https://i.pinimg.com/564x/f7/c9/21/f7c9219902a7472f5c9bc244548311ce.jpg' })
            handleOnSignUp()
        }

    }


    const handleOnSignUp = async () => {
        try {
            const { data } = await signUpUser(payload)
            setLoading(false)
            if (data) {
                dispatch(setToast({
                    type: 'SET_TOAST', payload: {
                        type: 'success',
                        text1: 'Your account has been registered',
                        text2: 'Your account has been registered. Please checked your email',
                    }
                }))
                navigation.goBack()
            }
        } catch (error) {
            if (error.response) {
                console.log(error.response.data.error)
                setError(...err, error.response.data.error)
            }
            setLoading(false)
        }
    }
    return (
        { loading, error, uri, checked, handleUsernameChange, handleCheckedChange, handleUsernameChange, handleFirstNameChange, handleLastNameChange, handleEmailChange, handlePasswordChange, handleConfirmPasswordChange, handleConfirm, openImagePickerAsync }
    )
}

export default useSignup