import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, FlatList } from 'react-native'

const ContasParaPagarList = require('../mock/contasParaPagar.json');

export default class ContasRecentes extends Component {
    render() {
        return(
            <View style={styles.container}>
                <FlatList 
                    style={styles.contasRecentes}
                    data={ContasParaPagarList.Contas}
                    renderItem={({item}) => (
                        <View style={styles.itemSection}>
                            <Text style={styles.gridLineHeaderCell}>{item.conta}</Text>
                            <View style={styles.itemContainer}>
                                <View style={styles.firstCell}>
                                    <Text style={styles.gridLineTextCell}>Vencimento:</Text><Text style={styles.gridLineTextCell}>{item.vencimento}</Text>
                                </View>
                                <View>
                                    <Text style={styles.gridLineTextCell}>Valor:</Text><Text style={styles.gridLineTextCell}>{item.valor}</Text>
                                </View>
                                <View style={styles.lastCell}>
                                    {
                                        item.pago ?
                                        <Image style={styles.statusIcon} source={require('../assets/Icon/okIcon.png')}></Image>
                                        :<Image style={styles.statusIcon} source={require('../assets/Icon/notokIcon.png')}></Image>
                                    }
                                </View>
                            </View>
                        </View>
                    )}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
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

    gridLineHeaderCell: {
        width: 250,
        fontSize: 20,
        marginLeft: 5,
    },

    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    firstCell: {
        marginLeft: 5,
    },

    lastCell: {
        marginRight: 5,
        marginTop: -10,
    },

    statusIcon: {
        width: 50,
        height: 50,
    },
})