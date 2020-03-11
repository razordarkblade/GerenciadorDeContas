import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Platform } from 'react-native'

export default class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <View style={styles.container}>
                <Image style={styles.headerImg} source={require('../assets/Img/authHeader.png')}></Image>
                <Text style={styles.title}>{this.props.title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: Platform.OS === 'ios' ? 20 : 0,
    },

    headerImg: {
        width: '100%',
        height: 250,
        resizeMode: 'contain',
    },

    title: {
        position: 'absolute',
        backgroundColor: '#f7fbff',
        width: '50%',
        textAlign: 'center',
        marginTop: 100,
        fontSize: 25
    }
})