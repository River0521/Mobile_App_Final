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
      <Text className="text-2xl -mt-40">Account Session Information</Text>
      <Text className="text-4xl mt-20">UserName</Text>

      <View>
        <View className="mt-10">
          <Text className="mb-3 text-2xl" style={{ fontWeight: "bold" }}>
            Highest Scores:
          </Text>
          <Text className="text-xl text-center">Highest Steps: 0</Text>
          <Text className="text-xl text-center">Highest Distance: 0</Text>
          <Text className="text-xl text-center">
            Highest Calories Burned: 0
          </Text>
        </View>

        <View className="mt-10">
          <Text className="mb-3 text-2xl" style={{ fontWeight: "bold" }}>
            Last Session Scores:
          </Text>
          <Text className="text-xl text-center">Last Session Steps: 0</Text>
          <Text className="text-xl text-center">Last Sessio Distance: 0</Text>
          <Text className="text-xl text-center">
            Last Sessio Calories Burned: 0
          </Text>
        </View>
      </View>
    </View>
  );
};
