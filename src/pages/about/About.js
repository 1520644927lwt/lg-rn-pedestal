import React, {Component} from "react";
import {
    View,
    Text
} from "react-native";
import {
    BasePage,
    Button
} from 'lg-iot-ui'

export default class About extends BasePage{

    renderProps() {
        return {
            isToolBar: true,
            style: {
                padding: 10
            },
            toolBarAttr: {
                title: "About页面",
                isShowEditor: false,
                isShowBack: false
            }
        };
    }

    constructor(props) {
        super(props);
    }

    renderPage() {
        return (
            <View>
                <Button
                    style={{flex:1}}
                    onClick={() => {alert("点击了默认按钮！")}}
                    children={"默认"}/>
            </View>
        );
    }

}
