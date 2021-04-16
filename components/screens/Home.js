import React from 'react';
import { View,Text, TextInput, Button,StyleSheet,Image } from 'react-native';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"

import Footer from "../shared/Footer";
import SignIn from "./SignIn";


function Home(props) {
    return (
      <View >
        
         <View>
             <h1>Goeffrey Zed Trasporter's</h1></View>
            
           
            <View>
               
               
              
               
                <Image style={styles.Img} source={require('../../assets/images/Truck6.jpeg') }  />
                <br/>
                <Link exact to="/Userrequest" ><Button type="submit" title="Hire Care"> </Button></Link>
                    <br/>
                <Image style={styles.Img} source={require('../../assets/images/Truck5.jpeg') }  />
                <br/>
                <Link exact to="/Userrequest" ><Button type="submit" title="Hire Care"> </Button></Link>
                    <br/>
                <Image style={styles.Img} source={require('../../assets/images/Truck7.jpeg') }  />
                <br/>
                <Link exact to="/Userrequest" ><Button type="submit" title="Hire Care"> </Button></Link>
                    <br/>
                    <Image style={styles.Img} source={require('../../assets/images/Truck4.jpeg') }  />
                <br/>
                <Link exact to="/Userrequest" ><Button type="submit" title="Hire Care" backgroundColor="black"> </Button></Link>
                    <br/>

            </View>


            <Link to="/" ><Button type="submit" title="Log Out"> </Button></Link>

            <Footer/>
      </View>
    );
  }

export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'grey',
      alignItems: '',
      justifyContent: '',
    },
    Img:{
        height:'190px',
        width:'100%',
       
    },
    Ig:{
        height:'50px',
        width:'100%',
       
    },
    imput:{
        border:" solid black",
        borderRadius:"15px",
        height:"35px"

    },
    text:{
       
        marginLeft:"35%"
     }
  });