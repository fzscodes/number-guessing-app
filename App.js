import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import UserInput from "./src/components/UserInput";

export default function App() {
  return (
    <>
      <ScrollView>
        <LinearGradient
          colors={["#87cefa", "#b0e0e6", "#fffafa"]}
          style={{
            flex: 1,
            backgroundColor: "#40e0d0",
            marginTop: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 17,
              paddingBottom: 10,
              color: "#ff69b4",
            }}
          >
            Start editing to see some magic happen!
          </Text>
          <UserInput />
          <StatusBar style="auto" />
        </LinearGradient>
      </ScrollView>
    </>
  );
}
