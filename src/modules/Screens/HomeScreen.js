import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import * as firebase from 'firebase'

export default class HomeScreen extends React.Component {
    state = {
        email: '',
        displayName: '',
    }

    componentDidMount() {
        const { email, displayName } = firebase.auth().currentUser

        this.setState({ email, displayName })
    }

    signOutUser = () => {
        firebase.auth().signOut()
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Olá, {this.state.email}!</Text>
                <TouchableOpacity style={styles.signOutButton} onPress={this.signOutUser}>
                    <Text>Sair</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signOutButton: {
        marginTop: 32
    }
})