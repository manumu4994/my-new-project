import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
const AddItem = props => {
    return (
        <View style={styles.inputText}>
            <Text >{props.title}</Text> {/* ตั้งชื่อ object ว่า props และตั้ง children ชื่อ title */}
        </View>
    )
};

const styles = StyleSheet.create({
    inputText: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: 'grey',
        borderColor: 'black',
        borderWidth: 1
    }
});
export default AddItem;