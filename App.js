import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {UserContextProvider} from './contexts/UserContext';
import RootStack from './screens/RootStack';

const App = () => {
    return (
        <UserContextProvider>
            <NavigationContainer>
                <RootStack />
            </NavigationContainer>
        </UserContextProvider>
    );
};

const styles = StyleSheet.create({});

export default App;
