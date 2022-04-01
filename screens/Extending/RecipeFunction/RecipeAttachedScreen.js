import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import color from '../../../contains/color'
import { Ionicons } from '@expo/vector-icons'
import InputSearch from '../../../components/InputSearch'
import RecipePreview from '../../../components/RecipePreview'

const RecipeAttachedScreen = ({ navigation }) => {

    const eventNewRecipe = () => {
        navigation.navigate('NewRecipe')
      }

    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <View style={styles.leftView}>
                    <TouchableOpacity onPress={() => { navigation.navigate('NewPost') }}>
                        <Ionicons name='arrow-back' size={35} color={color.textGray}></Ionicons>
                    </TouchableOpacity>
                    <Text style={styles.topText}>Recipe Attached</Text>
                </View>
                <View style={styles.rightView}>
                    <TouchableOpacity onPress={eventNewRecipe}>
                        <Text style={{
                            fontSize: 32,
                            color: color.primary,
                            fontWeight: '500'
                        }}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <InputSearch inputIcon='search' inputName='Search Recipe' widthSearch={380} />
            <ScrollView>
                <View style={styles.body}>
                    <RecipePreview
                        imageRecipe="https://i.pinimg.com/564x/54/60/a0/5460a0721c26e6d3c7a1848ac1a24abd.jpg"
                        nameRecipe="Pizza"
                        authorRecipe="Dang Duy Bang"
                        markRecipe="4.5"
                    />
                    <RecipePreview
                        imageRecipe="https://i.pinimg.com/564x/91/1b/fb/911bfbe4f493ed427c8b19d1d69f2d57.jpg"
                        nameRecipe="Beef steak"
                        authorRecipe="Nguyen Nhut Tan"
                        markRecipe="4.5"
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default RecipeAttachedScreen

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
    leftView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    rightView: {
        backgroundColor: color.post,
        width: 50,
        height: 50,
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    topText: {
        fontFamily: 'Roboto',
        fontSize: 22,
        fontWeight: 'bold',
        color: color.textGray,
        marginLeft: 15
    },
})