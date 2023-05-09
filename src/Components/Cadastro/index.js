import React, { PureComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, ScrollView, ToastAndroid } from 'react-native';

import { cadastro } from '../../Styles/index';
import Imovel from '../../Models/Imovel';
import Database from '../../Database/Database';

import { RNCamera } from 'react-native-camera';
import { CameraRoll } from "@react-native-camera-roll/camera-roll";

export default class Cadastro extends PureComponent {

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

  Cadastrar = (endereco, finalidade, tipo, valor, imagem) => {
    const db = new Database();
    const novoImovel = new Imovel(endereco, finalidade, tipo, valor, imagem);
    db.Adicionar(novoImovel);
    this.Listagens();
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
        <View>
          <Text style={cadastro.title}>Cadastrar Imóvel</Text>
          <Text />
          <Text style={cadastro.text}>Endereço do Imóvel</Text>
          <TextInput
            style={cadastro.textInput}
            onChangeText={textoDigitado =>
              this.setState({ endereco: textoDigitado })
            }
            multiline={true}
          />
          <Text />
          <Text style={cadastro.text}>Finalidade</Text>
          <TextInput
            style={cadastro.textInput}
            placeholder='Aluguel ou Venda'
            onChangeText={textoDigitado =>
              this.setState({ finalidade: textoDigitado })
            }
            multiline={true}
          />
          <Text />
          <Text style={cadastro.text}>Tipo</Text>
          <TextInput
            style={cadastro.textInput}
            placeholder='Casa, Apartamento ou Comércio'
            onChangeText={textoDigitado =>
              this.setState({ tipo: textoDigitado })
            }
            multiline={true}
          />
          <Text />
          <Text style={cadastro.text}>Valor do Imóvel</Text>
          <TextInput
            style={cadastro.textInput}
            onChangeText={textoDigitado =>
              this.setState({ valor: textoDigitado })
            }
            multiline={true}
          />
          <Text />
          <Text style={cadastro.text}>Imagem do Imóvel</Text>
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style={cadastro.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            androidCameraPermissionOptions={{
              title: 'Permissão para usar a câmera',
              message: 'Permitir que este aplicativo acesse a câmera do dispositivo',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancelar',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'Permissão para gravar áudios',
              message: 'Permitir que este aplicativo realize a gravação de áudios',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancelar',
            }}
            onGoogleVisionBarcodesDetected={({ barcodes }) => {
              console.log(barcodes);
            }}
          />
          <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity onPress={this.takePicture.bind(this)} style={cadastro.btnFoto}>
              <Text style={cadastro.btnTxt}> Tirar Foto </Text>
            </TouchableOpacity>
          </View>
          <Text />
          <TouchableOpacity
            style={cadastro.btnCadastrar}
            onPress={() => {
              this.Cadastrar(
                this.state.endereco,
                this.state.finalidade,
                this.state.tipo,
                this.state.valor,
                this.state.imagem
              );
            }}
          >
            <Text style={cadastro.btnTxt}>Cadastrar</Text>
          </TouchableOpacity>
          <Text />
        </View>
      </ScrollView>
    );
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);

      CameraRoll.save(data.uri);
      this.setState({ imagem: data.uri });
      console.log("Imagem salva com sucesso");
      ToastAndroid.show("Imagem salva com sucesso", ToastAndroid.SHORT);
    }
  };
}