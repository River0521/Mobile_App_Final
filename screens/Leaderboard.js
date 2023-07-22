import React from "react";
import { FlatList, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";

export const Leaderboard = () => {
  return (
    <View>
      <Text className="text-center text-4xl mt-10">Leaderboards</Text>
      <View className="flex-row content-center justify-center mt-3">
        <TouchableOpacity className="mr-4">
          <Text>
            <Entypo
              name="globe"
              size={35}
              color="#449DD1"
              onPress={() => console.log("World")}
            />
            Global
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>
            <Entypo name="location" size={35} color="#449DD1" />
            Regional
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList />
    </View>
  );
};
