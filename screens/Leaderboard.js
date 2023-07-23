import React, { useEffect, useState } from "react";
import { FlatList, Text, View, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { LeaderboardItems } from "./LeaderboardItems";

export const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  ]);

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
      <FlatList data={leaderboard} renderItem={() => LeaderboardItems} />
    </View>
  );
};

const Item = () => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
