import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const AddItems = prop => {
    return (
        <View style={styles.inputText}>
            <Text>{prop.input}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    inputText: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: 'grey',
        borderColor: 'black',
        borderWidth: 1
      }
})
export default AddItems;