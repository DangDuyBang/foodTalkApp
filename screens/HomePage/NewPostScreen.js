import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView, SafeAreaView } from 'react-native'
import React, { useState, useContext, useRef } from 'react'
import color from '../../contains/color'
import { Ionicons, MaterialIcons, AntDesign } from '@expo/vector-icons'
import SwipeSlide from '../../components/SwipeSlide'
import SubmitNoLogo from '../../components/SubmitNoLogo'
import { useCreatePost } from './hooks/useCreatePost'
import { UserContext } from '../../providers/UserProvider'
import RecipeShowed from '../../components/RecipeShowed'
import ImageBrowserScreen from '../Extending/ImagePicker/ImagePickerMultiple'
import IMLocationSelectorModal from '../Extending/Map/Map'
import RecipeAttachedScreen from '../Extending/RecipeFunction/RecipeAttachedScreen'
import { createStackNavigator } from "@react-navigation/stack";
import { config, closeConfig } from '../../utils/ScreenConfig'
import { useSelector } from 'react-redux'
const Stack = createStackNavigator();

const NewPostScreen = ({ navigation }) => {
    //cập nhật thêm checkin với foods

    const { isPublic, foods, content, location, photos, eventChangeMode, eventRecipeAttached, onPressCheckIn, handleContentChange, onPressPhoto, onCreatePost } = useCreatePost({ navigation })

    const currentUser = useSelector(state => state.user.currentUser)

    const NewPost = () => {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.bodyView}>
                        <View style={styles.infoPostUser}>
                            <View style={styles.avatarFrame}>
                                <Image
                                    style={styles.avatarImage}
                                    resizeMode='stretch'
                                    source={{
                                        uri: currentUser.avatar_pic,
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
                                        {currentUser.username}

                                        {location && <Text style={[styles.nameUserText, { fontWeight: 'normal' }, { fontSize: 15 }]}> is in </Text>}
                                        {location && <Text style={[styles.nameUserText, { fontSize: 15 }]}> {location} </Text>}
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
                            defaultValue={content}
                        />
                        {photos && photos.length !== 0 && <SwipeSlide photos={photos.map(photo => photo.uri)} />}
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
                                {foods && foods.map(food => (
                                    <RecipeShowed
                                        key={food.id}
                                        food={food}
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

                    <TouchableOpacity onPress={onPressPhoto}>
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
                        <SubmitNoLogo nameButton='POST' colorView={color.primary} colorName={color.background} eventButton={onCreatePost} />
                    </View>
                </View>
            </View>
        )
    }

    return (
        <Stack.Navigator>
            <Stack.Screen name='CreatePostPage' component={NewPost} options={{
                title: 'Share your story'
            }} />
            <Stack.Screen name="ImagePickerMultiple" component={ImageBrowserScreen} options={{
                title: 'Selected 0 files',
            }} />
            <Stack.Screen name="Map" component={IMLocationSelectorModal} />
            <Stack.Screen name="RecipeAttached" component={RecipeAttachedScreen}
                options={{
                    title: 'Attached Recipes',
                    gestureEnabled: true,
                    gestureDirection: 'horizontal',
                    transitionSpec: {
                        open: config,
                        close: closeConfig,
                    },
                    //cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }}
            />
        </Stack.Navigator>
    )
}

export default NewPostScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background,
        paddingBottom: 10,
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
        marginBottom: 8,
    },
    textFunct: {
        fontFamily: 'Roboto',
        fontSize: 16,
        color: color.textGray,
        fontWeight: 'bold',
        marginLeft: 10
    }
})