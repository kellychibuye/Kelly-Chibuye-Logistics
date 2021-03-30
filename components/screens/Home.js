import React from 'react';
import { View,Text, TextInput, Button,StyleSheet,Image } from 'react-native';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"

import Footer from "../shared/Footer";
import UserDashBoard from "./UserDashBoard";


function Home(props) {
    return (
      <View >
         <Text><h3>Welcome to .....</h3></Text>
         <View>
             <h1>Kelly Chibuye Logistics</h1></View>
            <Image style={styles.Ig} source={require('../../assets/images/logo.jpg') }  />
           
            <View>
                <Text><h3>Book a An Appointment with Us.....</h3></Text>
               
                <br/>
               
                <Image style={styles.Img} source={require('../../assets/images/Truck1.jpeg') }  />
                <br/>
                <Link exact to="/Userrequest" ><Button type="submit" title="Hire Care"> </Button></Link>
                    <br/>
                <Image style={styles.Img} source={require('../../assets/images/Truck2.jpeg') }  />
                <br/>
                <Link exact to="/Userrequest" ><Button type="submit" title="Hire Care"> </Button></Link>
                    <br/>
                <Image style={styles.Img} source={require('../../assets/images/Truck3.jpeg') }  />
                <br/>
                <Link exact to="/Userrequest" ><Button type="submit" title="Hire Care"> </Button></Link>
                    <br/>
                    <Image style={styles.Img} source={require('../../assets/images/Truck4.jpeg') }  />
                <br/>
                <Link exact to="/Userrequest" ><Button type="submit" title="Hire Care"> </Button></Link>
                    <br/>

            </View>


            <Router>
<Link exact to="/Userrequest" ><Button type="submit" title="SIGN IN"> </Button></Link>  
    <Switch> 
      <Route exact  path="/Userrequest" component={UserDashBoard}/>
  </Switch>
</Router>

            <Footer/>
      </View>
    );
  }

export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: '',
      justifyContent: '',
    },
    Img:{
        height:'190px',
        width:'100%',
       
    },
    Ig:{
        height:'90px',
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