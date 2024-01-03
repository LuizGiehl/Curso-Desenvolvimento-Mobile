import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput} from 'react-native';


function App() {
  const [nome, setNome] = useState('');


  return(
    <View style={styles.container}>

      <TextInput 
        style={styles.input}
      
      />

    </View>
  );

  const styles = StyleSheet.create({

    container: {
      flex:1
    },
    input: {
      height: 45,
      borderWidth: 1,
      margin: 10,
      padding: 10,
      fontSize: 20,
    }
  })


}




export default App;