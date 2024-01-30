import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTab } from "../screens";
import EditProfileScreen from '../screens/EditProfileScreen';
import ShowProfileDetail from '../screens/ShowProfileDetail';


const bottomTab = createNativeStackNavigator();

export default function MainStack() {
    return (
        <bottomTab.Navigator>
            <Stack.Screen name="bottomTab" component={BottomTab} />
          <Stack.Screen name="editProfile" component={EditProfileScreen}/>
          <Stack.Screen name='showProfileDetail' component={ShowProfileDetail}/>
        </bottomTab.Navigator>
    )
}