import React, { Component } from 'react';
import {
    View, Text, ImageBackground, Dimensions,
    TextInput, Button, Keyboard, TouchableWithoutFeedback,
    Alert, ScrollView
} from 'react-native';
import { GS } from '../styles/global';
import { FontAwesome5, MaterialIcons, Feather } from '@expo/vector-icons';
import BlockButton from '../components/BlockButton';

import User from '../classes/User';

export default class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            full_name: '',
            email: '',
            password: '',
            c_password: ''
        }
    }

    render() {
        let width = Dimensions.get("window").width;
        let height = Dimensions.get("window").height;

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
                            <FontAwesome5 
                                name="user"
                                size={24}
                                color="white"
                            />
                            <TextInput
                                style={ GS.inputWithIcon }
                                onChangeText={ v => this.setState({ full_name: v }) }
                                placeholder="Name"
                                placeholderTextColor="white"
                                autoCompleteType='name'
                                returnKeyLabel="Dismiss Keyboard"
                                returnKeyType="done"
                            />
                        </View>
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
                        <Text
                            style={{
                                color: 'red',
                                fontSize: 17,
                                textAlign: 'right',
                                width: width - 90,
                            }}
                        >
                        {/* this.charsLeft(this.state.password.length, 6) */}
                        Min: 6
                        </Text>
                        {/* <View style={ GS.inputGroupInput }>
                            <MaterialIcons 
                                name="lock"
                                size={24}
                                color="white"
                            />
                            <TextInput
                                style={ GS.inputWithIcon }
                                onChangeText={ v => this.setState({ c_password: v }) }
                                placeholder="Confirm Password"
                                placeholderTextColor="white"
                            />
                        </View> */}
                        <View>
                            <BlockButton
                                title="Register"
                                onpress={ () => this.createUser() }
                            />
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: 16,
                            backgroundColor: 'rgba(0,0,0,0.67)',
                            paddingHorizontal: 10
                        }}>
                            <Text style={{ color: 'white', fontSize: 20 }}>Already have an account?</Text>
                            <Button
                                title="Sign In"
                                onPress={ () => this.props.navigation.navigate("Login") }
                            />
                        </View>
                    </ImageBackground>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    createUser() {
        this.state.c_password = this.state.password;
        if (this.state.password != this.state.c_password) {
            this.createAlert(
                "Error",
                "Passwords do not match!",
                [{
                    text: "Dismiss",
                    style: "destructive"
                }]
            );
            return;
        } else if (this.state.password.length < 6) {
            this.createAlert(
                "Error",
                "Password cannot be less than 6 characters long!",
                [{
                    text: "Dismiss",
                    style: "destructive"
                }]
            );
            return;
        }

        const user = new User();
        const payload = {
            'full_name': this.state.full_name,
            'email': this.state.email,
            'password': this.state.password,
        }
        user.createUser(payload);
        setTimeout(() => {
            if (user.data.header == "Success") {
                this.createAlert(
                    "Success",
                    "Your iTube Lite account was created successfully!"
                );
                // persist data
                // redirect to 'choose categories' screen
            } else {
                this.createAlert(
                    "Error",
                    user.data.data
                );
            }
        }, 5000);
    }

    createAlert(title, body, buttons) {
        Alert.alert(
            title,
            body,
            buttons
        );
    }

    charsLeft(param, max) {
        if ((max - param) > -1) {
            return (
                "Left: " + (max - param)
            );
        } else {
            return (
                "OK"
            );
        }
    }

}