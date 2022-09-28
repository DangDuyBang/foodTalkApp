import { registerRootComponent } from "expo";
import { Component } from "react";

import App from "./App";
import configureAppStore from "./redux/store";
import { Provider } from "react-redux";

import {decode, encode} from 'base-64'

if (!global.btoa) {
    global.btoa = encode;
}

if (!global.atob) {
    global.atob = decode;
}

class Main extends Component {
  render() {
    return (
      <Provider store={configureAppStore()}>
        <App />
      </Provider>
    );
  }
}

registerRootComponent(Main);
