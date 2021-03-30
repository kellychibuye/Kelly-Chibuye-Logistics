import React from 'react';
import { View,Text, TextInput, Button,StyleSheet,Image } from 'react-native';
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";

import Home from "./Home";

function Back(props) {
    return (
      <View >
       
        <Router>
           
                <Link to="/" >Back to Home</Link>
                
              <Switch> 
               
                <Route exact path="/" component={Home}/>
               
                
            </Switch>
        </Router>


      </View>
    );
  }

export default Back;








