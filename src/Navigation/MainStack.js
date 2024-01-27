import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTab } from "../screens";

const bottomTab = createNativeStackNavigator();

export default function MainStack() {
    return (
        <bottomTab.Navigator>
            <Stack.Screen name="bottomTab" component={BottomTab} />
        </bottomTab.Navigator>
    )
}