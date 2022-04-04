import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import color from '../../../contains/color'

const ContentRecipeScreen = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image
                    style={styles.coverImage}
                    resizeMode='stretch'
                    source={{
                        uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-homemade-pizza-horizontal-1542312378.png?crop=1.00xw:1.00xh;0,0&resize=980:*',
                    }}
                />
                <Text style={styles.nameRecipe}>Pizza</Text>
                <Text style={styles.ingredientTittle}>Ingredients</Text>
                <Text style={styles.ingredientContent}>
                    25 g butter (you can use ghee or 2; {'\n'}
                    tablespoons of olive oil, if you prefer); {'\n'}
                    1 large white onion sliced; {'\n'}
                    3 cm stick of cinnamon; {'\n'}
                    4 cardamom pods bashed; {'\n'}
                    2 cloves; {'\n'}
                    1 teaspoon ground turmeric; {'\n'}
                    ½ teaspoon salt; {'\n'}
                    2 bay leaves; {'\n'}
                    300 g basmati rice; {'\n'}
                    600 ml boiling water; {'\n'}
                </Text>
                <Text style={styles.processTittle}>Process</Text>
                <Text style={styles.processContent}>
                    1. Melt the butter very gently in a medium-sized saucepan. Add the sliced onion, cinnamon, bashed cardamom pods, cloves, turmeric, salt and bay leaves. Cover with a lid and cook on a low heat for 5-10 minutes until the onions are very soft but not brown, stirring occasionally. {'\n'}
                    2. Add in the basmati rice and stir to coat the rice in the onions and spices. {'\n'}
                    3. Pour in 600ml boiling water and bring back to the boil. Cover with a lid and turn the heat right down. Continue cooking for 8 minutes or until all the water is absorbed. {'\n'}
                    4. Turn the heat off completely (take the saucepan off the burner if you are using electric), but leave the lid on. Allow the rice to steam for 5 minutes. {'\n'}
                </Text>
            </View>
        </ScrollView>

    )
}

export default ContentRecipeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background,
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    coverImage: {
        width: '100%',
        height: 250,
        borderRadius: 20
    },
    nameRecipe: {
        fontFamily: 'Roboto',
        fontSize: 24,
        color: color.textBlue,
        fontWeight: 'bold'
    },
    ingredientTittle: {
        marginTop: 10,
        fontFamily: 'Roboto',
        fontSize: 18,
        color: color.textGray,
        fontWeight: 'bold'
    },
    ingredientContent: {
        fontFamily: 'Roboto',
        flexWrap: 'wrap',
        color: color.textBlack,
        marginLeft: 25,
    },
    processTittle: {
        fontFamily: 'Roboto',
        fontSize: 18,
        color: color.textGray,
        fontWeight: 'bold'
    },
    processContent: {
        fontFamily: 'Roboto',
        flexWrap: 'wrap',
        color: color.textBlack,
        marginLeft: 25
    }
})