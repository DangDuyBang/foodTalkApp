import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import color from '../../../contains/color'
import SubmitNoLogo from '../../../components/SubmitNoLogo'

const EvaluateRecipeScreen = () => {

    const [defaultRating, setDefaultRating] = useState(3)
    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5])

    const starImgFilled = 'https://github.com/tranhonghan/images/blob/main/star_filled.png?raw=true'
    const starImgCorner = 'https://github.com/tranhonghan/images/blob/main/star_corner.png?raw=true'

    const CustomRatingBar = () => {
        return (
            <View style={styles.customRatingBarStyle}>
                {
                    maxRating.map((item, key) => {
                        return (
                            <TouchableOpacity
                                activeOpacity={0.7}
                                key={item}
                                onPress={() => setDefaultRating(item)}
                            >
                                <Image
                                    style={styles.starImgStyle}
                                    source={
                                        item <= defaultRating
                                            ? { uri: starImgFilled }
                                            : { uri: starImgCorner }
                                    }
                                />
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.commentListView}>

            </View>
            <View style={styles.rateCommentView}>
                <Text>Rate Recipe</Text>
                <CustomRatingBar />
                <Text style={styles.markEvaluateText}>
                    {defaultRating + '/' + maxRating.length}
                </Text>
                <TextInput style={styles.inputRate} placeholder="Write comment ..." multiline={true} maxLength={260}/>
                <SubmitNoLogo nameButton='EVALUATE' colorView={color.primary} colorName={color.background} />
            </View>
        </View>
    )
}

export default EvaluateRecipeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background,
    },
    customRatingBarStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 30,
    },
    starImgStyle: {
        width: 30,
        height: 30,
        resizeMode: 'cover',
    },
    markEvaluateText: {
        textAlign: 'center',
        fontSize: 15,
        marginVertical: 10,
        color: color.textIconSmall,
    },
    commentListView: {
        flex: 1,
    },
    rateCommentView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    inputRate: {
        width: 370,
        height: 150,
        borderRadius: 30,
        backgroundColor: color.inputColor,
        paddingHorizontal: 10,
        marginBottom: 10,
        textAlign: 'center',
        
    }
})