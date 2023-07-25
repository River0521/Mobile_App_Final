import React, { useState } from "react";
import { Text, View } from "react-native";
import { useEffect } from "react";
import axios from "axios";
import "../global";

export const AccountScreen = () => {
  const [Acct, setAccount] = useState([]);

  useEffect(() => {
    axios
      .get("http://10.0.2.2:3000/getUser")
      .then((Acct) => setAccount(Acct.data))
      .catch((err) => console.log(err));
  }, []);

  Acct.map((item) => {
    console.log(item);
    //console.log(item.UserName);
    global.username = item.UserName;
    global.highestStep = item.HighestSteps;
    global.highestDistance = item.HighestDistance;
    global.highestCalories = item.HighestCalories;
    global.lastStep = item.LatestSteps;
    global.lastDistance = item.LatestDistance;
    global.lastCalories = item.LatestCalories;
    console.log(global.username);
  });

  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Text className="text-2xl -mt-40 text-center">
        Account Session Information
      </Text>
      <Text className="text-4xl mt-20 text-center">{global.username}</Text>

      <View>
        <View className="mt-10">
          <Text
            className="mb-3 text-2xl text-center"
            style={{ fontWeight: "bold" }}
          >
            Highest Scores:
          </Text>
          <Text className="text-xl">Highest Steps: {global.highestStep}</Text>
          <Text className="text-xl">
            Highest Distance: {global.highestDistance} mi
          </Text>
          <Text className="text-xl">
            Highest Calories Burned: {global.highestCalories}
          </Text>
        </View>

        <View className="mt-10">
          <Text
            className="mb-3 text-2xl text-center"
            style={{ fontWeight: "bold" }}
          >
            Last Session Scores:
          </Text>
          <Text className="text-xl">Last Session Steps: {global.lastStep}</Text>
          <Text className="text-xl">
            Last Session Distance: {global.lastDistance} mi
          </Text>
          <Text className="text-xl">
            Last Session Calories Burned: {global.lastCalories}
          </Text>
        </View>
      </View>
    </View>
  );
};
