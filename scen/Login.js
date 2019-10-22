import React from 'react';
import {View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity, KeyboardAvoidingView, StatusBar} from 'react-native';
import BackgrounImage from '../assets/img/login.png';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            passwordHide : true,
        }
    };
    static navigationOptions = {
        header : null,
    };
    //eye icon pressed function
    eyeIconPressed = () => {
        if (this.state.passwordHide) {
            this.setState({passwordHide : false});
        } else {
            this.setState({passwordHide : true});
        }
    };
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor="#590004" barStyle="light-content" />
                <ImageBackground source={BackgrounImage} style={{width: '100%', height: '100%', alignContent: 'center', alignItems: 'center'}}>
                    <KeyboardAvoidingView behavior="position" enabled style={{width : '100%', alignContent : 'center', alignItems : 'center'}}>
                        <View style={styles.registerNumberContainer}>
                            <Icon name="md-person" size={20} style={{color : '#acacac', width : '10%'}}/>
                            <TextInput
                            placeholder="Registration Number"
                            placeholderTextColor="#acacac"
                            style={styles.registrationNumberInput}/>
                        </View>
                        <View style={styles.passwordContainer}>
                            <Icon name="md-lock" size={20} style={{color : '#acacac', width : '10%'}}/>
                            <TextInput
                            placeholder="Password"
                            placeholderTextColor="#acacac"
                            secureTextEntry={this.state.passwordHide}
                            style={styles.passwordInput}/>
                            <TouchableOpacity style={{width : '10%'}} onPress={this.eyeIconPressed}>
                                <Icon name={this.state.passwordHide ? "ios-eye-off" : "ios-eye"} size={20} style={{color : '#acacac', opacity : 0.5}}/>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={{height : 40}}></TouchableOpacity>
                    </KeyboardAvoidingView>
                    <TouchableOpacity style={styles.loginButton} onPress={() => navigate('HomeScreen')}>
                        <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity>
                    <View style={styles.signupContainer}>
                        <Text style={{color : '#ffffff'}}>Don't have account?</Text>
                        <TouchableOpacity onPress={() => navigate('SignupScreen')}>
                            <Text style={{color : '#f9a1a3', textDecorationLine : 'underline', marginLeft : 5}}>Signup</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                        <Text style={{color : '#ffffff', marginTop : 10}}>Forgot password ?</Text>
                    </TouchableOpacity>
                    
                </ImageBackground>
            </View>
        );    
    }
}
const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    registerNumberContainer : {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop : 330,     
        borderStyle: "solid",
        borderTopWidth: 1,
        borderColor: '#f65d60',
        borderBottomWidth: 1,
        width : '80%',
    },  
    registrationNumberInput : {
        color : '#ffffff',
        width: '90%',
        fontSize: 16,
    },
    passwordContainer : {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 0,  
        borderStyle: "solid",
        borderColor: '#f65d60',
        borderBottomWidth: 1,
        width : '80%',
    },
    passwordInput : {
        color : '#ffffff',
        width: '80%',
        fontSize: 16,
    },
    loginButton : {
        backgroundColor : '#c1292c',
        width: '80%',
        alignContent: 'center',
        alignItems: 'center',
        marginTop : 10,
        paddingTop: 10,
        paddingBottom: 10,
    },
    loginButtonText : {
        color : '#ffffff',
        fontSize: 18,

    },
    signupContainer : {
        alignContent : 'center',
        alignContent : 'center',
        flexDirection : 'row',
        marginTop : 20,
    },
});