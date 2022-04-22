import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView, } from 'react-native'
import React, { useState, useContext } from 'react'
import color from '../../contains/color'
import { Ionicons, MaterialIcons, AntDesign } from '@expo/vector-icons'
import SwipeSlide from '../../components/SwipeSlide'
import SubmitNoLogo from '../../components/SubmitNoLogo'
import { useCreatePost } from './hooks/useCreatePost'
import { UserContext } from '../../providers/UserProvider'
import RecipeShowed from '../../components/RecipeShowed'

const NewPostScreen = ({ navigation }) => {
    //cập nhật thêm checkin với foods

    const { isPublic, foods, body, eventChangeMode, eventRecipeAttached, onPressCheckIn, handleContentChange } = useCreatePost({ navigation })

    const { userState, userDispatch } = useContext(UserContext)

    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <Ionicons name='arrow-back' size={35} color={color.textGray}></Ionicons>
                </TouchableOpacity>
                <Text style={styles.topText}>Create A New Post</Text>
            </View>
            <ScrollView>
                <View style={styles.bodyView}>
                    <View style={styles.infoPostUser}>
                        <View style={styles.avatarFrame}>
                            <Image
                                style={styles.avatarImage}
                                resizeMode='stretch'
                                source={{
                                    uri: userState.currentUser.avatar_pic,
                                }}
                            />
                        </View>
                        <View style={styles.nameUserView}>
                            <View style={{
                                marginRight: 60
                            }}>
                                <Text style={
                                    styles.nameUserText}
                                >
                                    {userState.currentUser.username}

                                    <Text style={[styles.nameUserText, { fontWeight: 'normal' }, { fontSize: 15 }]}> is in </Text>
                                    {body.location && <Text style={[styles.nameUserText, { fontSize: 15 }]}> {body.location.name} </Text>}
                                </Text>
                            </View>

                            <TouchableOpacity onPress={eventChangeMode}>
                                {
                                    isPublic ?
                                        <View style={styles.modeFrame}>
                                            <Ionicons style={styles.iconModePost} name='earth' size={18} color={color.textIconSmall}></Ionicons>
                                            <Text style={styles.textModePost}>Public</Text>
                                            <Ionicons style={styles.downModePost} name='caret-down' size={18} color={color.textIconSmall}></Ionicons>
                                        </View>
                                        :
                                        <View style={styles.modeFrame}>
                                            <Ionicons style={styles.iconModePost} name='lock-closed' size={15} color={color.textIconSmall}></Ionicons>
                                            <Text style={styles.textModePost}>Private</Text>
                                            <Ionicons style={styles.downModePost} name='caret-down' size={18} color={color.textIconSmall}></Ionicons>
                                        </View>
                                }
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TextInput
                        style={[styles.inputCaption]}
                        placeholder="Let's share your food"
                        multiline={true}
                        onChangeText={handleContentChange}
                    />
                    <SwipeSlide />
                    <ScrollView
                        horizontal={true}
                    >
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            paddingVertical: 10,
                            paddingRight: 20,
                            borderColor: color.textIconSmall,
                            marginTop: 5
                        }}>
                            {foods&&foods.map(food => (
                                <RecipeShowed
                                    imageRecipe={food.photo}
                                    nameRecipe={food.name}
                                />
                            ))}

                        </View>
                    </ScrollView>

                </View>
            </ScrollView>
            <View style={styles.botView}>
                <TouchableOpacity onPress={eventRecipeAttached}>
                    <View style={styles.addRecipeView}>
                        <MaterialIcons style={styles.iconModePost} name='post-add' size={32} color={color.primary}></MaterialIcons>
                        <Text style={styles.textFunct}>Recipe</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.addPictureView}>
                        <MaterialIcons style={styles.iconModePost} name='image-search' size={28} color={color.iconGreen}></MaterialIcons>
                        <Text style={styles.textFunct}>Picture</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPressCheckIn}>
                    <View style={styles.addPositionView}>
                        <MaterialIcons style={styles.iconModePost} name='place' size={30} color={color.errorColor}></MaterialIcons>
                        <Text style={styles.textFunct}>Check in</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <SubmitNoLogo nameButton='POST' colorView={color.primary} colorName={color.background} />
                </View>
            </View>
        </View>
    )
}

export default NewPostScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background,
        paddingTop: 35,
        paddingBottom: 10,
    },
    topView: {
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingBottom: 7,
        paddingHorizontal: 15
    },
    topText: {
        fontFamily: 'Roboto',
        fontSize: 22,
        fontWeight: 'bold',
        color: color.textGray,
        marginLeft: 15
    },
    bodyView: {
        marginTop: 10,
    },
    infoPostUser: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        //alignItems: 'center'
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
        fontSize: 18,
        color: color.textGray,
        fontWeight: 'bold',
        marginBottom: 3,
    },
    modeFrame: {
        width: 90,
        height: 22,
        borderWidth: 0.5,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
        justifyContent: 'space-between',
        borderColor: color.textIconSmall
    },
    iconModePost: {

    },
    textModePost: {
        fontFamily: 'Roboto',
        color: color.textIconSmall,
        fontSize: 12
    },
    downModePost: {

    },
    inputCaption: {
        marginTop: 15,
        marginBottom: 10,
        paddingLeft: 22,
        fontFamily: 'Roboto',
        fontSize: 18,
        color: color.textGray
    },
    botView: {

    },
    addRecipeView: {
        flexDirection: 'row',
        paddingLeft: 20,
        alignItems: 'center',
        marginBottom: 5,
        borderBottomWidth: 0.5,
        paddingVertical: 5,
    },
    addPictureView: {
        flexDirection: 'row',
        paddingLeft: 20,
        alignItems: 'center',
        marginBottom: 5,
        borderBottomWidth: 0.5,
        paddingVertical: 5,
    },
    addPositionView: {
        flexDirection: 'row',
        paddingLeft: 20,
        alignItems: 'center',
        paddingVertical: 5,
    },
    textFunct: {
        fontFamily: 'Roboto',
        fontSize: 16,
        color: color.textGray,
        fontWeight: 'bold',
        marginLeft: 10
    }
})