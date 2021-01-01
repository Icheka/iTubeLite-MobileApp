import React, { Component } from 'react';
import {
    View, Text, ImageBackground, 
    Dimensions, TextInput, Button,
    Keyboard, TouchableWithoutFeedback,
} from 'react-native';
import { GS } from '../styles/global';
import { FontAwesome5, MaterialIcons, Feather } from '@expo/vector-icons';
import BlockButton from '../components/BlockButton';
import { createAlert } from '../fx';
import User from '../classes/User';

export default class Login extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            email: '',
            password: ''
        }
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() }>
                <View style={ GS.signup }>
                    <ImageBackground
                        source={ require("../assets/signupscreen.jpg") }
                        style={{
                            ...GS.imageBgItemsCentered,
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'rgba(0,0,0,0)'
                        }}
                    >
                        <View style={ GS.inputGroupInput }>
                            <MaterialIcons 
                                name="email"
                                size={24}
                                color="white"
                            />
                            <TextInput
                                style={ GS.inputWithIcon }
                                onChangeText={ v => this.setState({ email: v }) }
                                placeholder="Email Address"
                                placeholderTextColor="white"
                                autoCompleteType="email"
                                keyboardType="email-address"
                                returnKeyLabel="Dismiss Keyboard"
                                returnKeyType="done"
                            />
                        </View>
                        <View style={ GS.inputGroupInput }>
                            <MaterialIcons 
                                name="lock"
                                size={24}
                                color="white"
                            />
                            <TextInput
                                style={ GS.inputWithIcon }
                                onChangeText={ v => this.setState({ password: v }) }
                                placeholder="Password"
                                placeholderTextColor="white"
                                autoCompleteType="password"
                                returnKeyLabel="Dismiss Keyboard"
                                returnKeyType="done"
                                secureTextEntry={true}
                            />
                        </View>
                        <View>
                            <BlockButton
                                title="Sign In"
                                disabled={ this.state.password.length < 6 }
                                onpress={ () => this.logIn() }
                            />
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: 16,
                            backgroundColor: 'rgba(0,0,0,0.67)',
                            paddingHorizontal: 10
                        }}>
                            <Text style={{ color: 'white', fontSize: 20 }}>Don't have an account?</Text>
                            <Button
                                title="Register"
                                onPress={ () => this.props.navigation.navigate("Signup") }
                            />
                        </View>
                    </ImageBackground>
                </View>
            </TouchableWithoutFeedback>
        )
    }   

    logIn() {
        const user = new User();
        const payload = {
            email: this.state.email,
            password: this.state.password
        }

        user.signIn(payload);

        setTimeout(() => {
            if (user.data.data) {
                createAlert(
                    "Welcome",
                    "Sign in successful!"
                );
                //redirect to 'Home' screen
                //persist data
            } else {
                createAlert(
                    "Error",
                    user.data.response.data
                );
            }
        }, 5000);
    }

}