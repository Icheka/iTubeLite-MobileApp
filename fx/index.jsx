import { Alert } from 'react-native';

export const createAlert = (title, body, buttons) => {
    Alert.alert(
        title,
        body,
        buttons
    );
}