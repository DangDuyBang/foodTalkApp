import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import color from '../contains/color'
import RectangleItem from './RectangleItem'

const ImagePic = {
    imagePost_first: 'https://i.pinimg.com/564x/b6/f1/87/b6f1875af462a35d69ea478ebf259f90.jpg',
    imagePost_second: 'https://i.pinimg.com/564x/78/2c/fa/782cfa2f03d9e93371deedcd7e9d33a6.jpg',
    imagePost_third: 'https://i.pinimg.com/564x/42/94/72/42947210c7ddcbc1b77c591ec3ebcbfa.jpg',
    imagePost_fouth: 'https://i.pinimg.com/564x/3f/32/94/3f32941eb6f31b5b7b972da29aefa329.jpg',
    imagePost_fith: 'https://i.pinimg.com/564x/fd/c9/c4/fdc9c4dc5ac319f37d2072054acec0b2.jpg',
    imagePost_sixth: 'https://i.pinimg.com/564x/3b/38/bc/3b38bc462ced2aab576dc3965515fda7.jpg',
    imagePost_seventh: 'https://i.pinimg.com/736x/99/4e/de/994ede70d8621abfd4d7ec7e4d12dced.jpg',
}

const ExploreItem = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <View style={styles.topTittleView}>
                    <View style={styles.leftTittleView}>
                        <View style={styles.iconTittleFrame}>
                            <Ionicons name={props.iconLeft} size={28} color={color.primary}></Ionicons>
                        </View>
                        <Text style={styles.tittleText}>{props.tittleLeft}</Text>
                    </View>
                    <Text style={styles.rightText}>></Text>
                </View>
            </TouchableOpacity>
            <ScrollView horizontal={true} style={styles.scrollExploreView}>
                <RectangleItem imageRectangle={ImagePic.imagePost_first} />
                <RectangleItem imageRectangle={ImagePic.imagePost_second} />
                <RectangleItem imageRectangle={ImagePic.imagePost_third} />
                <RectangleItem imageRectangle={ImagePic.imagePost_fouth} />
                <RectangleItem imageRectangle={ImagePic.imagePost_fith} />
                <RectangleItem imageRectangle={ImagePic.imagePost_sixth} />
                <RectangleItem imageRectangle={ImagePic.imagePost_seventh} />
            </ScrollView>
        </View>
    )
}

export default ExploreItem

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    topTittleView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        alignItems: 'center'
    },
    leftTittleView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconTittleFrame: {
        width: 40,
        height: 40,
        borderRadius: 40,
        backgroundColor: color.post,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tittleText: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: color.textGray,
        fontSize: 18,
        marginLeft: 5
    },
    rightText: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: color.textGray,
        fontSize: 18
    },
    scrollExploreView: {
        marginVertical: 20,
        paddingLeft: 15
    }
})