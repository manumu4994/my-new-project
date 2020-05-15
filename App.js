import React, { useState, useRef, Component } from 'react';
import 'react-native-gesture-handler';
import {
  StyleSheet, Text, View, Image, TextInput, Button, Alert,
  ScrollView, Animated, PanResponder, useWindowDimensions,
  SafeAreaView, ImageBackground, FlatList, Modal, TouchableOpacity
} from 'react-native';
import { render } from 'react-dom';
import { State } from 'react-native-gesture-handler';
import { Value } from 'react-native-reanimated';
// import { createStackNavigator, createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import home from './pages/home';

// const AppNavigator = createStackNavigator({
//   Home: {screen: home}
// });
// const App = createAppContainer(AppNavigator);

// export default function App() {
//   return (
//     <View style={styles.screen}>

//     </View >
//   );
// }

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     backgroundColor: 'lightblue'
//   }

// });
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// alt + shift + f = doc format 
