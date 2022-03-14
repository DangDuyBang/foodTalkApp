import { registerRootComponent } from "expo";
import { Component } from "react";

import App from './App'

import { UserProvider } from "./providers/UserProvider";

class Main extends Component {

    render(){
        return (
            <UserProvider>
                <App />
            </UserProvider>
        )
    }
}

registerRootComponent(Main)