import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useEffect } from 'react'
import color from '../../contains/color'
import InputSearch from '../../components/InputSearch'
import { AntDesign } from '@expo/vector-icons'
import MessageText from '../../components/MessageText'
import { useDispatch, useSelector } from 'react-redux'
import RecipePreview from '../../components/RecipePreview'
import { setSelectedUserProfile } from '../../redux/userReducer'
import uuid from 'react-native-uuid';

const SearchScreen = ({ navigation }) => {
    const usersSearch = useSelector(state => state.user.usersSearch)
    const foodsSearch = useSelector(state => state.food.foodsSearch)

    useEffect(() => {
        navigation.setOptions({
            title: '',
            header: () => (
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: color.background,
                    paddingTop: 10,
                    paddingRight: 80
                }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <AntDesign style={styles.iconLeft} name='arrowleft' size={26} color={color.textGray}></AntDesign>
                    </TouchableOpacity>

                    <View>
                        <InputSearch
                            autoFocus={true}
                            inputIcon='search'
                            inputName='Search'
                            search={true}
                        />
                    </View>

                </View>
            )
        })

        return () => {

        }
    }, [])



    const Users = ({ user }) => {
        const currentUser = useSelector(state => state.user.currentUser.data)
        const dispatch = useDispatch()
        const handlePress = () => {
            if (user._id === currentUser._id) {
                navigation.navigate('Account')
            } else {
                navigation.navigate('PersonalPage')
                dispatch(setSelectedUserProfile(user))
            }
            //dispatch(setSelectedUserProfile(props.user))
        }
        return (
            <TouchableOpacity onPress={handlePress}>
                <View style={styles.userContainer}>


                    <View style={styles.users}>
                        <View style={styles.avatarFrame}>
                            <Image
                                style={styles.avatarImage}
                                resizeMode='cover'
                                source={{
                                    // uri: currentUser.avatar_url,
                                    uri: user.avatar_url,
                                }}
                            />
                        </View>
                        <View style={styles.nameUserView}>
                            <Text numberOfLines={1} style={styles.nameUserText}>
                                {user.username}
                            </Text>

                            <Text numberOfLines={1} style={styles.textModePost}>
                                {user.first_name} {user.last_name}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.rateStarView}>
                        <Text style={styles.markText}>{user.is_current ? 'Online' : 'Offline'}</Text>
                        {/* <FontAwesome name='star' size={20} color={color.starColor}></FontAwesome> */}
                    </View>

                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            {usersSearch && usersSearch.map((user, index) => <Users user={user} key={uuid.v4()} />)}
            {foodsSearch && foodsSearch.map((food, index) => <RecipePreview data={food} key={uuid.v4()} />)}
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background,
        paddingTop: 15
    },
    userContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    users: {
        flexDirection: 'row',
        marginBottom: 10,
        paddingHorizontal: 15,
        alignItems: 'center'
    },
    iconLeft: {
        marginHorizontal: 15
    },
    infoPostUser: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        alignItems: 'center'
    },
    avatarFrame: {
        width: 57,
        height: 57,
        borderRadius: 100,
        backgroundColor: color.primary,
        marginRight: 15
    },
    avatarImage: {
        width: 57,
        height: 57,
        borderRadius: 150,
    },
    nameUserView: {

    },
    nameUserText: {
        fontFamily: 'Roboto',
        fontSize: 17,
        color: color.textGray,
        fontWeight: 'bold',
        marginBottom: 3
    },
    textModePost: {
        fontFamily: 'Roboto',
        color: color.textIconSmall,
        fontSize: 11
    },
    rateStarView: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 30,
        flexDirection: 'row',
    },
    markText: {
        fontFamily: 'Roboto',
        fontSize: 13,
        color: color.textIconSmall,
        marginRight: 5,
    }
})