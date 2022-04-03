import axios from 'axios'
import { getStorage } from '../utils/Storage'

/**
 * @param {payload} payload { name, ingredients, recipe, about = '', photo = '' }
 */
 export const createFood = async (payload) => {
    let token = await getStorage('@token')
    return axios.post(`/api/food/create`,payload, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}


/**
 * @param {payload} payload { food, content, score }
 */
 export const createRateFood = async (payload) => {
    let token = await getStorage('@token')
    return axios.post(`/api/food/rate`,payload, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

/**
 * @param {params} parmas food_id string
 */
 export const fetchFoodById = async (params) => {
    let token = await getStorage('@token')
    return axios.get(`/api/food/foods/${params}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

/**
 * @param {params} parmas food_id string
 */
 export const searchFood = async (params) => {
    let token = await getStorage('@token')
    return axios.get(`/api/food/search/${params}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}


/**
 * @param {params} parmas ingredient name
 */
 export const recommendationIngr = async (params) => {
    let token = await getStorage('@token')
    return axios.get(`/api/food/ingredients/${params}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}


/**
 * @param {params} parmas array of ingredients name
 */
 export const recommendationPairingIngr = async (params) => {
    let token = await getStorage('@token')
    return axios.get(`/api/food/pairing/ingredients`,params, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

 export const fetchUserFoods = async () => {
    let token = await getStorage('@token')
    return axios.get(`/api/food/user-foods`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}