import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, StatusBar, LayoutAnimation } from 'react-native'
import * as firebase from 'firebase'

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        header: null
    }

    state = {
        email: '',
        password: '',
        errorMessage: null,
    }

    handleLogin = () => {
        const {email, password} = this.state

        firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .catch(error => this.setState({ errorMessage: error.message}))
    }

    render() {
        LayoutAnimation.easeInEaseOut()

        return (
            <View style={styles.container}>
                <StatusBar barStyle='light-content'></StatusBar>
                <Image style={styles.headerImg} source={require('../assets/Img/authHeader.png')}></Image>
                <Text style={styles.greeting}>{`Olá novamente.\n Bem vindo de volta.`}</Text>

                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>

                <View style={styles.form}>
                    <View>
                        <Text style={styles.inputTitle}>Email:</Text>
                        <TextInput style={styles.input} autoCapitalize='none' onChangeText={email => this.setState({ email })} value={this.state.email}></TextInput>
                    </View>

                    <View style={styles.password}>
                        <Text style={styles.inputTitle}>Senha:</Text>
                        <TextInput style={styles.input} secureTextEntry autoCapitalize='none' onChangeText={password => this.setState({ password })} value={this.state.password}></TextInput>
                    </View>

                    <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                        <Text style={styles.buttonText}>Entrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.signUpDiv} onPress={() => this.props.navigation.navigate('Register')}>
                        <Text style={styles.signInText}>
                            Novo por aqui? <Text style={styles.sigInLinkButton}>Cadastre-se</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    greeting: {
        marginTop: 32, 
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'center'
    },
    errorMessage: {
        height: 72,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30
    },
    error: {
        color: '#ef1818',
        fontSize: 13,
        fontWeight: '600',
        textAlign: 'center'
    },
    form: {
        marginTop: -55,
        marginBottom: 48,
        marginHorizontal: 30
    },
    inputTitle: {
        color: '#8A8F9E',
        fontSize: 10,
        textTransform: 'uppercase'
    },
    input: {
        borderBottomColor: '#8A8F9E',
        borderBottomWidth: 1,
        height: 40,
        fontSize: 15,
        color: '#161F3D'
    },
    password: {
        marginTop: 32
    },
    button: {
        marginTop: 40,
        backgroundColor: '#007fef',
        borderRadius: 4,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontWeight: '500'
    },
    signUpDiv: {
        alignSelf: 'center',
        marginTop: 32,
    },
    signInText: {
        color: '#414959',
        fontSize: 13,
    },
    sigInLinkButton: {
        fontWeight: '500',
        color: '#007fef'
    },
    headerImg: {
        width: '100%',
        height: 250,
    }
})