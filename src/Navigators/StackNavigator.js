import React, { PureComponent } from 'react';

import Home from '../Components/Home/index';
import Cadastro from '../Components/Cadastro/index';
import Listagem from '../Components/Listagem/index';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class StackNavigator extends PureComponent {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Cadastro" component={Cadastro} />
                <Stack.Screen name="Listagem" component={Listagem} />
            </Stack.Navigator>
        );
    }
}
