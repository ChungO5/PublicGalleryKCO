import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from './SignInScreen';
import WelcomScreen from './WelcomeScreen';
import MainTab from './MainTab';
import {useUserContext} from '../contexts/UserContext';

const Stack = createNativeStackNavigator();

const RootStack = () => {
    const {user} = useUserContext();
    return (
        <Stack.Navigator>
            {user ? (
                <>
                    <Stack.Screen
                        name="MainTab"
                        component={MainTab}
                        options={{headerShown: false}}
                    />
                </>
            ) : (
                <>
                    <Stack.Screen
                        name="SignIn"
                        component={SignInScreen}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="Welcom"
                        component={WelcomScreen}
                        options={{headerShown: false}}
                    />
                </>
            )}
        </Stack.Navigator>
    );
};

export default RootStack;
