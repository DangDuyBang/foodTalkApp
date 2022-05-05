import React from 'react'
import ImageBrowserScreen from '../Extending/ImagePicker/ImagePickerMultiple'
import IMLocationSelectorModal from '../Extending/Map/Map'
import RecipeAttachedScreen from '../Extending/RecipeFunction/RecipeAttachedScreen'
import { createStackNavigator } from "@react-navigation/stack";
import { config, closeConfig } from '../../utils/ScreenConfig'
import NewPostScreen from './NewPostScreen'

const Stack = createStackNavigator();

const CreatePostNavigation = () => {

    return (
        <Stack.Navigator
            initialRouteName="CreatePostPage">
            <Stack.Screen name='CreatePostPage' component={NewPostScreen} options={{
                title: 'Share your story'
            }} />
            <Stack.Screen name="ImagePickerMultiple" component={ImageBrowserScreen} options={{
                title: 'Selected 0 files',
            }} />
            <Stack.Screen name="Map" component={IMLocationSelectorModal} />
            <Stack.Screen name="RecipeAttached" component={RecipeAttachedScreen}
                options={{
                    title: 'Attached Recipes',
                    gestureEnabled: true,
                    gestureDirection: 'horizontal',
                    transitionSpec: {
                        open: config,
                        close: closeConfig,
                    },
                    //cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }}
            />
        </Stack.Navigator>
    )
}

export default CreatePostNavigation