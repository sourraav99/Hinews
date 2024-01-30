import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
    OnboardingScreen,
    LoginScreen,
    NumberScreen,
    OtpScreen,
    ProfileScreen,
    GenderScreen,
    Test,
    EnableContact,
    NotifiEnable,
    BottomTab,
} from "../screens";
import EditProfileScreen from '../screens/EditProfileScreen';
import ShowProfileDetail from '../screens/ShowProfileDetail';

const Stack = createNativeStackNavigator();

export default function AuthStack(){
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="Number" component={NumberScreen} />
        <Stack.Screen name="Otp" component={OtpScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="GenderScreen" component={GenderScreen} />
        <Stack.Screen name="Test" component={Test} />
        <Stack.Screen name="EnableContact" component={EnableContact} />
        <Stack.Screen name="NotifiEnable" component={NotifiEnable} />
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name='EditProfile' component={EditProfileScreen}/>
        <Stack.Screen name='ShowProfileDetail' component={ShowProfileDetail}/>
      </Stack.Navigator>
    )
}