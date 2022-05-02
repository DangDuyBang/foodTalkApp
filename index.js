import { registerRootComponent } from "expo";
import { Component } from "react";

import App from './App'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { ChatProvider } from "./providers/ChatProvider";
import { FoodProvider } from "./providers/FoodProvider";
import { PostProvider } from "./providers/PostProvider";
import { UIProvider } from "./providers/UIProvider";

import { UserProvider } from "./providers/UserProvider";

class Main extends Component {

    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}

registerRootComponent(Main)