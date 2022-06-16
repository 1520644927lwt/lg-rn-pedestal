import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import {
    BasePage
} from 'lg-iot-ui';
import Style from './ErrorStyle';

const style = StyleSheet.create(Style);

class Error extends BasePage{

    constructor(props) {
        super(props);
        this.state = {};

    }

    renderProps() {
        return {
            isToolBar: true,
            style: {
                padding: 10
            },
            toolBarAttr: {
                title: "错误页面",
                isShowEditor: false,
                isShowBack: false
            }
        };
    }

    renderPage() {

        const {} = this.state;

        const {} = this.props;

        return (
            <View style={style.main}>
                <Image style={style.img} source={require('../../assets/icon_error.png')}/>
                <Text>出现了错误哟~~</Text>
            </View>
        )
    }

}

export default Error;
