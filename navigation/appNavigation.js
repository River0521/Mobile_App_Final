import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import { HomeScreen } from '../screens/HomeScreen';
import { HomeIcon } from '@heroicons/react/24/outline';

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen}
                />
                <Tab.Screen name="Settings" component={HomeScreen} />

            </Tab.Navigator>
        </NavigationContainer >
    )
}
