import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import color from '../../contains/color'
import { Ionicons } from '@expo/vector-icons'

const CreatePostScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
                    <Ionicons name='arrow-back' size={35} color={color.textGray}></Ionicons>
                </TouchableOpacity>
                <Text style={styles.topText}>Create A New Post</Text>
            </View>
            <View style={styles.bodyView}>
                <View style={styles.infoPostUser}>
                    <View style={styles.avatarFrame}>
                        <Image
                            style={styles.avatarImage}
                            resizeMode='stretch'
                            source={{
                                uri: 'https://i.pinimg.com/564x/eb/ef/d5/ebefd5173889e9a8502cf04e7b016847.jpg',
                            }}
                        />
                    </View>
                    <View style={styles.nameUserView}>
                        <Text style={styles.nameUserText}>nntan_food_talk</Text>
                        <View style={styles.modeFrame}>
                            <Ionicons style={styles.iconModePost} name='earth' size={18} color={color.textIconSmall}></Ionicons>
                            <Text style={styles.textModePost}>Public</Text>
                            <Ionicons style={styles.downModePost} name='caret-down' size={18} color={color.textIconSmall}></Ionicons>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CreatePostScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background,
        paddingTop: 35,
        paddingBottom: 65
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
        marginTop: 10
    },
    infoPostUser: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        alignItems: 'center'
    },
    avatarFrame: {
        width: 55,
        height: 55,
        borderRadius: 55,
        backgroundColor: color.primary,
        marginRight: 15
    },
    avatarImage: {
        width: 55,
        height: 55,
        borderRadius: 155,
    },
    nameUserView: {

    },
    nameUserText: {
        fontFamily: 'Roboto',
        fontSize: 18,
        color: color.textGray,
        fontWeight: 'bold',
        marginBottom: 3
    },
    modeFrame: {
        width: 90,
        height: 25,
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

    }
})