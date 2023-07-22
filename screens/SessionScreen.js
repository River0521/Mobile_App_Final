import React from "react";
import { Text } from "react-native";
import { Pedometer } from "expo-sensors";
import { useState } from "react";

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

  return <Text>SessionScreen</Text>;
};
