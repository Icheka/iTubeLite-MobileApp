import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import AuthStack from './routes/AuthStack';

export default function App() {
	return (
        <SafeAreaProvider>
            <AuthStack />
        </SafeAreaProvider>
    )
}

