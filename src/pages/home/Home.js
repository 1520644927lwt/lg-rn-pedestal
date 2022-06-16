import React, {Component} from "react";
import {
    View,
    Text
} from "react-native";
import {connect} from 'react-redux';
import * as Action from '../../redux/actions/index'
import {
    BasePage,
    Button
} from 'lg-iot-ui'

class Home extends BasePage{


    renderProps() {
        return {
            isToolBar: true,
            style: {
                padding: 10
            },
            toolBarAttr: {
                title: "朗国IOT平台",
                isShowEditor: false,
                isShowBack: false
            }
        };
    }



    renderPage() {
        return (
            <View>
                <View style={{
                    flexDirection: 'row',
                    marginBottom: 10
                }}>

                    <Button
                        onClick={() => {
                            console.error("错误错误哦擦");
                            this.props.dispatch(
                                Action.addAge(this.props.person.get('myAge') + 20)
                                // uiAction.addAge(this.props.person.get('myAge') + 20)
                            )
                        }}
                        children={'加'}/>

                    <Button
                        style={{
                            marginLeft: 10
                        }}
                        onClick={() => {
                            this.props.dispatch(
                                Action.addAge(this.props.person.get('myAge') - 20)
                                // uiAction.addAge(this.props.person.get('myAge') - 20)
                            )
                        }}
                        children={'减'}/>
                </View>
                <Text>你好，开发者！{this.props.person.get('myAge')}</Text>
            </View>
        );
    }

}
export default connect((state) => {
    return {
        person: state.ui
    };
})(Home);
