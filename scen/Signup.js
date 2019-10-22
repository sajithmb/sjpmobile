import React from 'react';
import {View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity, KeyboardAvoidingView, Picker} from 'react-native';
import {createAppContainer, NavigationEvents} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import BackgrounImage from '../assets/img/signup.png';
import Icon from 'react-native-vector-icons/Ionicons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class Signup extends React.Component{
    static navigationOptions = {
        header : null,
    };
    constructor(props){
        super(props);
        this.state = {
            facultyIndex : 0,
        }
    };
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.container}>
                <ImageBackground source={BackgrounImage} style={styles.backgroundImage}>
                    
                    <KeyboardAwareScrollView style={{width: '100%'}}>
                        <View style={{width : '100%', alignContent : 'center', alignItems : 'center'}}>
                            <TouchableOpacity style={{position : 'absolute', top : 10, left : 15,}} onPress={() => navigate('LoginScreen')}>
                                <Icon name="ios-arrow-back" style={{ color : '#c1292c', fontSize : 34,}}/>
                            </TouchableOpacity>
                            <Text style={styles.signupTitle}>Sign up</Text>
                            <View style={styles.pickerContainer}>
                                <Picker selectedValue={this.state.facultyIndex} style={styles.facultyPicker} onValueChange={(itemValue, itemIndex) => this.setState({facultyIndex : itemValue})}>
                                    <Picker.Item color='#590004' label="Please Select Your Faculty" value='0'/>
                                    <Picker.Item color='#c1292c' label="Faculty of applied sciences" value='1'/>
                                    <Picker.Item color='#c1292c' label="Faculty of humanties and social sciences" value='2'/>
                                    <Picker.Item color='#c1292c' label="Faculty of management" value='3'/>
                                </Picker>
                            </View>
                            <TextInput 
                            style={styles.regNoStyle}
                            placeholder="Registration Number" 
                            placeholderTextColor='#acacac'/>
                            <TextInput
                            style={styles.emailStyle}
                            placeholder="Email"
                            placeholderTextColor='#acacac'
                            />
                            <TextInput 
                            style={styles.contactStyle}
                            placeholder="Contact Number"
                            placeholderTextColor='#acacac'/>
                            <TextInput 
                            style={styles.nicStyle}
                            placeholder="NIC Number"
                            placeholderTextColor='#acacac'/>
                            <TextInput 
                            style={styles.passwordStyle}
                            placeholder="Password"
                            placeholderTextColor='#acacac'
                            secureTextEntry={true}/>
                            <TextInput 
                            style={styles.rePasswordStyle}
                            placeholder="Re-Password"
                            placeholderTextColor='#acacac'
                            secureTextEntry={true}/>

                            <TouchableOpacity style={styles.signupButton}>
                                <Text style={styles.signupButtonTitle}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAwareScrollView>                    
                    
                </ImageBackground>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignContent : 'center',
        alignItems : 'center',
    },
    backgroundImage : {
        width : '100%', 
        height : '100%', 
        alignContent : 'center', 
        alignItems : 'center', 
        alignSelf : 'center',
    },
    signupTitle : {
        fontWeight : "bold",
        marginTop : 25,
        fontSize : 24,
        textTransform : "uppercase",
        color : 'white'
    },
    pickerContainer : {
        width : '80%',
        marginTop : 30,
        borderStyle : "solid",
        borderBottomWidth : 0.5,
        borderBottomColor : '#f65d60',
    },
    facultyPicker : {
        height : 35, 
        width : '100%', 
        color : '#acacac',
        marginBottom : 5,
    },
    regNoStyle : {
        color : 'white',
        fontSize : 16,
        width : '80%',
        borderStyle : "solid",
        borderColor : '#f65d60',
        borderBottomWidth : 0.5,
        paddingLeft : 7,
        marginTop : 10,
    },
    emailStyle : {
        color : 'white',
        fontSize : 16,
        width : '80%',
        borderStyle : "solid",
        borderColor : '#f65d60',
        borderBottomWidth : 0.5,
        paddingLeft : 7,
        marginTop : 10,
    },
    contactStyle : {
        color : 'white',
        fontSize : 16,
        width : '80%',
        borderStyle : "solid",
        borderColor : '#f65d60',
        borderBottomWidth : 0.5,
        paddingLeft : 7,
        marginTop : 10,
    },
    nicStyle : {
        color : 'white',
        fontSize : 16,
        width : '80%',
        borderStyle : "solid",
        borderColor : '#f65d60',
        borderBottomWidth : 0.5,
        paddingLeft : 7,
        marginTop : 10,
    },
    passwordStyle : {
        color : 'white',
        fontSize : 16,
        width : '80%',
        borderStyle : "solid",
        borderColor : '#f65d60',
        borderBottomWidth : 0.5,
        paddingLeft : 7,
        marginTop : 10,
    },
    rePasswordStyle : {
        color : 'white',
        fontSize : 16,
        width : '80%',
        borderStyle : "solid",
        borderColor : '#f65d60',
        borderBottomWidth : 0.5,
        paddingLeft : 7,
        marginTop : 10,
    },
    signupButton : {
        backgroundColor : '#c1292c',
        width : '80%',
        alignContent : 'center',
        alignItems : 'center',
        paddingTop : 10,
        paddingBottom : 10,
        marginTop : 70,
    },
    signupButtonTitle : {
        color : '#ffffff',
        fontSize: 18,
    },

});