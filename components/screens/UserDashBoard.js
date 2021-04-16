import React from 'react';
import { View,Text, TextInput, Button,StyleSheet,Image } from 'react-native';
import Footer from "../shared/Footer";
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const UserDashBoard=(props)=> {

  function DoSet(){
    setTimeout(() => {
     
    }, 3000);
    
  }
    return (
      <View> 
        <View paddingLeft="10%"><h1>Goeffrey Zed Trasporter's</h1></View>
        <Text>Dash Board</Text>
         <Image style={styles.Img} source={require('../../assets/images/Logo1.jpeg')} />
    
    
    <div>
<View style={styles.container}>
 
     
      
     
      <Text style={styles.text}> <h3>User Request being Processed......</h3> </Text>
      <Text> Transaction is Approved</Text>
      <br/>
      <Footer/> 
  </View>
 
  
  
</div>
      </View>
     
    );
  }

export default UserDashBoard;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: '',
    justifyContent: '',
  },
  Img:{
      height:'100px',
      width:'100%',
      backgroundColor:"black"
  },
  imput:{
      border:" solid black",
      borderRadius:"15px",
      height:"35px"

  },
  text:{
     
      marginLeft:"30%"
   }
});