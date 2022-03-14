import { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { UserContext } from '../../../providers/UserProvider'
import {loginUser, fetchCurrentUser } from '../../../services/AuthServices'
import { saveStorage } from '../../../utils/Storage'

const url = process.env.REACT_APP_ENDPOINT

const useSignIn = () => {
    const {userDispatch} = useContext(UserContext)

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

    const handleLoginUser = async (e, eventSignIn) => {
        setLoading(true)

        try{

            const {data} = await loginUser(initialState)

            setLoading(false)
            
            if(data) {

                setLoading(true)
                saveStorage('@token', data.data.token)

                const me = await fetchCurrentUser()

                console.log(me);

                userDispatch({type: 'SET_CURRENT_USER', payload: me.data.user})

                setLoading(false)
                
                eventSignIn()
            }
           
        } catch (err) {
            setLoading(false)
            if(err.response){
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




