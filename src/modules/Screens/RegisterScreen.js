import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import * as firebase from 'firebase'

export default class RegisterScreen extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
        errorMessage: null,
    }

    handleSignUp = () => {
        firebase.auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(userCredentials => {
            return userCredentials.user.updateProfile({
                displayName: this.state.name
            })
        })
        .catch(error => this.setState({ errorMessage: error.message}))
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.greeting}>{`Olá.\n Cadastre-se para começar.`}</Text>

                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>

                <View style={styles.form}>
                    <View>
                        <Text style={styles.inputTitle}>Nome completo:</Text>
                        <TextInput style={styles.input} autoCapitalize='none' onChangeText={name => this.setState({ name })} value={this.state.name}></TextInput>
                    </View>

                    <View style={styles.defaultMarginTop}>
                        <Text style={styles.inputTitle}>Email:</Text>
                        <TextInput style={styles.input} autoCapitalize='none' onChangeText={email => this.setState({ email })} value={this.state.email}></TextInput>
                    </View>

                    <View style={styles.defaultMarginTop}>
                        <Text style={styles.inputTitle}>Senha:</Text>
                        <TextInput style={styles.input} secureTextEntry autoCapitalize='none' onChangeText={password => this.setState({ password })} value={this.state.password}></TextInput>
                    </View>

                    <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.signInDiv}>
                        <Text style={styles.signInText}>
                            Novo por aqui? <Text style={styles.sigInLinkButton}>Login</Text>
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
    defaultMarginTop: {
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
    signInDiv: {
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
    }
})