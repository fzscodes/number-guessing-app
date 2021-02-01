import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ArrayItems() {
  const randomArray = (length, max) =>
    [...new Array(length)].map(() => Math.round(Math.random() * max));
  const arrayOfRandomNumbers = randomArray(5, 1000);
  console.log(arrayOfRandomNumbers);
  const numbersInArray = () => {
    return arrayOfRandomNumbers.map((item, index) => {
      return (
        <View key={index} style={{ margin: 20 }}>
          <Text>{`Value: ${item}`}</Text>
        </View>
      );
    });
  };

  return <View>{numbersInArray()}</View>;
}
