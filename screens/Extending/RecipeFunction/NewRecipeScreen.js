import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import color from '../../../contains/color'
import { Ionicons } from '@expo/vector-icons'
import IngredientAdd from '../../../components/IngredientAdd'
import ProcessAdd from '../../../components/ProcessAdd'
import ProcessShow from '../../../components/ProcessShow'
import IngredientShow from '../../../components/IngredientShow'
import useNewReceipt from './hooks/useNewReceipt'
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

const NewRecipeScreen = ({ navigation }) => {
    navigation.setOptions({
        title: 'New recipe',
        headerRight: () => (
            <TouchableOpacity style={{ marginRight: 16 }}>
                <Ionicons name='checkmark-sharp' size={35} color={color.primary}></Ionicons>
            </TouchableOpacity>
        )
    })
    const renderInner = () => (
        <View style={styles.panel}>
            <View onPress={() => bs.current.snapTo(1)} style={{ alignItems: 'center' }}>
                <View style={{ height: 4, width: 65, borderRadius: 100, backgroundColor: color.textIconSmall, marginTop: 15 }} />
                <Text onPress={() => bs.current.snapTo(1)}
                    style={{
                        fontFamily: 'Roboto',
                        fontSize: 22,
                        fontWeight: 'bold',
                        color: color.textGray,
                        marginBottom: 10
                    }}>
                    Upload Photo
                </Text>
            </View>
            <TouchableOpacity onPress={() => openImagePickerAsync(true, bs.current.snapTo(1))}>
                <View style={styles.frameOptionSetting}>
                    <Text style={styles.optionSetting}>Take Photo</Text>
                </View >
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openImagePickerAsync(false, bs.current.snapTo(1))}>
                <View style={styles.frameOptionSetting}>
                    <Text style={styles.optionSetting}>Choose From Library</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => bs.current.snapTo(1)}>
                <View style={styles.frameOptionSetting}>
                    <Text style={styles.optionSetting}>Cancel</Text>
                </View>
            </TouchableOpacity>
        </View>
    );

    const renderHeader = () => (
        <View style={styles.header}>
            <View style={styles.panelHeader}>
                <View style={styles.panelHandle}></View>
            </View>
        </View>
    );

    const bs = React.createRef();
    const fall = new Animated.Value(1);

    const { processList, ingredientList, uri, handleAddProcess, handleAddIngrdient, handleDeleteProcess, handleDeleteIngredient, openImagePickerAsync } = useNewReceipt()
    return (
        <View style={styles.container}>
            <BottomSheet
                ref={bs}
                snapPoints={['31%', -300]}
                borderRadius={10}
                renderContent={renderInner}
                renderHeader={renderHeader}
                initialSnap={1}
                callbackNode={fall}
                enabledGestureInteraction={true}
            />
            <Animated.View
                style={{
                    margin: 0,
                    opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
                    marginBottom: 60
                }}
            >
                <ScrollView>
                    <View style={styles.body}>
                        <View style={styles.imageFoodFrame}  >
                            <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
                                {/* onPress={openImagePickerAsync} */}
                                {!uri ? <Ionicons name='camera-outline' size={35} color={color.primary}></Ionicons> :
                                    <Image source={uri} style={styles.image} />}
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.ingredientTittle}>Food Name</Text>
                        <TextInput
                            placeholder='Type name of food'
                            maxLength={20}
                            style={{
                                fontFamily: 'Roboto',
                                borderBottomWidth: 0.5,
                                paddingVertical: 10,
                                fontSize: 16,
                                paddingHorizontal: 10
                            }}
                        />
                        <Text style={styles.ingredientTittle}>Ingredients</Text>
                        
                        <View>
                            {
                                ingredientList.map((item, index) => {
                                    return <IngredientShow key={index} ingredientAn={item} onDeleteIngredient={() => handleDeleteIngredient(index)} />
                                })
                            }
                        </View>
                        <IngredientAdd onAddIngredient={handleAddIngrdient} />
                        <Text style={styles.ingredientTittle}>Process</Text>
                        <View>
                            {
                                processList.map((item, index) => {
                                    return <ProcessShow key={index} step={item} indexNumber={index + 1} onDeleteProcess={() => handleDeleteProcess(index)} />
                                })
                            }
                        </View>
                        <ProcessAdd onAddProcess={handleAddProcess} />
                    </View>
                </ScrollView>
            </Animated.View>
        </View>
    )
}

export default NewRecipeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background,
    },
    topView: {
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 7,
        paddingHorizontal: 15
    },
    topLeftView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    topText: {
        fontFamily: 'Roboto',
        fontSize: 22,
        fontWeight: 'bold',
        color: color.textGray,
        marginLeft: 15
    },
    body: {
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    imageFoodFrame: {
        width: '100%',
        height: 250,
        borderRadius: 20,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ingredientTittle: {
        marginTop: 10,
        fontFamily: 'Roboto',
        fontSize: 18,
        color: color.textGray,
        fontWeight: 'bold'
    },
    image: {
        resizeMode: 'stretch',
        width: 370,
        height: 250,
        borderRadius: 20,
    },
    panel: {
        backgroundColor: color.background,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
    },
    optionSetting: {
        fontFamily: 'Roboto',
        fontSize: 16,
        marginLeft: 5,
        color: color.textGray,
        fontWeight: '900'
    },
    frameOptionSetting: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        marginHorizontal: 20,
        marginTop: 10,
        paddingVertical: 15,
        borderRadius: 15,
        backgroundColor: color.post
    }
})