import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';


function App() {
  const [nome, setNome] = useState('');
  const [input, setInput] = useState('');

 function entrar() {
  if (input === "") {
    setNome('');
    alert("Digite seu nome");
    return;
  } else {
    setNome('Bem vindo ' + input);
  }
 };
 function limpar() {

  setNome('');
  

 }

  return(
    <View style={styles.container}>

      <TextInput
        style={styles.input}
        placeholder='Digite seu nome'
        onChangeText={ (text) => setInput(text) }
      />
      <Button title='Entrar' onPress={entrar} style={styles.button}/>
      <Button title='limpar' onPress={limpar} style={styles.button}/>

      <Text style={styles.texto}>{nome}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },

  input:{
    height: 45,
    borderWidth:2,
    margin: 10,
    marginTop: 45,
    padding:10,
    fontSize: 20
  },

  texto:{
    textAlign: 'center',
    fontSize: 25,
    marginTop: 5,
  },

  button:{
    margin: 10,
    padding: 1,
    color: 'red',
    borderRadius: 6,
  }
});



export default App;