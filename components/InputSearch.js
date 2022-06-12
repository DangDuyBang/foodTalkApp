import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import color from '../contains/color'
import { FontAwesome } from '@expo/vector-icons'
import { searchUser } from '../services/UserServices'
import { useDispatch } from 'react-redux'
import { setUsersSearch } from '../redux/userReducer'
import { searchFood } from '../services/FoodServices'
import { setFoodsSearch } from '../redux/foodReducer'

const InputSearch = (props) => {
    const [key, setKey] = React.useState('')
    const dispatch = useDispatch()

    React.useEffect(async() => {
        if (props.search) {
            await searchUser(key).then(res =>
                dispatch(setUsersSearch(res.data.users))
            ).catch(err => {
                if (err.response) {
                    console.log(err.response.data.error);
                }
            })

            await searchFood(key).then(res =>
                dispatch(setFoodsSearch(res.data.foods))
            ).catch(err => {
                if (err.response) {
                    console.log(err.response.data.error);
                }
            })
        }

        return () => {

        }
    }, [key])


    const handleKeyChange = async (text) => {
        setKey(text)


    }


    return (
        <View style={[styles.wrapper, props.style]}>
            <View style={styles.container}>
                <FontAwesome
                    name={props.inputIcon}
                    size={20}
                    style={styles.iconStyle}
                ></FontAwesome>
                <TextInput
                    style={styles.inputStyle}
                    placeholder={props.inputName}
                    onChangeText={handleKeyChange}
                    onTouchCancel={true}
                    autoFocus={props.autoFocus}
                    value={key}
                />
            </View>
        </View>
    )
}

export default InputSearch

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        //paddingHorizontal: 10,
    },
    container: {
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: color.inputColor,
        paddingHorizontal: 15,
        // paddingVertical: 10,
        borderRadius: 25,
        // marginVertical: 10,
        alignItems: 'center',
        height: 40,
    },
    iconStyle: {
        color: color.textIconSmall,
        marginRight: 10,
    },
    inputStyle: {
        width: '90%',
        //fontSize: 16,
    }
})