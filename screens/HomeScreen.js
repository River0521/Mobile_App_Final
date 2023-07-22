import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { Login } from "./Login";
import { NavigationContainer } from "@react-navigation/native";
import { SessionScreen } from "./SessionScreen";
import { createStackNavigator } from "@react-navigation/stack";

export const HomeScreen = () => {
  const Stack = createStackNavigator();

  const nav = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="SessionScreen" component={SessionScreen} />
      </Stack.Navigator>
    );
  };

  return (
    <View>
      <Login />
      <View className="flex-row justify-end content-end justify-items-end">
        <TouchableOpacity
          className="flex-row mt-2 items-center justify-end content-end justify-items-end"
          onPress={nav}
        >
          <MaterialCommunityIcons
            name="account-circle"
            size={50}
            color="#449DD1"
            className="flex-row mt-20 justify-end content-end justify-items-end"
          />
        </TouchableOpacity>
      </View>

      <Text className="text-center text-4xl mt-10">Welcome, username!</Text>
      <Text className="text-center text-2xl mt-1">
        Your current HighScore is: 0 Steps!
      </Text>
      <TouchableOpacity className="flex-auto bg-lime-200 mt-2 items-center mx-32 my-3 align-middle">
        <Text className="align-middle">
          <FontAwesome
            name="heartbeat"
            size={24}
            color="#449DD1"
            className="mr-4"
          />
          Start Session!
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const Stack = createStackNavigator();

function nav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SessionScreen" component={SessionScreen} />
    </Stack.Navigator>
  );
}
