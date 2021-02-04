import React, { useEffect, useMemo, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import ArrayItems from "./ArrayItems";

function genRandomArray(length, max) {
  const array = [...new Array(length)].map(() =>
    Math.round(Math.random() * max)
  );
  return array;
}

export default function Input() {
  const [input, setInput] = useState("");
  const [number, setNumber] = useState(0);
  const onPress = () => setNumber(input);
  const [arrayOfRandomNumbers, setRandom] = useState(genRandomArray(5, 1000));
  // let arrayOfRandomNumbers = [];
  // useEffect(() => {
  //   const randomArray = (length, max) =>
  //     [...new Array(length)].map(() => Math.round(Math.random() * max));
  //   arrayOfRandomNumbers = randomArray(5, 1000);
  // }, []);
  // const randomArray = (length, max) =>
  //   [...new Array(length)].map(() => Math.round(Math.random() * max));
  // const arrayOfRandomNumbers = randomArray(5, 1000);

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
      <ArrayItems number={number} arrayOfNumbers={arrayOfRandomNumbers} />
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
