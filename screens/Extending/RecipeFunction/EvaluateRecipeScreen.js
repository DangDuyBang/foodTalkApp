import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import color from '../../../contains/color'
import SubmitNoLogo from '../../../components/SubmitNoLogo'
import RecipeComment from '../../../components/RecipeComment'

const EvaluateRecipeScreen = () => {

    const [defaultRating, setDefaultRating] = useState(7)
    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

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
                <ScrollView>
                    <RecipeComment commentText='It is a good recipe'/>
                    <RecipeComment commentText='I did it and wonderfull. It is delicous'/>
                    <RecipeComment commentText='Good, I like it'/>
                    <RecipeComment commentText='I think it should be salt, it is not perfect'/>
                    <RecipeComment commentText='...I dont know to say anything. It is very good. Hope app will update more food like this.'/>
                    <RecipeComment commentText='Angry'/>
                </ScrollView>
            </View>
            <ScrollView>
                <View style={styles.rateCommentView}>
                    <Text>Rate Recipe</Text>
                    <CustomRatingBar />
                    <Text style={styles.markEvaluateText}>
                        {defaultRating + '/' + maxRating.length}
                    </Text>
                    <TextInput style={styles.inputRate} placeholder="Write comment ..." multiline={true} maxLength={220} />
                    <SubmitNoLogo nameButton='EVALUATE' colorView={color.primary} colorName={color.background} />
                </View>
            </ScrollView>
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
        marginTop: 15,
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
        flex: 100,
        backgroundColor: color.background
    },
    rateCommentView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderTopWidth: 0.5,
        backgroundColor: color.background,
        paddingTop: 25,
    },
    inputRate: {
        width: 350,
        height: 120,
        borderRadius: 20,
        backgroundColor: color.inputColor,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginBottom: 10,
        textAlignVertical: 'top'
    }
})