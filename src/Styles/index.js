import { StyleSheet } from "react-native";

const cadastro = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#696969',
        alignSelf: 'center',
    },
    textInput: {
        width: 250,
        borderWidth: 1,
        borderColor: '#00B8D4',
        borderRadius: 7,
        marginTop: 15,
        marginLeft: 15,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#696969',
        marginLeft: 15,
    },
    preview: {
        marginTop: 50,
        height: 250,
        width: 200,
        alignSelf: 'center',
    },
    btnFoto: {
        flex: 0,
        backgroundColor: '#0278f5',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
    btnCadastrar: {
        flex: 0,
        backgroundColor: '#0278f5',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        margin: 5,
        width: 200,
    },
    btnTxt: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff', 
    },
});

const home = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnCadastrar: {
        flex: 0,
        backgroundColor: '#0278f5',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 20,
        width: 250,
    },
    btnLista: {
        flex: 0,
        backgroundColor: '#1e7d01',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        margin: 10,
        width: 250,
    },
    btnTxt: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff', 
    },
});

const lista = StyleSheet.create({
    preview: {
        marginTop: 30,
        height: 250,
        width: 200,
        alignSelf: 'center',
        margin: 10,
    },
    btnTxt: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#696969',
        alignSelf: 'center',
        marginTop: 10,
    },
});

export { cadastro, home, lista }