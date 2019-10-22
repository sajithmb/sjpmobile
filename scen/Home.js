import React from 'react';
import {View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity, KeyboardAvoidingView, Picker} from 'react-native';
import {createAppContainer, NavigationEvents} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import BackgrounImage from '../assets/img/signup.png';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Home extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={StyleSheet.container}>
                <Text>Home</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignContent :'center',
        alignItems : 'center',
    }
});