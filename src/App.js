
import React, { Component } from 'react';
import AppRouter from "./router/AppRouter"
import {Provider} from 'react-redux';
import Home from './pages/home/Home'
import store from './redux/store';
import Error from './pages/error/Error';
import ErrorBoundary from './components/ErrorBoundary'


class App extends Component{

    render() {
        return (
            <ErrorBoundary errorPage={<Error/>}>
                <Provider  store={store}>
                    <AppRouter/>
                </Provider >
            </ErrorBoundary>
        );
    }
}

export default App;
