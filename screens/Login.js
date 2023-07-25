import React, { useState } from "react";
import {
  Modal,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  TextInput,
  Alert,
} from "react-native";
import axios from "axios";
import "../global";

export const Login = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handlePassword = (value) => {
    setPassword(value);
  };

  const handleUser = (value) => {
    setUser(value);
  };

  const handleLogin = () => {
    // Validate user and password here (e.g., check if they're not empty)
    if (!user || !password) {
      Alert.alert("Error", "Please enter both username and password.");
      return;
    }

    // Make the API call to authenticate the user (replace with your actual login API)
    axios
      .get(`http://10.0.2.2:3000/getUser/User?Login=${user}`, {
        username: user,
        password: password,
      })
      .then((response) => {
        // Handle successful login here (e.g., store user session, navigate to the next screen)
        console.log("Login successful!");
        setModalVisible(false); // Close the modal after successful login
        global.username = user;
        global.highestStep = response.data[0].HighestSteps;
        global.highestDistance = response.data[1].HighestDistance;
        global.highestCalories = response.data[0].HighestCalories;
        global.lastStep = response.data[0].LatestSteps;
        global.lastDistance = response.data[0].LatestDistance;
        global.lastCalories = response.data[0].LatestCalories;
      })
      .catch((error) => {
        // Handle login error here (e.g., display error message)
        console.log("Login error:", error);
        Alert.alert("Error", "Invalid username or password. Please try again.");
      });
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={false}
        backgroundColor="#42D1A6"
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView} backgroundColor="#42D1A6">
            <TextInput
              limit={20}
              style={styles.textfield}
              placeholder="User Name"
              onChangeText={handleUser}
            />
            <TextInput
              className="mt-3"
              placeholder="Password"
              secureTextEntry={true}
              style={styles.textfield}
              onChangeText={handlePassword}
            />
            <TouchableOpacity
              className="mt-3"
              style={[styles.button, styles.buttonClose]}
              onPress={handleLogin} // Add onPress event to trigger login logic
            >
              <Text style={styles.textStyle}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#42D1A6",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textfield: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#00F33D",
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
