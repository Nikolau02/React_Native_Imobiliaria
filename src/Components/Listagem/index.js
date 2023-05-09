import React, { PureComponent } from 'react';
import { ScrollView } from 'react-native';

import Lista from './Lista';
import Database from '../../Database/Database';

export default class Listagem extends PureComponent {

  // Criação dos States
  constructor(props) {
    super(props);
    this.state = {
      endereco: '',
      finalidade: '',
      tipo: '',
      valor: '',
      imagem: '',
      lista: [],
    };

    this.Listagens();
  }

  // Funções anõnimas para chamada dos métodos
  TestarConexao = () => {
    const db = new Database();
    db.Conectar();
  };

  Listagens = () => {
    const db = new Database();
    db.Listar().then(data => {
      this.setState({ lista: data });
    });
  };

  render() {
    return (
      <ScrollView>
        {
          this.state.lista.map(
            item => (
              <Lista 
                key={item.id}
                id={item.id}
                endereco={item.endereco}
                finalidade={item.finalidade}
                tipo={item.tipo}
                valor={item.valor}
                imagem={item.imagem}
              />
            )
          )
        }
      </ScrollView>
    );
  }
}
