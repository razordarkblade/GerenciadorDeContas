import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar, FlatList, TouchableWithoutFeedback, Animated, ScrollView } from 'react-native'
import * as firebase from 'firebase'
import BouncingButton from '../Helper/BouncingButton'
const ContasParaPagarList = require('../../mock/contasParaPagar.json');

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

                
                
                <FlatList 
                    style={styles.contasRecentes}
                    data={ContasParaPagarList.Contas}
                    renderItem={({item}) => (
                        <View style={styles.itemSection}>
                            <Text style={styles.gridLineFirstCell}>{item.conta}</Text>
                        </View>
                    )}
                />
                {/* <ScrollView>
                    <View styles={styles.gridLine}>
                        <View styles={styles.gridLineFirstCell}><Text>{ContasParaPagarList.Contas[0].conta}</Text></View>
                        <Text styles={styles.gridLineSecondCell}>{ContasParaPagarList.Contas[0].valor}</Text>
                        <Text styles={styles.gridLineThirdCell}>{ContasParaPagarList.Contas[0].pago}</Text>
                    </View>
                    <Image source={require('../../assets/Icon/list.png')}></Image>
                    
                </ScrollView> */}
                

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
        height: 280,
    },
    exitButton: {
        width: 350,
        marginTop: 40,
        backgroundColor: '#007fef',
        borderRadius: 4,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center',
    },
    exitText: {
        color: '#FFF',
        fontWeight: '500'
    },
    contasRecentes: {
        marginTop: '20%',
    },
    itemSection: {
        marginTop: 10,
        marginLeft: '5%',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#5c6773',
        width: '90%',
        height: 80,
    },
    gridLine: {
        
    },
    gridLineFirstCell: {
        width: 250,
        backgroundColor: '#007fef',
    },
})