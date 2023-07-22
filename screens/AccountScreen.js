import React from "react";
import { Text, View } from "react-native";

export const AccountScreen = () => {
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
      <Text className="text-4xl mt-20 text-center">UserName</Text>

      <View>
        <View className="mt-10">
          <Text
            className="mb-3 text-2xl text-center"
            style={{ fontWeight: "bold" }}
          >
            Highest Scores:
          </Text>
          <Text className="text-xl">Highest Steps: 0</Text>
          <Text className="text-xl">Highest Distance: 0</Text>
          <Text className="text-xl">Highest Calories Burned: 0</Text>
        </View>

        <View className="mt-10">
          <Text
            className="mb-3 text-2xl text-center"
            style={{ fontWeight: "bold" }}
          >
            Last Session Scores:
          </Text>
          <Text className="text-xl">Last Session Steps: 0</Text>
          <Text className="text-xl">Last Sessio Distance: 0</Text>
          <Text className="text-xl">Last Sessio Calories Burned: 0</Text>
        </View>
      </View>
    </View>
  );
};
