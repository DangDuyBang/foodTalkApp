import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { Ionicons, Entypo, FontAwesome, AntDesign } from '@expo/vector-icons'
import color from '../../../contains/color'
import SubmitNoLogo from '../../../components/SubmitNoLogo'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PublicPostScreen from './PublicPostScreen'

const Tab = createMaterialTopTabNavigator();

const PersonalPageScreen = ({ navigation }) => {

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
            <View style={styles.top}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <FontAwesome
                            name="arrow-left"
                            size={24}
                            style={styles.iconArrow}
                        ></FontAwesome>
                    </TouchableOpacity>
                    <Text style={styles.nameUser}>bbang_food_talk</Text>
                </View>
                <TouchableOpacity>
                    <Entypo name='dots-three-horizontal' size={24} color={color.textGray} />
                </TouchableOpacity>
            </View>
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

                        <View style={styles.avatarFrame}>
                            <Image
                                //source={require('../../contains//assetImages//background_signIn.jpg')}
                                style={styles.avatarImage}
                                resizeMode='stretch'
                                source={{
                                    uri: 'https://i.pinimg.com/564x/35/e9/f7/35e9f7e7b6ce436d9360d3d7e7b50c92.jpg',
                                }}
                            />
                        </View>

                        <View style={styles.fullNameFrame}>
                            <Text style={styles.fullName}>Dang Duy Bang</Text>
                            <TouchableOpacity>
                                <Ionicons name='pencil' size={18} color={color.textIconSmall}></Ionicons>
                            </TouchableOpacity>
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
        paddingTop: 50,
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    iconArrow: {
        marginRight: 15,
        color: color.textGray,
    },
    nameUser: {
        fontSize: 20,
        color: color.textGray,
        fontWeight: 'bold',
        fontFamily: 'Roboto'
    },
    mid: {
        marginTop: 5,
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