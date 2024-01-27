import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Routes(navigation) {
    return (
        <NavigationContainer>
            
            {true?AuthStack():MainStack()}

        </NavigationContainer>
    )
}