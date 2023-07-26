import React, { useEffect } from "react";
import { Text, StyleSheet, TouchableOpacity, Modal, Alert } from "react-native";
import { Pedometer } from "expo-sensors";
import { useState } from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Octicons, MaterialCommunityIcons } from "@expo/vector-icons";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import * as Location from "expo-location";
import api from "../DataBase/axios";
import "../global";

const highest = global.highestStep == undefined ? 1 : global.highestStep;

export const SessionScreen = () => {
  const [PedomaterAvailability, SetPedomaterAvailability] = useState("");
  const [StepCount, SetStepCount] = useState(150);
  const [congratsModalVisible, setCongratsModalVisible] = useState(false);
  const [unfortunateModalVisible, setUnfortunateModalVisible] = useState(false);

  let finishClicked = false;

  var Dist = StepCount / 1300 / 1.609;
  var DistanceCovered = Dist.toFixed(4);
  var cal = DistanceCovered * 60;
  var caloriesBurnt = cal.toFixed(4);

  const winAlr = () =>
    Alert.alert("Woo-Hoo", "You Won", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  const LoseAlr = () =>
    Alert.alert("Awww", "You Lost", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  React.useEffect(() => {
    subscribe();
  }, []);

  const [location, setLocation] = useState({
    coords: { latitude: 0, longitude: 0 },
  });
  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let startlocation = await Location.getCurrentPositionAsync({});
      setLocation(startlocation);
    })();
  }, []);

  let text = "";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  subscribe = () => {
    const subscription = Pedometer.watchStepCount((result) => {
      SetStepCount(result.steps);
    });

    Pedometer.isAvailableAsync().then(
      (result) => {
        SetPedomaterAvailability(String(result));
      },

      (error) => {
        SetPedomaterAvailability(error);
      }
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {/*<View>
        <Text style={{ textAlign: "center" }}>
          Is Pedometer available on the device : {PedomaterAvailability}
        </Text>
  </View>*/}

      <View>
        <Text style={{ textAlign: "center" }}>Current Steps: {StepCount}</Text>
      </View>

      <View>
        <View>
          <Text style={{ textAlign: "center" }}>
            Distance Covered: {DistanceCovered} mi
          </Text>
        </View>

        <View>
          <Text style={{ textAlign: "center" }}>
            Calories Burnt: {caloriesBurnt}
          </Text>
        </View>
        <StatusBar style="auto" />
      </View>

      <MapView
        className="mt-2"
        style={styles.map}
        showsUserLocation
        region={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 1,
          longitudeDelta: 1,
        }}
      ></MapView>

      <View
        className="justify-center"
        style={{ position: "absolute", bottom: 50, width: "100%" }}
      >
        <TouchableOpacity
          className="flex-row align-bottom justify-center pb-2"
          onPress={() => {
            SetStepCount(0);
          }}
        >
          <MaterialCommunityIcons name="restart" size={24} color="#449DD1" />
          <Text className="pl-3">Restart Session!</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex-row align-bottom justify-center"
          onPress={() => {
            console.log("StepCount: " + StepCount);
            console.log("HighestStep: " + highest);
            if (StepCount > highest) {
              winAlr();
            } else {
              LoseAlr();
            }
          }}
        >
          <Octicons name="stop" size={24} color="#449DD1" />
          <Text className="pl-3">Finish Session!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    height: "72%",
    width: "95%",
    alignSelf: "center",
  },
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
  exclamationStyle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "black",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
