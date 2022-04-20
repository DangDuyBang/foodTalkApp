import { registerRootComponent } from "expo";
import { Component } from "react";

import App from './App'
import { ChatProvider } from "./providers/ChatProvider";
import { FoodProvider } from "./providers/FoodProvider";
import { PostProvider } from "./providers/PostProvider";
import { UIProvider } from "./providers/UIProvider";

import { UserProvider } from "./providers/UserProvider";

class Main extends Component {

    render() {
        return (
            <UIProvider>
                <UserProvider>
                    <PostProvider>
                        <FoodProvider>
                            <ChatProvider>
                                <App />
                            </ChatProvider>
                        </FoodProvider>
                    </PostProvider>
                </UserProvider>
            </UIProvider>
        )
    }
}

registerRootComponent(Main)