import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './screens/Login';
import { AppNavigation } from './navigation/appNavigation';
import { HomeScreen } from './screens/HomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Login />

        <HomeScreen />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
