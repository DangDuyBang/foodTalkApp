import React from 'react'
import ImageBrowserScreen from '../../screens/Extending/ImagePicker/ImagePickerMultiple'
import IMLocationSelectorModal from '../../screens/Extending/Map/Map'
import RecipeAttachedScreen from '../../screens/Recipe/RecipeAttachedScreen'
import { createStackNavigator } from "@react-navigation/stack";
import { config, closeConfig } from '../../utils/ScreenConfig'
import PostCreateScreen from '../../screens/Post/PostCreateScreen'

const Stack = createStackNavigator();

const CreatePostNavigation = () => {

    return (
        <Stack.Navigator
            initialRouteName="PostCreate">
            <Stack.Screen name='PostCreate' component={PostCreateScreen} options={{
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
                }}
            />
        </Stack.Navigator>
    )
}

export default CreatePostNavigation