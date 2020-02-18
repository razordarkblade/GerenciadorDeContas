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

                <View style={styles.iconRow}>
                    <View style={styles.iconImg}>
                        <Image source={require('../../assets/Icon/list.png')}></Image>
                    </View>
                    <View style={styles.iconImg}>
                        <Image source={require('../../assets/Icon/boletos.png')}></Image>
                    </View>
                    <View style={styles.iconImg}>
                        <Image source={require('../../assets/Icon/list.png')}></Image>
                    </View>
                    <View style={styles.iconImg}>
                        <Image source={require('../../assets/Icon/boletos.png')}></Image>
                    </View>
                </View>

                <View style={styles.gridSection}>
                    <View style={styles.gridContainer}>

                    </View>
                </View>

                <Text>Olá, {this.state.email}!</Text>
                <TouchableOpacity style={styles.signOutButton} onPress={this.signOutUser}>
                    <Text>Sair</Text>
                    <View style={styles.exitButton}>
                        <Image style={styles.exitBtn} source={require('../../assets/Icon/exitdoor.png')}></Image>
                    </View>
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
        marginBottom: 48,
        marginHorizontal: 30
    },
    headerImg: {
        width: '100%',
        height: 250,
    },
    iconImg: {
        width: 70,
        height: 40,
    },
    iconRow: {
        marginTop: -30,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        lineHeight: 50,
        height: 60,
        maxHeight: 70,
    },
    gridSection: {
        alignItems: 'center',
    },
    gridContainer: {
        marginTop: 10,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#5c6773',
        width:'90%',
        height: 80,
    },
    exitButton: {
        backgroundColor: 'blue',
        color: 'white'
    },
    exitBtn: {
        backgroundColor: 'white',
        color: 'white'
    }
})