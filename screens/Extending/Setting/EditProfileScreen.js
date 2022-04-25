import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native'
import React, { useContext, useState } from 'react'
import color from '../../../contains/color'
import { Ionicons } from '@expo/vector-icons'
import { UserContext } from '../../../providers/UserProvider'
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import useEditProfile from './hooks/useEditProfile'

const EditProfileScreen = ({ navigation }) => {
    navigation.setOptions({
        title: 'Update Profile',
        headerRight: () => (
            <TouchableOpacity style={{ marginRight: 16 }}>
                <Ionicons name='checkmark-sharp' size={35} color={color.primary}></Ionicons>
            </TouchableOpacity>
        )
    })
    const [isAvatar, setIsAvatar] = useState(true)

    const changeCover = () => {
        bs.current.snapTo(0)
        setIsAvatar(false)
    }

    const changeAvatar = () => {
        bs.current.snapTo(0)
        setIsAvatar(true)
    }

    const { userState, userDispatch } = useContext(UserContext)

    const [firstName, setFirstName] = useState(userState.currentUser.first_name)
    const [lastName, setLastName] = useState(userState.currentUser.last_name)
    const [username, setUserName] = useState(userState.currentUser.username)
    const [about, setAbout] = useState("Huỳnh Tấn Phát, khu căn hộ cao cấp, Phường Tân Phú, Quận 7, Tp Hồ Chí Minh Tel: +84 28 54147667 Fax: +84 28 54147557")

    const renderInner = () => (
        <View style={styles.panel}>
            <View onPress={() => bs.current.snapTo(1)} style={{ alignItems: 'center' }}>
                <View style={{ height: 4, width: 65, borderRadius: 100, backgroundColor: color.textIconSmall, marginTop: 15 }} />
                <Text onPress={() => bs.current.snapTo(1)}
                    style={{
                        fontFamily: 'Roboto',
                        fontSize: 22,
                        fontWeight: 'bold',
                        color: color.textGray,
                        marginBottom: 10
                    }}>
                    Upload Photo
                </Text>
            </View>
            <TouchableOpacity onPress={() => openCoverImagePickerAsync(true, bs.current.snapTo(1), isAvatar)}>
                <View style={styles.frameOptionSetting}>
                    <Text style={styles.optionSetting}>Take Photo</Text>
                </View >
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openCoverImagePickerAsync(false, bs.current.snapTo(1), isAvatar)}>
                <View style={styles.frameOptionSetting}>
                    <Text style={styles.optionSetting}>Choose From Library</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => bs.current.snapTo(1)}>
                <View style={styles.frameOptionSetting}>
                    <Text style={styles.optionSetting}>Cancel</Text>
                </View>
            </TouchableOpacity>
        </View>
    );

    const renderHeader = () => (
        <View style={styles.header}>
            <View style={styles.panelHeader}>
                <View style={styles.panelHandle}></View>
            </View>
        </View>
    );

    const bs = React.createRef();
    const fall = new Animated.Value(1);

    const { uriCover, uriAvatar, openCoverImagePickerAsync } = useEditProfile()
    return (
        <View style={styles.container}>
            <BottomSheet
                ref={bs}
                snapPoints={['31%', -300]}
                borderRadius={10}
                renderContent={renderInner}
                renderHeader={renderHeader}
                initialSnap={1}
                callbackNode={fall}
                enabledGestureInteraction={true}
            />
            <Animated.View
                style={{
                    margin: 0,
                    opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
                    marginBottom: 60
                }}
            >
                <ScrollView>
                    <View style={styles.mid}>
                        <View style={styles.imageFrame}>
                            <View style={styles.coverFrame}>
                                <TouchableOpacity onPress={changeCover}>
                                    {
                                        !uriCover ?
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
                                            :
                                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                <Image
                                                    style={styles.coverImage}
                                                    resizeMode='stretch'
                                                    source={uriCover}
                                                />
                                                <Ionicons style={{ position: 'absolute' }} name='camera-outline' size={30} color={color.textGray}></Ionicons>
                                            </View>
                                    }
                                </TouchableOpacity>
                            </View>

                            <View style={styles.avatarFrame}>
                                <TouchableOpacity onPress={changeAvatar}>
                                    {
                                        !uriAvatar ?
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
                                            :
                                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                <Image
                                                    style={styles.avatarImage}
                                                    resizeMode='stretch'
                                                    source={uriAvatar}
                                                />
                                                <Ionicons style={{ position: 'absolute' }} name='camera-outline' size={25} color={color.textGray}></Ionicons>
                                            </View>
                                    }

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
            </Animated.View>
        </View>
    )
}

export default EditProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background,
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
    },
    panel: {
        backgroundColor: color.background,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
    },
    optionSetting: {
        fontFamily: 'Roboto',
        fontSize: 16,
        marginLeft: 5,
        color: color.textGray,
        fontWeight: '900'
    },
    frameOptionSetting: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        marginHorizontal: 20,
        marginTop: 10,
        paddingVertical: 15,
        borderRadius: 15,
        backgroundColor: color.post
    }
})