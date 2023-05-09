import React, { PureComponent } from 'react';
import { Text, View, Image } from 'react-native';

import { lista } from '../../Styles/index';

export default class Lista extends PureComponent {
    render() {
        return (
            <View>
                <Text style={lista.btnTxt}>Id: {this.props.id},</Text>
                <Text style={lista.btnTxt}>Endereço: {this.props.endereco},</Text>
                <Text style={lista.btnTxt}>Finalidade: {this.props.finalidade},</Text>
                <Text style={lista.btnTxt}>Tipo: {this.props.tipo},</Text>
                <Text style={lista.btnTxt}>Valor: {this.props.valor}.</Text>
                <Text style={lista.btnTxt}>Imagem:</Text>
                <Image style={lista.preview} source={{ uri: this.props.imagem }} />
            </View>
        );
    }
}