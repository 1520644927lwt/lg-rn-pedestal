import React from 'react';
import App from './src/App';
import {AppRegistry} from 'react-native';


//MyReactNativeApp
global.XMLHttpRequest = global.originalXMLHttpRequest || global.XMLHttpRequest;
AppRegistry.registerComponent("MyReactNativeApp", () => App);
