import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { Ionicons, Entypo, FontAwesome, AntDesign } from '@expo/vector-icons'
import color from '../../../contains/color'
import SubmitNoLogo from '../../../components/SubmitNoLogo'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PublicPostScreen from './PublicPostScreen'
import RecipePostScreen from './RecipePostScreen'
import AvatarUser from '../../../components/AvatarUser'

const Tab = createMaterialTopTabNavigator();

const PersonalPageScreen = ({ navigation }) => {

    navigation.setOptions({
        title: 'bbang_food_talk',
        headerRight: () => (
            <TouchableOpacity>
                <Entypo name='dots-three-horizontal' style={{ marginRight: 15 }} size={24} color={color.textGray} />
            </TouchableOpacity>
        )
    })

    const [isFollowing, setIsFollowing] = useState(false)

    const eventFollowing = () => {
        if (isFollowing == false) {
            setIsFollowing(true)
        } else if (isFollowing == true) {
            setIsFollowing(false)
        }
    }

    const eventDetailChat = () => {
        navigation.navigate('DetailChat')
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.mid}>
                    <View style={styles.imageFrame}>
                        <Image
                            //source={require('../../contains//assetImages//background_signIn.jpg')}
                            style={styles.coverImage}
                            resizeMode='stretch'
                            source={{
                                uri: 'https://i.pinimg.com/564x/0c/54/67/0c5467789afb0fe8a592aa2b318d0683.jpg',
                            }}
                        />

                        <AvatarUser
                            sizeFrame={110}
                            sizeImage={90}
                            position='absolute'
                            marginTop={200}
                            siz avatar_url={'https://i.pinimg.com/564x/c9/67/37/c967379efafcab8654591d6e5a1c1a21.jpg'}
                        />

                        <View style={styles.fullNameFrame}>
                            <Text style={styles.fullName}>Dang Duy Bang</Text>
                        </View>
                    </View>
                    {
                        isFollowing ?
                            <View style={styles.chatFrame}>
                                <TouchableOpacity onPress={eventDetailChat}>
                                    <Ionicons name='chatbubble-ellipses-outline' size={42} color={color.primary}></Ionicons>
                                </TouchableOpacity>
                            </View>
                            :
                            null
                    }
                </View>
                <View style={styles.bot}>
                    <View style={{
                        alignItems: 'center',
                        marginTop: 10,
                        flexDirection: 'row',
                        justifyContent: 'space-evenly'
                    }}>
                        {
                            isFollowing ?
                                <SubmitNoLogo
                                    eventButton={eventFollowing}
                                    nameButton='Following'
                                    colorView={color.inputColor}
                                    colorName={color.textIconSmall}
                                />
                                :
                                <SubmitNoLogo
                                    eventButton={eventFollowing}
                                    nameButton='Follow'
                                    colorView={color.primary}
                                    colorName={color.background}
                                />
                        }
                    </View>
                    <View style={styles.followView}>
                        <View style={styles.followingView}>
                            <Text style={styles.followText}>Following</Text>
                            <Text style={styles.followNumberText}>10</Text>
                        </View>
                        <View style={styles.followingView}>
                            <Text style={styles.followText}>Follower</Text>
                            <Text style={styles.followNumberText}>20</Text>
                        </View>
                        <View style={styles.followingView}>
                            <Text style={styles.followText}>Like</Text>
                            <Text style={styles.followNumberText}>50</Text>
                        </View>
                    </View>

                    <Text style={styles.aboutText}>
                        The application to "search" and "review" food locations
                        in most of the provinces and cities in Vietnam such as Ho Chi Minh City,...
                    </Text>
                </View>

                <TouchableOpacity>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 10
                    }}>
                        <AntDesign name='book' size={20} color={color.primary}></AntDesign>
                        <Text style={{
                            fontFamily: 'Roboto',
                            color: color.primary,
                            fontSize: 15,
                            fontWeight: 'bold',
                            marginLeft: 5
                        }}>
                            Recipe
                        </Text>
                    </View>
                </TouchableOpacity>

                <Tab.Navigator tabBarOptions={{
                    showLabel: false,
                    showIcon: true,
                    style: {

                    },
                    paddingHorizontal: 15,
                }}>
                    <Tab.Screen name="Public" component={PublicPostScreen} options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={{
                                position: 'absolute',
                                top: '0%',
                            }}>
                                <View style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <Ionicons
                                        name="ios-create-outline"
                                        size={25}
                                        color={focused ? color.textBlack : color.hideColor}
                                    ></Ionicons>
                                </View>
                            </View>
                        )
                    }} />

                    <Tab.Screen name="Recipe" component={RecipePostScreen} options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={{
                                position: 'absolute',
                                top: '0%',
                            }}>
                                <View style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <Ionicons
                                        name="book-outline"
                                        size={25}
                                        color={focused ? color.textBlack : color.hideColor}
                                    ></Ionicons>
                                </View>
                            </View>
                        )
                    }} />
                </Tab.Navigator>
            </ScrollView>
        </View>
    )
}

export default PersonalPageScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background,
    },
    mid: {
        flexDirection: 'row-reverse'
    },
    imageFrame: {
        alignItems: 'center',
    },
    coverImage: {
        width: 420,
        height: 250,
    },
    chatFrame: {
        width: 50,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.post,
        position: 'absolute',
        marginRight: 10,
        marginTop: 10
    },
    avatarFrame: {
        width: 110,
        height: 110,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.background,
        borderRadius: 120,
        position: 'absolute',
        marginTop: 200
    },
    avatarImage: {
        width: 90,
        height: 90,
        borderRadius: 150,
    },
    fullNameFrame: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 55,
    },
    fullName: {
        fontSize: 20,
        color: color.textGray,
        fontWeight: 'bold',
        marginRight: 10,
    },
    followView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 15
    },
    followingView: {
        alignItems: 'center',
        width: 80,
        height: 30
    },
    followText: {
        fontFamily: 'Roboto',
        fontSize: 16,
        color: color.textIconSmall,
    },
    followNumberText: {
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        fontSize: 16,
        color: color.textGray,
    },
    aboutText: {
        textAlign: 'center',
        marginVertical: 35,
        fontFamily: 'Roboto',
        fontSize: 15,
        marginHorizontal: 30
    },
})