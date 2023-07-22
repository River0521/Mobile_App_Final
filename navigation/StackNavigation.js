import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigation from "./TabNavigation";
import { SessionScreen } from "../screens/SessionScreen";
import { Leaderboard } from "../screens/Leaderboard";
import { HomeScreen } from "../screens/HomeScreen";

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <StackNavigation>
      <Stack.Screen name="tabnav" component={TabNavigation} />
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="session" component={SessionScreen} />
      <Stack.Screen name="leaderboard" component={Leaderboard} />
    </StackNavigation>
  );
};
export default StackNavigation;
