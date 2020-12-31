import React, { Component } from 'react';
import { View, Text, ImageBackground, Dimensions, TextInput, Button, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { GS } from '../styles/global';
import { FontAwesome5, MaterialIcons, Feather } from '@expo/vector-icons';
import BlockButton from '../components/BlockButton';

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
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
                                onChangeText={ v => this.setState({ first_name: v }) }
                                placeholder="Name"
                                placeholderTextColor="white"
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
                                onChangeText={ v => this.setState({ c_password: v }) }
                                placeholder="Confirm Password"
                                placeholderTextColor="white"
                            />
                        </View>
                        <View>
                            <BlockButton
                                title="Register"
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

}