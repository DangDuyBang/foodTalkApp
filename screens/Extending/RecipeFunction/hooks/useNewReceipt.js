import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker';
import uuid from 'react-native-uuid';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import { storage } from '../../../../firebase/firebase'
import { createFood } from '../../../../services/FoodServices';
import { useDispatch } from 'react-redux'
import { setToast } from '../../../../redux/uiReducer'
import { addFood } from '../../../../redux/foodReducer'
import { addUserFood } from '../../../../redux/userReducer';

function useNewReceipt({ navigation }) {
  const [uri, setUri] = useState(null)
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [processList, setProcessList] = useState([])
  const [ingredientList, setIngredientList] = useState([])
  const dispatch = useDispatch()

  const openImagePickerAsync = async (isUseCamera, bs) => {
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
      console.log(pickerResult);
      setUri(pickerResult)
      bs
    }
  }

  const handleAddProcess = (process) => {
    //add process
    setProcessList([...processList, process])
  }

  const handleAddIngrdient = (nameIngredient, unitIngredient) => {
    //add ingredient
    setIngredientList([...ingredientList, unitIngredient + " " + nameIngredient])
  }

  const handleDeleteProcess = (index) => {
    let processListTemp = [...processList]
    processListTemp.splice(index, 1)
    setProcessList(processListTemp)
  }

  const handleDeleteIngredient = (index) => {
    let ingredientListTemp = [...ingredientList]
    ingredientListTemp.splice(index, 1)
    setIngredientList(ingredientListTemp)
  }

  const handleChangeName = (text) => {
    setName(text)
  }

  const handleAddRecipe = async () => {
    setLoading(true)
    const metadata = {
      contentType: 'image/jpeg',
    };

    let filename = `food/ingr-${uuid.v4()}`
    const imageRef = ref(storage, `images/${filename}`)
    const img = await fetch(uri.uri)
    const blob = await img.blob()

    uploadBytesResumable(imageRef, blob, metadata).then(snapshot => {
      getDownloadURL(snapshot.ref).then((downloadURL) => {
        createFood({
          name: name,
          ingredients: ingredientList,
          recipe: processList,
          photo: downloadURL
        }).then(response => {
          dispatch(addFood(response.data.food))
          dispatch(addUserFood(response.data.food))
          dispatch(setToast({
            type: 'success',
            text1: 'Success',
            text2: response.data.message
          }))
          setLoading(false)
        }).catch(err => {
          setLoading(false)
          if (err.response) {
            console.log(err.response.data.error)
            dispatch(setToast({
              type: 'error',
              text1: 'Error',
              text2: JSON.stringify(err.response.data.error)
            }))
          }
        })


      })
    })

    navigation.goBack()

  }

  return {
    loading, name, processList, ingredientList, handleAddRecipe, handleChangeName, handleAddProcess, handleAddIngrdient, handleDeleteProcess, handleDeleteIngredient, uri, openImagePickerAsync
  }

}

export default useNewReceipt