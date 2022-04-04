import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import color from '../../../contains/color'
import SubmitNoLogo from '../../../components/SubmitNoLogo'
import RecipeComment from '../../../components/RecipeComment'

const EvaluateRecipeScreen = () => {

    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds
        setCurrentDate(
            date + '/' + month + '/' + year
            // + ' ' + hours + ':' + min + ':' + sec
        );
    }, []);

    const [comment, setComment] = useState('')
    const [commentList, setCommentList] = useState([])
    const [star, setStar] = useState(7)

    const [defaultRating, setDefaultRating] = useState(7)
    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

    const starImgFilled = 'https://github.com/tranhonghan/images/blob/main/star_filled.png?raw=true'
    const starImgCorner = 'https://github.com/tranhonghan/images/blob/main/star_corner.png?raw=true'

    const handleComment = () => {
        if (comment.length === 0) {
            alert("Fill comment");
            return false;
        }
        setCommentList([...commentList, comment])
        setComment('')
        setStar(defaultRating)
    }

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
                    {
                        commentList.map((item, index) => {
                            return <RecipeComment commentText={item} key={index} starMark={star} dateComment={currentDate} />
                        })
                    }
                </ScrollView>
            </View>
            <ScrollView>
                <View style={styles.rateCommentView}>
                    <Text>Rate Recipe</Text>
                    <CustomRatingBar />
                    <Text style={styles.markEvaluateText}>
                        {defaultRating + '/' + maxRating.length}
                    </Text>
                    <TextInput
                        value={comment}
                        style={styles.inputRate} placeholder="Write comment ..."
                        multiline={true}
                        maxLength={220}
                        onChangeText={(text) => setComment(text)}
                    />
                    <SubmitNoLogo eventButton={handleComment} nameButton='EVALUATE' colorView={color.primary} colorName={color.background} />
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