import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from "./components/screens/Navigation";
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <NavigationContainer >
     <View style={styles.container}>
       <StatusBar style="auto" />
      <Navigation/>
     </View>
      
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    margin:"5px"
   
  },
});
