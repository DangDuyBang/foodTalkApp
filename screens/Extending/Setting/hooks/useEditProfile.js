import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker';

function useEditProfile() {
    const [uriCover, setUriCover] = useState(null)
    const [uriAvatar, setUriAvatar] = useState(null)

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

    return {
        uriCover, uriAvatar, openCoverImagePickerAsync
    }

}

export default useEditProfile