import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const correctGuessArray = [];
export default function ArrayItems(props) {
  console.log(props);

  const numbersNotGuessed = () => {
    return props.arrayOfNumbers.map((item, index) => {
      if (props.guess && item.toString() === props.guess) {
        if (!correctGuessArray.includes(item)) {
          correctGuessArray.push(item);
        }
        props.arrayOfNumbers.splice(index, 1);
      } else {
        return (
          <View key={index} style={{ margin: 20 }}>
            <Text>{`Value: ?`}</Text>
          </View>
        );
      }
    });
  };
  const numbersGuessed = () => {
    if (correctGuessArray && correctGuessArray.length > 0) {
      return correctGuessArray.map((item, index) => {
        return (
          <View key={index} style={{ margin: 20 }}>
            <Text>{`Value: ${item}`}</Text>
          </View>
        );
      });
    }
  };

  return (
    <>
      <View>{numbersNotGuessed()}</View>
      <View>{numbersGuessed()}</View>
    </>
  );
}

const styles = StyleSheet.create({
  arrayItems: {
    textAlign: "center",
    textAlignVertical: "center",
    height: 35,
    width: 350,
    borderColor: "black",
    borderWidth: 2,
  },
});
