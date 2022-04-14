import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native'
import React, { useContext, useState } from 'react'
import color from '../../../contains/color'
import { Ionicons } from '@expo/vector-icons'
import { UserContext } from '../../../providers/UserProvider'

const EditProfileScreen = ({ navigation }) => {

    const { userState, userDispatch } = useContext(UserContext)

    const [firstName, setFirstName] = useState(userState.currentUser.first_name)
    const [lastName, setLastName] = useState(userState.currentUser.last_name)
    const [username, setUserName] = useState(userState.currentUser.username)
    const [about, setAbout] = useState("Huỳnh Tấn Phát, khu căn hộ cao cấp, Phường Tân Phú, Quận 7, Tp Hồ Chí Minh Tel: +84 28 54147667 Fax: +84 28 54147557")

    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <View style={styles.topLeftView}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <Ionicons name='arrow-back' size={35} color={color.textGray}></Ionicons>
                    </TouchableOpacity>
                    <Text style={styles.topText}>Edit Profile</Text>
                </View>
                <TouchableOpacity>
                    <Ionicons name='checkmark-sharp' size={35} color={color.primary}></Ionicons>
                </TouchableOpacity>
            </View>

            <ScrollView>
                <View style={styles.mid}>
                    <View style={styles.imageFrame}>
                        <View style={styles.coverFrame}>
                            <TouchableOpacity>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Image
                                        style={styles.coverImage}
                                        resizeMode='stretch'
                                        source={{
                                            uri: 'https://i.pinimg.com/564x/f7/c9/21/f7c9219902a7472f5c9bc244548311ce.jpg',
                                        }}
                                    />
                                    <Ionicons style={{ position: 'absolute' }} name='camera-outline' size={30} color={color.textGray}></Ionicons>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.avatarFrame}>
                            <TouchableOpacity>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Image
                                        style={styles.avatarImage}
                                        resizeMode='stretch'
                                        source={{
                                            uri: 'https://i.pinimg.com/564x/eb/ef/d5/ebefd5173889e9a8502cf04e7b016847.jpg',
                                        }}
                                    />
                                    <Ionicons style={{ position: 'absolute' }} name='camera-outline' size={25} color={color.textGray}></Ionicons>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.infomationView}>
                        <View style={styles.infoOptionView}>
                            <Text style={styles.inforOptions}>First Name</Text>
                            <TextInput
                                maxLength={25}
                                style={styles.inputInfo}
                                value={firstName}
                                onChangeText={(text) => setFirstName(text)}
                            />
                        </View>
                        <View style={styles.infoOptionView}>
                            <Text style={styles.inforOptions}>Last Name</Text>
                            <TextInput
                                maxLength={10}
                                style={styles.inputInfo}
                                value={lastName}
                                onChangeText={(text) => setLastName(text)}
                            />
                        </View>
                        <View style={styles.infoOptionView}>
                            <Text style={styles.inforOptions}>Username</Text>
                            <TextInput
                                maxLength={15}
                                style={styles.inputInfo}
                                value={username}
                                onChangeText={(text) => setUserName(text)}
                            />
                        </View>
                        <View style={styles.infoOptionView}>
                            <Text style={styles.inforOptions}>Email</Text>
                            <TextInput
                                style={styles.inputInfo}
                                editable={false}
                                placeholder={userState.currentUser.email}
                            />
                        </View>
                        <View style={styles.infoOptionView}>
                            <Text style={styles.inforOptions}>About</Text>
                            <TextInput
                                maxLength={150}
                                style={styles.inputInfo}
                                multiline={true}
                                value={about}
                                onChangeText={(text) => setAbout(text)}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default EditProfileScreen

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
        justifyContent: 'space-between',
        paddingBottom: 7,
        paddingHorizontal: 15
    },
    topLeftView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    topText: {
        fontFamily: 'Roboto',
        fontSize: 22,
        fontWeight: 'bold',
        color: color.textGray,
        marginLeft: 15
    },
    mid: {
        marginTop: 5,
    },
    imageFrame: {
        alignItems: 'center',
        paddingBottom: 30,
    },
    coverFrame: {
        width: 420,
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',
    },
    coverImage: {
        width: 420,
        height: 250,
        opacity: 0.3
    },
    avatarFrame: {
        width: 110,
        height: 110,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.background,
        borderRadius: 120,
        position: 'absolute',
        marginTop: 200,
    },
    avatarImage: {
        width: 90,
        height: 90,
        borderRadius: 150,
        opacity: 0.3
    },
    infomationView: {
        paddingHorizontal: 20,
        marginTop: 30
    },
    infoOptionView: {
        marginBottom: 10
    },
    inforOptions: {
        fontFamily: 'Roboto',
        color: color.textGray,
        fontWeight: 'bold',
        fontSize: 18,
    },
    inputInfo: {
        borderBottomWidth: 0.2,
        paddingVertical: 5,
        fontSize: 16,
        paddingHorizontal: 10,
        textAlignVertical: 'top'
    }
})