import React, { useEffect, useMemo, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import ArrayItems from "./ArrayItems";

export default function Input() {
  const [input, setInput] = useState("");
  const [number, setNumber] = useState("");
  const [arrayOfRandomNumbers, setArrayOfRandomNumbers] = useState(
    initRandomArray
  );
  const onPress = () => {
    setNumber(input);
    setInput("");
  };

  const newGame = () => {
    setInput("");
    setNumber("");
    setArrayOfRandomNumbers(initRandomArray);
  };

  function initRandomArray() {
    return genRandomArray(5, 1000);
  }

  function genRandomArray(length, max) {
    const array = [...new Array(length)].map(() =>
      Math.round(Math.random() * max)
    );
    return array;
  }

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
        <Text style={{ color: "white" }}> Guess </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={newGame}>
        <Text style={{ color: "white" }}> Start new Game </Text>
      </TouchableOpacity>
      <ArrayItems guess={number} arrayOfNumbers={arrayOfRandomNumbers} />
    </>
  );
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    width: 210,
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: "#faf0e6",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#8a2be2",
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
  },
});
