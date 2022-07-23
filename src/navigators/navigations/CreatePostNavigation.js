import React from 'react'
import ImageBrowserScreen from '../../screens/Extending/ImagePicker/ImagePickerMultiple'
import IMLocationSelectorModal from '../../screens/Extending/Map/Map'
import RecipeAttachedScreen from '../../screens/Recipe/RecipeAttachedScreen'
import { createStackNavigator } from "@react-navigation/stack";
import { config, closeConfig } from '../../utils/ScreenConfig'
import PostCreateScreen from '../../screens/Post/PostCreateScreen'
import { lightTheme, darkTheme } from "../../assets/color/Theme"
import { useSelector } from "react-redux";

const Stack = createStackNavigator();

const CreatePostNavigation = () => {
    const theme = useSelector((state) => state.theme.theme);

    let background_COLOR, text_COLOR;
    {
        theme.mode === "light" ?
            background_COLOR = lightTheme.FIRST_BACKGROUND_COLOR
            : background_COLOR = darkTheme.FIRST_BACKGROUND_COLOR;
    }
    {
        theme.mode === "light" ?
            text_COLOR = lightTheme.SECOND_TEXT_COLOR
            : text_COLOR = darkTheme.SECOND_TEXT_COLOR;
    }

    return (
        <Stack.Navigator
            initialRouteName="PostCreate">
            <Stack.Screen
                name='PostCreate'
                component={PostCreateScreen}
                options={{
                    title: 'Share your story',
                    headerStyle: {
                        backgroundColor: background_COLOR,
                    },
                    headerTintColor: text_COLOR,
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