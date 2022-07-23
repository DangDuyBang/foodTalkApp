import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import color from '../../assets/color/color'
import AvatarUser from './AvatarUser'
import LottieView from 'lottie-react-native'
import { lightTheme, darkTheme } from "../../assets/color/Theme"
import { useSelector } from "react-redux";

const UserReaction = (props) => {
    const theme = useSelector((state) => state.theme.theme);

    let styles;
    {
        theme.mode === "light" ?
            styles = styles_light
            : styles = styles_dark;
    }

    const animation = React.useRef(null);
    React.useEffect(() => {
        animation.current.play(19, 50);
    }, [])

    return (
        <TouchableOpacity>
            <View style={styles.container} >
                <View style={styles.avatarAndName}>
                    <AvatarUser
                        sizeImage={50}
                        profile={props.reaction}
                    />

                    {/* <Text style={{ color: color.errorColor, fontSize: 12, position: 'absolute', left: 35, top: 30 }}>❤</Text> */}

                    <View style={styles.textContain}>
                        <Text style={styles.chatFullname}>{props.reaction.username}</Text>
                        <Text style={styles.chatUsername}>{props.reaction.first_name} {props.reaction.last_name}</Text>
                    </View>
                </View>
                <View style={{
                    alignItems: 'center',
                }}>
                    <LottieView
                        ref={animation}
                        source={require('../../assets/lottie/44921-like-animation.json')}
                        autoPlay={false}
                        loop={false}
                        speed={2}
                        style={{
                            width: 50,
                            height: 50,
                        }}
                    />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default UserReaction

const styles_light = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    avatarAndName: {
        flexDirection: 'row',
    },
    chatAvatarFrame: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: lightTheme.SECOND_BACKGROUND_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContain: {
        marginLeft: 10,
        justifyContent: 'center',
        width: '80  %',
    },
    chatFullname: {
        fontFamily: 'Roboto',
        color: lightTheme.SECOND_TEXT_COLOR,
        fontWeight: 'bold',
        fontSize: 17,
    },
    chatUsername: {
        fontFamily: 'Roboto',
        color: lightTheme.THIRD_TEXT_COLOR,
        fontSize: 12,
    },
    tinyAvatar: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
});

const styles_dark = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    avatarAndName: {
        flexDirection: 'row',
    },
    chatAvatarFrame: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: darkTheme.SECOND_BACKGROUND_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContain: {
        marginLeft: 10,
        justifyContent: 'center',
        width: '80  %',
    },
    chatFullname: {
        fontFamily: 'Roboto',
        color: darkTheme.SECOND_TEXT_COLOR,
        fontWeight: 'bold',
        fontSize: 17,
    },
    chatUsername: {
        fontFamily: 'Roboto',
        color: darkTheme.THIRD_TEXT_COLOR,
        fontSize: 12,
    },
    tinyAvatar: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
})