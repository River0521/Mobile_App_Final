import React from "react";
import { Text, StyleSheet } from "react-native";
import { Pedometer } from "expo-sensors";
import { useState } from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Octicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import MapView from "react-native-maps";

export const SessionScreen = () => {
  const [PedomaterAvailability, SetPedomaterAvailability] = useState("");
  const [StepCount, SetStepCount] = useState(0);

  var Dist = StepCount / 1300 / 1.609;
  var DistanceCovered = Dist.toFixed(4);
  var cal = DistanceCovered * 60;
  var caloriesBurnt = cal.toFixed(4);

  React.useEffect(() => {
    subscribe();
  }, []);

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
        <Text style={{ textAlign: "center" }}>{StepCount} Steps!</Text>
      </View>

      <View>
        <View>
          <Text style={{ textAlign: "center" }}>Target : 6500 steps(5kms)</Text>
        </View>

        <View>
          <Text style={{ textAlign: "center" }}>
            Distance Covered : {DistanceCovered} mi
          </Text>
        </View>

        <View>
          <Text style={{ textAlign: "center" }}>
            Calories Burnt : {caloriesBurnt}
          </Text>
        </View>
        <StatusBar style="auto" />
      </View>

      <MapView className="mt-2" style={styles.map} showsUserLocation />

      <View
        className="justify-center"
        style={{ position: "absolute", bottom: 50, width: "100%" }}
      >
        <TouchableOpacity className="flex-row align-bottom justify-center pb-2">
          <MaterialCommunityIcons name="restart" size={24} color="#449DD1" />
          <Text className="pl-3">Start Session!</Text>
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
