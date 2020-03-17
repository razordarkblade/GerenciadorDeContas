//Obsoleto
import React from 'react'
import { createBottomTabNavigator }from 'react-navigation-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'

import HomeScreen from './Screens/HomeScreen'
import LoadingScreen from './Screens/LoadingScreen'

const MenuRoutes = {
    HomeScreen: {
        name: 'HomeScreen',
        screen: HomeScreen,
        navigationOptions: {
            title: 'Home',
            tabBarIcon: ({ tintColor }) =>
                <Icon name='home' size={30} color={tintColor} />
        },

    },
    LoadingScreen: {
        name: 'LoadingScreen',
        screen: LoadingScreen,
        navigationOptions: {
            title: 'Relatório Mensal',
            tabBarIcon: ({ tintColor }) =>
                <Icon name='camera' size={30} color={tintColor} />
        },
    }
}

const MenuConfig = {
    initialRouteName: 'HomeScreen',
    tabBarOptions: {
        showLabel: false,
    }
}

const MenuNavigator = createBottomTabNavigator(MenuRoutes, MenuConfig)
export default MenuNavigator