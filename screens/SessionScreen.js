import React from "react";
import { Text } from "react-native";
import { Pedometer } from "expo-sensors";
import { useState } from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";

export const SessionScreen = () => {
  const [PedomaterAvailability, SetPedomaterAvailability] = useState("");
  const [StepCount, SetStepCount] = useState(0);

  var Dist = StepCount / 1300;
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
    <View>
      <View style={{ justifyContent: "center" }}>
        <Text>
          Is Pedometer available on the device : {PedomaterAvailability}
        </Text>
      </View>

      <View>
        <Text>{StepCount}</Text>
      </View>

      <View style={{ justifyContent: "center" }}>
        <View>
          <Text style={[{ paddingLeft: 20, marginLeft: "23%" }]}>
            Target : 6500 steps(5kms)
          </Text>
        </View>

        <View style={{ justifyContent: "center" }}>
          <Text style={[{ paddingLeft: 20, marginLeft: "23%" }]}>
            Distance Covered : {DistanceCovered} km
          </Text>
        </View>

        <View>
          <Text style={[{ paddingLeft: 10, marginLeft: "23%" }]}>
            Calories Burnt : {caloriesBurnt}
          </Text>
        </View>
        <StatusBar style="auto" />
      </View>
    </View>
  );
};
