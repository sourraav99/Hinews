import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Match from '../screens/Match';
import Discover from '../screens/Discover';
import Messages from '../screens/Message';
import SelfProfile from '../screens/SelfProfile';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';


const Tab = createBottomTabNavigator();
const BottomTab = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,

            }}>
            <Tab.Screen
                name="Discover"
                component={Discover}
                options={{

                    tabBarIcon: ({ color, size, focused }) => (
                        <Entypo name="documents" size={focused ? 25 : 20} color={focused ? '#E94957' : '#ADAFBB'} />
                    ),
                }}
            />
            <Tab.Screen
                name="Match"
                component={Match}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <AntDesign name="hearto" color={focused ? '#E94957' : '#ADAFBB'} size={focused ? 25 : 20} />
                    ),
                }}
            />
            <Tab.Screen
                name="Messages"
                component={Messages}
                options={{

                    tabBarIcon: ({ color, size, focused }) => (
                        <AntDesign
                            name="message1"
                            color={focused ? '#E94957' : '#ADAFBB'}
                            size={focused ? 25 : 20}

                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={SelfProfile}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <FontAwesome6 name="user" color={focused ? '#E94957' : '#ADAFBB'} size={focused ? 25 : 20} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    SafeAreaMain: {
        flex: 1,
        backgroundColor: 'white',
    },
    Viewmain: {
        flex: 1,
        backgroundColor: 'white',

    },
});
export default BottomTab;
