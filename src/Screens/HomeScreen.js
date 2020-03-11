import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar, FlatList, TouchableWithoutFeedback, Animated, ScrollView } from 'react-native'
import * as firebase from 'firebase'
import BouncingButton from '../Helper/BouncingButton'
const ContasParaPagarList = require('../mock/contasParaPagar.json');

import Header from '../components/Header'
import Menu from '../components/Menu'
import ContasRecentes from '../components/ContasRecentes'

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props)

        this.handlePressIn = this.handlePressIn.bind(this)
        this.handlePressOut = this.handlePressOut.bind(this)
    }

    state = {
        email: '',
        displayName: '',
        viewContasRecentes: true,
        viewContasPendentes: false,
        viewRelatorioMensal: false,
        viewCadastrarConta: false
    }

    static navigationOptions = {
        headerShown: false
    };

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
        const animatedStyle = {
            transform: [{ scale: this.animation }]
        }

        return (
            <View>
                <Header title='Teste de Title' />
                <Menu />
                <ContasRecentes />
            </View>
        )

        // return (
        //     <View style={styles.container}>
        //         <StatusBar barStyle="light-content"></StatusBar>
        //         <Image style={styles.headerImg} source={require('../assets/Img/authHeader.png')}></Image>

        //         <View style={styles.iconRow}>
        //             <View style={styles.iconImg}>
        //                 <TouchableOpacity onPress={() => this.handleView('ContasRecentes')}>
        //                     <Image source={require('../assets/Icon/list.png')}></Image>
        //                 </TouchableOpacity>
        //             </View>
        //             <View style={styles.iconImg}>
        //                 <TouchableOpacity onPress={() => this.handleView('ContasPendentes')}>
        //                     <Image source={require('../assets/Icon/boletos.png')}></Image>
        //                 </TouchableOpacity>
        //             </View>
        //             <View style={styles.iconImg}>
        //                 <TouchableOpacity onPress={() => this.handleView('RelatorioMensal')}>
        //                     <Image source={require('../assets/Icon/list.png')}></Image>
        //                 </TouchableOpacity>
        //             </View>
        //             <View style={styles.iconImg}>
        //                 <TouchableOpacity onPress={() => this.handleView('CadastrarConta')}>
        //                     <Image source={require('../assets/Icon/boletos.png')}></Image>
        //                 </TouchableOpacity>
        //             </View>
        //         </View>

                
        //         {
        //             this.state.viewContasRecentes ?
        //             <View>
        //                 <FlatList 
        //                     style={styles.contasRecentes}
        //                     data={ContasParaPagarList.Contas}
        //                     renderItem={({item}) => (
        //                         <View style={styles.itemSection}>
        //                             <Text style={styles.gridLineHeaderCell}>{item.conta}</Text>
        //                             <View style={styles.itemContainer}>
        //                                 <View style={styles.firstCell}>
        //                                     <Text style={styles.gridLineTextCell}>Vencimento:</Text><Text style={styles.gridLineTextCell}>{item.vencimento}</Text>
        //                                 </View>
        //                                 <View>
        //                                     <Text style={styles.gridLineTextCell}>Valor:</Text><Text style={styles.gridLineTextCell}>{item.valor}</Text>
        //                                 </View>
        //                                 <View style={styles.lastCell}>
        //                                     {
        //                                         item.pago ?
        //                                         <Image style={styles.statusIcon} source={require('../assets/Icon/okIcon.png')}></Image>
        //                                         :<Image style={styles.statusIcon} source={require('../assets/Icon/notokIcon.png')}></Image>
        //                                     }
        //                                 </View>
        //                             </View>
        //                         </View>
        //                     )}
        //                 />
        //             </View>
        //             : null
        //         }
        //         {
        //             this.state.viewContasPendentes ?
        //             <View>
        //                 <Text>VIEW  PENDENTES</Text>
        //             </View>
        //             : null
        //         }             
        //         {
        //             this.state.viewRelatorioMensal ?
        //             <View>
        //                 <Text>RELATÓRIO MENSAL</Text>
        //             </View>
        //             : null
        //         }  
        //         {
        //             this.state.viewCadastrarConta ?
        //             <View>
        //                 <Text>CADASTRAR CONTA</Text>
        //             </View>
        //             : null
        //         }   

        //         {/* <BouncingButton /> */}
        //         <TouchableOpacity style={styles.signOutButton} onPress={this.signOutUser}>
        //             <View style={styles.exitButton}>
        //                 <Text style={styles.exitText}>Sair</Text>
        //             </View>
        //         </TouchableOpacity>
                
        //         {/* <TouchableWithoutFeedback onPressIn={this.handlePressIn} onPressOut={this.handlePressOut}>
        //             <Animated.View style={[styles.button, animatedStyle]}>
        //                 <Text style={styles.text}>Entrar</Text>
        //             </Animated.View>
        //         </TouchableWithoutFeedback> */}
                
        //     </View>
        // )
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
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 70,
        maxHeight: 250,
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
        marginTop: 10,
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
        // marginTop: '20%',
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
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    statusIcon: {
        width: 50,
        height: 50,
    },
    firstCell: {
        marginLeft: 5,
    },
    lastCell: {
        marginRight: 5,
        marginTop: -10,
    },
    gridLine: {
        
    },
    gridLineHeaderCell: {
        width: 250,
        fontSize: 20,
        marginLeft: 5,
    },
})


// <ScrollView style={styles.contasRecentes}>
//     {
//         ContasParaPagarList.Contas.map(item => {
//             return(
//                 <View style={styles.itemSection}>
//                     <Text style={styles.gridLineHeaderCell}>{item.conta}</Text>
//                     <View style={styles.itemContainer}>
//                         <View style={styles.firstCell}>
//                             <Text style={styles.gridLineTextCell}>Vencimento:</Text><Text style={styles.gridLineTextCell}>{item.vencimento}</Text>
//                         </View>
//                         <View>
//                             <Text style={styles.gridLineTextCell}>Valor:</Text><Text style={styles.gridLineTextCell}>{item.valor}</Text>
//                         </View>
//                         <View style={styles.lastCell}>
//                             <Image style={styles.statusIcon} source={require('../../assets/Icon/okIcon.png')}></Image>
//                         </View>
//                     </View>
//                 </View>
//             )
//         })
//     }
// </ScrollView>


//<ScrollView>
//    <View styles={styles.gridLine}>
//        <View styles={styles.gridLineFirstCell}><Text>{ContasParaPagarList.Contas[0].conta}</Text></View>
//        <Text styles={styles.gridLineSecondCell}>{ContasParaPagarList.Contas[0].valor}</Text>
//        <Text styles={styles.gridLineThirdCell}>{ContasParaPagarList.Contas[0].pago}</Text>
//    </View>
//    <Image source={require('../../assets/Icon/list.png')}></Image>
//    
//</ScrollView>