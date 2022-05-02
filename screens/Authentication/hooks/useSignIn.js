import { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { UserContext } from '../../../providers/UserProvider'
import { UIContext } from '../../../providers/UIProvider'
import { loginUser } from '../../../services/AuthServices'
import { fetchCurrentUser } from '../../../services/UserServices'
import { saveStorage } from '../../../utils/Storage'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentUser, setSocketio } from '../../../redux/userReducer'
import { setToast } from '../../../redux/uiReducer'

const useSignIn = () => {

    const dispatch = useDispatch()

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [initialState, setInitialState] = useState({
        email: '',
        password: '',
    })

    const handlePasswordChange = (text) => {
        setInitialState({ ...initialState, password: text })
        // setError({ ...error, password: '' })
    }

    const handleEmailChange = (text) => {
        setInitialState({ ...initialState, email: text })
        // setError({ ...error, email: '' })
    }

    const handleLoginUser = async (e) => {
        setLoading(true)

        try {

            const { data } = await loginUser(initialState)

            setLoading(false)

            if (data) {

                setLoading(true)
                saveStorage('@token', data.data.token)
                axios.defaults.headers.common['Authorization'] = `Bearer ${data.data.token}`;

                const me = await fetchCurrentUser()

                dispatch(setCurrentUser(me.data.user))

                setLoading(false)

                dispatch(setToast({
                    type: 'success',
                    text1: 'Wellcome',
                    text2: 'Take your time to cook some recipes',
                }))

                //eventSignIn()
            }

        } catch (err) {
            setLoading(false)
            console.log(err);
            if (err.response) {
                console.log(err.response.data.error)
                setError(...err, err.response.data.error)
            }
        }

    }

    return {
        loading,
        error,
        handleLoginUser,
        handleEmailChange,
        handlePasswordChange,
    }

}

export default useSignIn




