import React from 'react';
import { TouchableOpacity, Text, ImageBackground } from 'react-native';
import { GS } from '../styles/global';

export default function BlockButton(props) {
    return (
        <TouchableOpacity
            onPress={ () => props.onpress() }
            style={ GS.blockButton }
            disabled={ props.disabled || false }
        >
            
                <Text style={ GS.blockButtonText }>
                    { props.title }
                </Text>
            
        </TouchableOpacity>
    )
}