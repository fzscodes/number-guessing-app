import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ArrayItems(props) {
  console.log("inside array items");
  console.log(props);

  const numbersInArray = () => {
    return props.arrayOfNumbers.map((item, index) => {
      console.log(item);
      if (props.number && item.toString()===props.number) {
        return (
          <View key={index} style={{ margin: 20 }}>
            <Text>{`Value: ${item}`}</Text>
          </View>
        );
      } else {
        return (
          <View key={index} style={{ margin: 20 }}>
            <Text>{`Value: ?`}</Text>
          </View>
        );
      }
    });
  };

  return numbersInArray();
}
