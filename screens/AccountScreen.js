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
      <Text className="text-4xl mt-20 text-center">_Zae</Text>

      <View>
        <View className="mt-10">
          <Text
            className="mb-3 text-2xl text-center"
            style={{ fontWeight: "bold" }}
          >
            Highest Scores:
          </Text>
          <Text className="text-xl">Highest Steps: 62</Text>
          <Text className="text-xl">Highest Distance: 0.516 mi</Text>
          <Text className="text-xl">Highest Calories Burned: 10.213</Text>
        </View>

        <View className="mt-10">
          <Text
            className="mb-3 text-2xl text-center"
            style={{ fontWeight: "bold" }}
          >
            Last Session Scores:
          </Text>
          <Text className="text-xl">Last Session Steps: 10</Text>
          <Text className="text-xl">Last Session Distance: 0.149 mi</Text>
          <Text className="text-xl">Last Session Calories Burned: 0.416</Text>
        </View>
      </View>
    </View>
  );
};
