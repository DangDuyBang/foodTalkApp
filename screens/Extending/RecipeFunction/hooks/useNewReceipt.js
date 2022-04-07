import React, {useState} from 'react'
import * as ImagePicker from 'expo-image-picker';

function useNewReceipt() {
    const [uri, setUri] = useState(null)

    const openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("Permission to access camera roll is required!");
          return;
        }
    
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        console.log(pickerResult);
        setUri(pickerResult)
      }

    
    const [loading, setLoading] = useState(false)
    const [processList, setProcessList] = useState([])
    const handleAddProcess = (process) => {
        //add process
        setProcessList([...processList, process])
    }

    const [ingredientList, setIngredientList] = useState([])

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

  return {
      processList, ingredientList, handleAddProcess, handleAddIngrdient, handleDeleteProcess, handleDeleteIngredient, uri, openImagePickerAsync
  }

}

export default useNewReceipt