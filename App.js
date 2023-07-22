import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { HomeScreen } from "./screens/HomeScreen";
import { Leaderboard } from "./screens/Leaderboard";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { SessionScreen } from "./screens/SessionScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator className="mb-4">
        <Tab.Screen
          name="Home Screen"
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
}

export default App;

function account() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SessionScreen" component={SessionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
