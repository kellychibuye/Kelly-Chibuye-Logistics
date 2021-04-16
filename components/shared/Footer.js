import React from 'react';
import {Text, StyleSheet, View} from "react-native";

function Footer(props) {
    return (
        <div>
            <View style={styles.container}>
                <Text color="white"><h3>Kelly Chibuye Logistics</h3></Text>
            </View>
            
        </div>
    );
}

export default Footer;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: '',
      justifyContent: '',
      color:'white',
      width:'100%'
      
    },
    Img:{
       
    }
  });