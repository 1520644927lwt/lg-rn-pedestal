
import  React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routerMap from '../router/routerMap';

const Stack = createNativeStackNavigator();
export default class AppRouter extends Component{

    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Error">
                    {
                        routerMap.map(item => (
                            <Stack.Screen key={item.name} name={item.name} component={item.component} />
                        ))
                    }
                </Stack.Navigator>
            </NavigationContainer>
        );
    }

}
