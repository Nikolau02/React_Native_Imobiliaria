import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import Cadastro from '../Cadastro/index';
import Listagem from '../Listagem/index';
import { home } from '../../Styles/index';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Home({ navigation }) {
    return (
        <View style={home.container}>
            <TouchableOpacity style={home.btnCadastrar} onPress={() => navigation.navigate('Cadastro')}>
                <Text style={home.btnTxt}>Página de Cadastro</Text>
            </TouchableOpacity>
            <TouchableOpacity style={home.btnLista} onPress={() => navigation.navigate('Listagem')}>
                <Text style={home.btnTxt}>Página de Listagem</Text>
            </TouchableOpacity>
            <Stack.Navigator>
                <Stack.Screen name="Cadastro" component={Cadastro} />
                <Stack.Screen name="Listagem" component={Listagem} />
            </Stack.Navigator>
        </View>
    );
}
