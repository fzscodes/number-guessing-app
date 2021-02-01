import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";

export default function Input() {
  const [input, setInput] = useState("");
  const [number, setNumber] = useState(0);
  const onPress = () => setNumber(input);
  //console.log(number);
  
  return (
    <>
      <TextInput
        style={styles.textInput}
        keyboardType="numeric"
        onChangeText={(input) => setInput(input)}
        value={input}
        placeholder={`Enter any number less than 1000`}
        maxLength={4}
      />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text> Guess </Text>
      </TouchableOpacity>
      
    </>
  );
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    width: 250,
    borderColor: "gray",
    borderWidth: 1,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
});
