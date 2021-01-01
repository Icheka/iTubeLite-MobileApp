import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as Font from 'expo-font';

import AuthStack from './routes/AuthStack';

export default function App() {
    const [loaded, error] = Font.useFonts({
        DancingScriptBold: require("./assets/fonts/DancingScript-Bold.ttf"),
        DancingScriptRegular: require("./assets/fonts/DancingScript-Regular.ttf")
    });

    if (!loaded) {
        return null;
    }

	return (
        <SafeAreaProvider>
            <AuthStack />
        </SafeAreaProvider>
    )
}

