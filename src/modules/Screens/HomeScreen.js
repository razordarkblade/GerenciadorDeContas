import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar, FlatList } from 'react-native'
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
                <StatusBar barStyle="light-content"></StatusBar>
                <Image style={styles.headerImg} source={require('../../assets/Img/authHeader.png')}></Image>

                <View style={styles.form}>
                    <Image style={styles.firstIcon} source={require('../../assets/Icon/list.png')}></Image>
                    <Image style={styles.firstIcon} source={require('../../assets/Icon/boletos.png')}></Image>
                </View>

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
    },
    signOutButton: {
        marginTop: 32
    },
    form: {
        // marginTop: -55,
        marginBottom: 48,
        marginHorizontal: 30
    },
    headerImg: {
        width: '100%',
        height: 250,
    },
    iconImg: {
        width: 40,
        height: 40,
    },
    listIcon: {
	    // flexWrap: wrap,
	    marginLeft: -10,
	    marginTop: -10,
    },
    firstIcon: {
        // float: left,
    }
})