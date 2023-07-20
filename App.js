import { StyleSheet, Text, View } from "react-native";
import { Login } from "./screens/Login";
//import { AppNavigation } from "./navigation/appNavigation";
import { HomeScreen } from "./screens/HomeScreen";
import { Leaderboard } from "./screens/Leaderboard";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Entypo, AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator className="mb-4">
        <Tab.Screen name="Home Screen"
          options={{
            tabBarIcon: () => (<AntDesign name="home" size={24} color="#449DD1" />),
            headerShown: false
          }} component={HomeScreen}
        />
        <Tab.Screen name="Leaderboard"
          options={{ tabBarIcon: () => (<Entypo name="trophy" size={24} color="#449DD1" />) }}
          component={Leaderboard} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
