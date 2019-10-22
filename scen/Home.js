import React from 'react';
import {View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity, KeyboardAvoidingView, Picker} from 'react-native';
import {createAppContainer, NavigationEvents} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import BackgrounImage from '../assets/img/signup.png';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

class Home extends React.Component{
    render(){
        return(
            <View style={StyleSheet.container}>
                <Text>Home</Text>
            </View>
        );
    }
}
class Settings extends React.Component{
    render(){
        return(
            <View style={StyleSheet.container}>
                <Text>Settings</Text>
            </View>
        );
    }
}
export default createMaterialBottomTabNavigator({
    Home : { screen : Home,
    navigationOptions :{
        tabBarLabel: 'Home',
        tabBarIcon:({tintColor})=>(
            <Icon name="ios-home" color={tintColor} size={24}/>
        )
    }},
    Settings : {screen : Settings,
        navigationOptions :{
            tabBarLabel: 'Settings',
            tabBarIcon:({tintColor})=>(
                <Icon name="ios-settings" color={tintColor} size={24}/>
            )
    }},
},{
    initialRouteName : 'Home',
    activeColor : '#ffffff',
    barStyle : {
        backgroundColor : '#590004',
    },
    inactiveColor : '#c1292c',
    shifting : true,
});

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignContent :'center',
        alignItems : 'center',
    }
});