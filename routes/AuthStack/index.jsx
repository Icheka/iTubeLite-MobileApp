import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Signup from '../../screens/Signup';
import Login from '../../screens/Login';

const screens = {
    Login: {
        screen: Login
    },
    Signup: {
        screen: Signup
    },
}

const AuthStack = createStackNavigator(screens);

export default createAppContainer(AuthStack);