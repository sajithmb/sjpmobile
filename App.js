/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './scen/Login';
import Signup from './scen/Signup';
import Home from './scen/Home';

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    );
  }
}
const MainNavigator = createStackNavigator({
  LoginScreen : Login,
  SignupScreen : Signup,
  HomeScreen : Home,
},
{initialRouteName : 'LoginScreen',
headerMode : 'none'},
);
const AppContainer = createAppContainer(MainNavigator);