import React from 'react';
import { TouchableOpacity, Text, ImageBackground } from 'react-native';
import { GS } from '../styles/global';

export default function BlockButton(props) {
    // <ImageBackground
            //     source={ require("../assets/blockbuttonbg.jpeg") }
            //     style={{ width: '100%', height: '100%', borderRadius: 14 }}
            // >
            // </ImageBackground>
    return (
        <TouchableOpacity style={ GS.blockButton }>
            
                <Text style={ GS.blockButtonText }>
                    { props.title }
                </Text>
            
        </TouchableOpacity>
    )
}