import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Leaderboard } from "../screens/Leaderboard";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { HomeScreen } from "../screens/HomeScreen";
import HomeNavigation from "./HomeNavigation";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator className="mb-4">
      <Tab.Screen
        name="HomeScreen"
        options={{
          tabBarIcon: () => <AntDesign name="home" size={24} color="#449DD1" />,
          headerShown: false,
        }}
        component={HomeNavigation}
      />
      <Tab.Screen
        name="Leaderboard"
        options={{
          tabBarIcon: () => <Entypo name="trophy" size={24} color="#449DD1" />,
          headerShown: false,
        }}
        component={Leaderboard}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
