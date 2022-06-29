import { registerRootComponent } from "expo";
import { Component } from "react";

import App from './App'
import { store } from './redux/store'
import { Provider } from 'react-redux'

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