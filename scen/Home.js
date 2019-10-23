import React from 'react';
import {View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity, KeyboardAvoidingView, Picker,ScrollView, SafeAreaView,Image} from 'react-native';
import {createAppContainer, NavigationEvents} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import BackgrounImage from '../assets/img/signup.png';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { SliderBox } from 'react-native-image-slider-box';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            images: ['https://source.unsplash.com/1024x768/?nature', 'http://10.32.10.121/sjpweb/img/mobileHomeSlides/new-banner.png']
        };
    }
    render(){
        return(
            <View style={StyleSheet.container}>
                <SliderBox images={this.state.images} />
            </View>
        );
    }
}
class Settings extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={StyleSheet.container}>
                <View style={{alignContent : 'center', alignItems : 'center', backgroundColor : '#590004'}}>
                    <Text style={{ fontWeight : 'bold', color : '#ffffff', marginTop : 5, marginBottom : 15, fontSize : 18,}}>Settings</Text>
                </View>
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
        ),
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
        width : '100%',
    }
});