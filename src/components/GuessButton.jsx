import React, { useState } from 'react';
import { StyleSheet,Text, TouchableOpacity } from 'react-native';
// import { InputContext } from './InputContext';

export default function GuessButton(setInput) {

    const number = React.useContext(InputContext);
    const [number, setNumber] = useState(0);
    const onPress = () => setNumber(setInput);
    console.log(number);

    return (
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}
        >
            <Text> Guess </Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    },
});