import React from 'react';
import { View,Text, TextInput, Button,StyleSheet,Image } from 'react-native';
import Footer from "../shared/Footer";
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import Home from "./Home";


function SignUp(props) {
    return (
        <div>
            <View>
                <Router>

                <View><h1>Kelly Chibuye Logistics</h1></View>
                <Image style={styles.Img} source={require('../../assets/images/logo.jpg') }  />
                <View style={styles.text}><h1>SIGN UP</h1></View>
                <form>
                <View>
                    <Text><h3> First Name</h3></Text>
                    <TextInput style={styles.imput} placeholder="  Enter your first Name"></TextInput>
                </View>
                <View>
                    <Text><h3> Last Name</h3></Text>
                    <TextInput style={styles.imput} placeholder="  Enter your Last Name"></TextInput>
                </View>
                <View>
                    <Text><h3> Email Address</h3></Text>
                    <TextInput style={styles.imput} type="email" placeholder="  Enter your working Email here"></TextInput>
                </View>
                <View>
                    <Text><h3> Residential Adress</h3></Text>
                    <TextInput style={styles.imput} type="address"></TextInput>
                </View>
                <View>
                    <Text><h3> Town</h3></Text>
                    <TextInput style={styles.imput} type="town"></TextInput>
                </View>
                <View>
                    <Text><h3> Country</h3></Text>
                    <TextInput style={styles.imput} type="country"></TextInput>
                </View>
                <View>
                    <Text><h3> Date of Birth</h3></Text>
                    <TextInput style={styles.imput} type="date"></TextInput>
                </View>
                <View>
                    <Text><h3> Passowrd</h3></Text>
                    <TextInput style={styles.imput} placeholder="  Enter your Pasword" secureTextEntry={true}/>
                </View>
                <View>
                    <Text><h3> Confirm Passowrd</h3></Text>
                    <TextInput style={styles.imput} placeholder="  Confirm your Pasword" secureTextEntry={true}/>
                </View>
                <br/>
                <Link exact to="/Home" ><Button type="submit" title="Submit"> </Button></Link>
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

export default SignUp;

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
     }
  });