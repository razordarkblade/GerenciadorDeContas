import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import * as firebase from 'firebase'

import LoadingScreen from '../Screens/LoadingScreen'
import LoginScreen from '../Screens/LoginScreen'
import RegisterScreen from '../Screens/RegisterScreen'
import HomeScreen from '../Screens/HomeScreen'



var firebaseConfig = {
  apiKey: "AIzaSyA-7BPHB6WXdqeEKLvyPDTDU7VXV8bf9Ok",
  authDomain: "gerenciadordecontas-7f5d8.firebaseapp.com",
  databaseURL: "https://gerenciadordecontas-7f5d8.firebaseio.com",
  projectId: "gerenciadordecontas-7f5d8",
  storageBucket: "gerenciadordecontas-7f5d8.appspot.com",
  messagingSenderId: "719585367799",
  appId: "1:719585367799:web:90f53c372d1febd3a6a5f2"
};

firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  Home: HomeScreen,
})

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
})

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      Auth: AuthStack,
      App: AppStack,
    },
    {
      initialRoutName: 'Loading'
    }
  )
)
