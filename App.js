import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Signup from './screens/Signup.jsx';

export default function App() {
	return (
        <SafeAreaProvider>
            <Signup />
        </SafeAreaProvider>
    )
}

