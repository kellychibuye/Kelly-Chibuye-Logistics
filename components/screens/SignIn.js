import React from 'react';
import { View,Text, TextInput, Button,StyleSheet,Image } from 'react-native';
import Footer from "../shared/Footer";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import Home from "./Home";
  
const Stack = createStackNavigator();
function SignIn({navigation}) {
    return (
        <div>
          <View style={styles.container}>
           <Router>
                <View paddingLeft="10%"><h1>Goeffrey Zed Trasporter's</h1></View>
                
                <Image style={styles.Img} source={require('../../assets/images/Logo1.jpeg')} />
              
                <Text style={styles.text}> <h1>SIGN IN</h1> </Text>
               <form>
                <View>
                    <Text id="Email" name="Email"><h3>Email</h3></Text>
                    <TextInput style={styles.imput} for="#Email" type="email" placeholder="   Please enter your Email here!!"/>
                </View>
                <br/>
                <View>
                    <Text  id="Email" name="Email"><h3>Password</h3></Text>
                    <TextInput style={styles.imput} for="Password" secureTextEntry={true} placeholder="  Please enter Passowrd"/>
                </View>
                <br/>
          <Link exact to="/Home" ><Button  style={styles.btn} type="submit" title="SIGN IN"> </Button></Link>

                </form>
                <br/>

               
               
                
                
              <Switch> 
               
               
                <Route exact  path="/Home" component={Home}/>
                 
            </Switch>
        </Router>
                <Footer/> 
            </View>
           
            
            
        </div>
    );
}

export default SignIn;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'grey',
      alignItems: '',
      justifyContent: '',
      margin:"65px"
    },
    Img:{
        height:'120px',
        width:'100%',
      
    },
    imput:{
        border:" solid black",
        borderRadius:"15px",
        height:"35px",
        backgroundColor: '#fff',

    },
    text:{
       
       marginLeft:"40%"
    } ,
    btn:{
       
        backgroundColor: 'black',
     }
  });