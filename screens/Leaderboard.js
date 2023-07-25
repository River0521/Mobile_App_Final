import React, { useEffect, useState } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import axios from "axios";

export const Leaderboard = () => {
  const [Acct, setAccount] = useState([]);

  useEffect(() => {
    axios
      .get("http://10.0.2.2:3000/leaderboard") // Replace this URL with your actual API endpoint
      .then((response) => setAccount(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <View>
      <Text className="d text-2xl text-center mt-10">Leaderboard!</Text>
      <View className="mt-5">
        <FlatList
          data={Acct}
          renderItem={({ item, index }) => (
            <View
              className=" bg-violet-700 rounded-lg mt-2 ml-1"
              style={{ width: "98%", height: 75 }}
            >
              <Text
                className="text-2xl ml-2 mt-1"
                style={{ fontWeight: "bold" }}
              >
                {index + 1}.
              </Text>
              <View className="-mt-6">
                <Text className="text-center text-xl ">
                  UserName: {item.UserName}
                </Text>
                <Text className="text-center text-xl align-middle">
                  Score: {item.HighestSteps}
                </Text>
              </View>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()} // Provide a unique key for each item
        />
      </View>
    </View>
  );
};
