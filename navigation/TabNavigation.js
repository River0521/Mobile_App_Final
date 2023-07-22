import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/HomeScreen";
import { Leaderboard } from "../screens/Leaderboard";
import { AntDesign, Entypo } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator className="mb-4">
        <Tab.Screen
          name="HomeScreen"
          options={{
            tabBarIcon: () => (
              <AntDesign name="home" size={24} color="#449DD1" />
            ),
            headerShown: false,
          }}
          component={HomeScreen}
        />
        <Tab.Screen
          name="Leaderboard"
          options={{
            tabBarIcon: () => (
              <Entypo name="trophy" size={24} color="#449DD1" />
            ),
            headerShown: false,
          }}
          component={Leaderboard}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;
