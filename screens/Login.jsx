import React, { Component } from 'react';
import { View, Text, ImageBackground, Dimensions, TextInput, Button } from 'react-native';
import { GS } from '../styles/global';
import { FontAwesome5, MaterialIcons, Feather } from '@expo/vector-icons';
import BlockButton from '../components/BlockButton';

export default class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
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
                    <View>
                        <BlockButton
                            title="Sign In"
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
        )
    }   

}