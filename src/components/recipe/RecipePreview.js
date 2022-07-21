import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import color from '../../assets/color/color'
import { FontAwesome } from '@expo/vector-icons'
import Navigators from '../../navigators/navigators/Navigators'
import { lightTheme, darkTheme } from "../../assets/color/Theme"
import { useSelector } from "react-redux";

const RecipePreview = (props) => {
    const theme = useSelector((state) => state.theme.theme);

    let styles;
    {
        theme.mode === "light" ?
            styles = styles_light
            : styles = styles_dark;
    }

    const { navigateToDetailRecipe } = Navigators()

    return (
        <TouchableOpacity onPress={() => navigateToDetailRecipe(props.data)}>
            <View style={styles.container}>
                <View style={styles.infoPostUser}>
                    <View style={styles.avatarFrame}>
                        <Image
                            style={styles.avatarImage}
                            resizeMode='cover'
                            source={{
                                uri: props.data.photo,
                            }}
                        />
                    </View>
                    <View style={styles.nameUserView}>
                        {props.data.name.length > 20 ? <Text style={styles.nameUserText}>{props.data.name.slice(0, 18)} ...</Text> : <Text style={styles.nameUserText}>{props.data.name}</Text>}
                        {props.data.author && <Text style={styles.textModePost}>Made by {props.data.author.username}</Text>}
                    </View>
                </View>
                <View style={styles.rateStarView}>
                    <Text style={styles.markText}>{props.data.avg_score.toFixed(1)}</Text>
                    <FontAwesome name='star' size={20} color={lightTheme.STAR_COLOR}></FontAwesome>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default RecipePreview

const styles_light = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
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
        color: lightTheme.SECOND_TEXT_COLOR,
        fontWeight: 'bold',
        marginBottom: 3
    },
    textModePost: {
        fontFamily: 'Roboto',
        color: lightTheme.THIRD_TEXT_COLOR,
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
        color: lightTheme.THIRD_TEXT_COLOR,
        marginRight: 5,
    }
});

const styles_dark = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
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
        color: darkTheme.SECOND_TEXT_COLOR,
        fontWeight: 'bold',
        marginBottom: 3
    },
    textModePost: {
        fontFamily: 'Roboto',
        color: darkTheme.THIRD_TEXT_COLOR,
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
        color: darkTheme.THIRD_TEXT_COLOR,
        marginRight: 5,
    }
})