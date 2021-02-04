import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import UserInput from "./src/components/UserInput";
// import GuessButton from './src/components/GuessButton';
// import ArrayItems from "./src/components/ArrayItems";
// import InputContext from './src/components/InputContext';

export default function App() {
  // const [input, setInput] = useState('')
  return (
    <>
      <View style={styles.container}>
        <Text style={{ fontWeight: "bold", fontSize: 30 }}>
          Search algorithms
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>
          Start editing to see some magic happen!
        </Text>
        {/* <InputContext.provider value={input}> */}
        <UserInput />
        {/* <GuessButton/> */}
        {/* <ArrayItems /> */}
        {/* </InputContext.provider> */}
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 50,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
