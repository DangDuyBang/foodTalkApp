import { useState } from 'react'
import axios from 'axios'
import { loginUser } from '../../../services/AuthServices'
import { fetchCurrentUser } from '../../../services/UserServices'
import { saveStorage } from '../../../utils/Storage'
import { useDispatch } from 'react-redux'
import { setCurrentUser } from '../../../redux/userReducer'
import { setToast, setNoti } from '../../../redux/uiReducer'

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

        if(initialState.email === '' || initialState.password === '') {
            dispatch(setToast({
                type: 'error',
                text1: 'Login failed',
                text2: 'Email or password was wrong',
            }))
            setLoading(false);
            return;
        }

        try {

            const { data } = await loginUser(initialState)

            setLoading(false)

            if (data) {

                setLoading(true)
                saveStorage('@token', data.data.token)
                axios.defaults.headers.common['Authorization'] = `Bearer ${data.data.token}`;

                const me = await fetchCurrentUser()

                dispatch(setCurrentUser(me.data.user))
                dispatch(setNoti(me.data.notifications))
                console.log(me.data.notifications)

                setLoading(false)

                dispatch(setToast({
                    type: 'success',
                    text1: 'Wellcome',
                    text2: 'Take your time to cook some recipes',
                }))
            }

        } catch (err) {
            setLoading(false)
            console.log(err);
            if (err.response) {
                console.log(err.response.data.error)
                dispatch(setToast({
                    type: 'error',
                    text1: 'Login failed',
                    text2: err.response.data.error,
                }))
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




