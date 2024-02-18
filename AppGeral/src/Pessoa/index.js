import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Pessoa(propriedade){

    return(
      <View  style={styles.pessoa} >
        <Text style={styles.text} > {propriedade.data.nome} </Text>
        <Text style={styles.text} > {propriedade.data.cargo} </Text>
      </View>
    );
  }

const styles = StyleSheet.create({
  pessoa: {
    fontSize: 30,
    textAlign: 'center',
    backgroundColor: '#6699',
    borderRadius: 6,
    padding: 15,
  },
  text: {
    fontSize: 20
  }
})



export default Pessoa;