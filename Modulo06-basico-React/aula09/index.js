import React, { useState} from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';


function App() {
  return(
    <View style={{
      flex:1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-end'
     }}>

      <View style={{height:55, width:50, backgroundColor: '#121212'}}></View>

      <View style={{height:55, width:50, backgroundColor: 'red'}}></View>

      <View style={{height:55, width:50, backgroundColor: 'green'}}></View>

      <View style={{height:55, width:50, backgroundColor: 'blue'}}></View>


    </View>
  );
}




export default App;