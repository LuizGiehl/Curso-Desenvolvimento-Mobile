import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput} from 'react-native';


function App() {
  const [nome, setNome] = useState('');

  return(
    <View style={styles.container}>

      <TextInput
        styles={styles.input}
        placeholder='Digite seu nome'
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'gray'
  },

  input:{
    height: 45,
    borderWidth:2,
    margin: 10,
    padding:10,
    fontSize: 20
  }
});



export default App;