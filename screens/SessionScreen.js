import React, { useEffect } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { Pedometer } from "expo-sensors";
import { useState } from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Octicons, MaterialCommunityIcons } from "@expo/vector-icons";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import * as Location from "expo-location";

export const SessionScreen = () => {
  const [PedomaterAvailability, SetPedomaterAvailability] = useState("");
  const [StepCount, SetStepCount] = useState(41);

  let finishClicked = false;

  var Dist = StepCount / 1300 / 1.609;
  var DistanceCovered = Dist.toFixed(4);
  var cal = DistanceCovered * 60;
  var caloriesBurnt = cal.toFixed(4);

  React.useEffect(() => {
    subscribe();
  }, []);

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    (async () => {
      var latitude;
      var longitude;

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let startlocation = await Location.getCurrentPositionAsync({});
      setLocation(startlocation);
      latitude = location.coords.latitude;
      longitude = location.coords.longitude;
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

      <MapView className="mt-2" style={styles.map} showsUserLocation>
        <Marker coordinate={{ latitude: 0, longitude: 0 }} />
      </MapView>

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
        <TouchableOpacity className="flex-row align-bottom justify-center">
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
});
