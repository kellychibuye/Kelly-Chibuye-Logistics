import React from 'react';
import { View,Text, TextInput, Button,StyleSheet,Image } from 'react-native';
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import signup from "./SignUp";
import signin from "./SignIn";
import Home from "./Home";
import UserDashBoard from "./UserDashBoard";

function Navigation(props) {
  
    return (
      <View >
       <header>
        <Router>
               
                <Link  exact to="/signup" >Sign Up </Link>
                
                <Link  exact to="/" >  || Sign In</Link>
                
              <Switch> 
               
                <Route exact path="/signup" component={signup}/>
                 <Route  path="/Home" component={Home}/>
                 <Route  path="/Userrequest" component={UserDashBoard}/>
                 <Route exact  path="/" component={signin}/>
            </Switch>
        </Router>
    </header>

      </View>
    );
  }

export default Navigation;








const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
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
       
        marginLeft:"35%"
     },
     space:{
       paddingLeft:"10px"
     }
  });