import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import color from '../../contains/color'
import RecipePreview from '../../components/RecipePreview'
import useFetchFood from './hooks/useFetchFood'
import InfinityScrollView from '../../components/InfinityScrollView'
import { useSelector } from 'react-redux'

const RecipePublicScreen = () => {

    const { fetchUserFoodsList } = useFetchFood()
    const foods = useSelector(state => state.user.currentUser.foods)

    return (
        <View style={styles.container}>
            <InfinityScrollView onLoads={fetchUserFoodsList}>
                {foods && foods.map(food => <RecipePreview data={food} key={food._id} />)}
                {/* Sử dụng Component RecipePreview để hiển thị ở trang này */}
                {/* <RecipePreview /> */}
            </InfinityScrollView>
        </View>


    )
}

export default RecipePublicScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background,
        // paddingHorizontal: 10,
        // paddingVertical: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        //paddingBottom: 130,
    },
})