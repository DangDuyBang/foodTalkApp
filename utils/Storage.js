import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveStorage = async (key, val) => {
    try{
        if(!val){
            return false
        }
        await AsyncStorage.setItem(key, JSON.stringify(val))
        return true
    } catch(err) {
        return false
    }
}


export const getStorage = async (key) => {
    try{
        const storage = await AsyncStorage.getItem(key)
        return JSON.parse(storage)
    } catch(err) {
        return null
    }
}

export const deleteStorage = async (key) => {
    try{
        await AsyncStorage.removeItem(key)
        return true
    } catch(err) {
        return false
    }
}