import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default class Menu extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        viewContasRecentes: true,
        viewContasPendentes: false,
        viewRelatorioMensal: false,
        viewCadastrarConta: false
    }

    handleView(view: string) {
        if(view === 'ContasRecentes')
            this.setState({...this.state, viewContasRecentes: true, viewContasPendentes: false, viewRelatorioMensal: false, viewCadastrarConta: false})
        if(view === 'ContasPendentes')
            this.setState({...this.state, viewContasPendentes: true, viewContasRecentes: false, viewRelatorioMensal: false, viewCadastrarConta: false})
        if(view === 'RelatorioMensal')
            this.setState({...this.state, viewRelatorioMensal: true, viewContasPendentes: false, viewContasRecentes: false, viewCadastrarConta: false})
        if(view === 'CadastrarConta')
            this.setState({...this.state, viewCadastrarConta: true, viewContasPendentes: false, viewContasRecentes: false, viewRelatorioMensal: false})
    }

    render() {
        return(
            <View style={styles.iconRow}>
                <View style={styles.iconImg}>
                    <TouchableOpacity onPress={() => this.handleView('ContasRecentes')}>
                        <Image source={require('../assets/Icon/list.png')}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.iconImg}>
                    <TouchableOpacity onPress={() => this.handleView('ContasPendentes')}>
                        <Image source={require('../assets/Icon/boletos.png')}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.iconImg}>
                    <TouchableOpacity onPress={() => this.handleView('RelatorioMensal')}>
                        <Image source={require('../assets/Icon/list.png')}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.iconImg}>
                    <TouchableOpacity onPress={() => this.handleView('CadastrarConta')}>
                        <Image source={require('../assets/Icon/boletos.png')}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    iconImg: {
        width: 70,
        height: 40,
    },

    iconRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        height: 240,
        maxHeight: 240,
    },
})