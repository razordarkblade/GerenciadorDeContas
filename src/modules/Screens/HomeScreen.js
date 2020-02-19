import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar, FlatList, TouchableWithoutFeedback, Animated } from 'react-native'
import * as firebase from 'firebase'

import BouncingButton from '../Helper/BouncingButton'

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props)

        this.handlePressIn = this.handlePressIn.bind(this)
        this.handlePressOut = this.handlePressOut.bind(this)
    }

    state = {
        email: '',
        displayName: '',
    }

    componentDidMount() {
        const { email, displayName } = firebase.auth().currentUser
        
        // this.animation = new Animated.Value(1)
        this.setState({ email, displayName })
    }

    signOutUser = () => {
        firebase.auth().signOut()
    }

    handlePressIn() {
        Animated.spring(this.animation, {
            toValue: .5
        }).start()
    }

    handlePressOut() {
        Animated.spring(this.animation, {
            toValue: 1,
            friction: 3,
            tension: 40
        }).start() 
    }

    render() {
        const animatedStyle = {
            transform: [{ scale: this.animation }]
        }

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
                {/* <BouncingButton /> */}
                <TouchableOpacity style={styles.signOutButton} onPress={this.signOutUser}>
                    <View style={styles.exitButton}>
                        <Text style={styles.exitText}>Sair</Text>
                    </View>
                </TouchableOpacity>

                
                {/* <TouchableWithoutFeedback onPressIn={this.handlePressIn} onPressOut={this.handlePressOut}>
                    <Animated.View style={[styles.button, animatedStyle]}>
                        <Text style={styles.text}>Entrar</Text>
                    </Animated.View>
                </TouchableWithoutFeedback> */}
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    signOutButton: {
        marginTop: 32,
        alignItems: 'center',
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
        backgroundColor: '#2899C0',
        width: 80,
        height: 30,
        borderRadius: 10,
        alignItems: 'center',
    },
    exitText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    }
})