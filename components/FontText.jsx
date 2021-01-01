import React from 'react';
import * as Font from 'expo-font';
import { Text } from 'react-native';

export default function FontText(props) {
    const [fontsLoaded, fontsLoadError] = Font.useFonts({
        DancingScriptBold: require("../assets/fonts/DancingScript-Bold.ttf"),
        DancingScriptRegular: require("../assets/fonts/DancingScript-Regular.ttf")
    });

    switch(props.font) {
         case "DancingScriptRegular":
            const font = 'DancingScriptRegular';
            break;
    }

    return <Text
        style={{...props.style, fontFamily: 'DancingScriptRegular' || null }}
    >{ props.children }</Text>

}