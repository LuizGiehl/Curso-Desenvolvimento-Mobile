import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Pessoa(props){
    return(
      <View style={styles.areaPessoa}>
        <Text style={styles.textPessoa}> {props.data.nome} </Text>
        <Text style={styles.textPessoa}> {props.data.idade} anos </Text>
        <Text style={styles.textPessoa}> {props.data.email} </Text>
      </View>
    );
  }

const styles = StyleSheet.create({
    areaPessoa: {
        backgroundColor: '#121212',
        height: 200,
        marginBottom: 15,
        justifyContent: 'center',
      },
      textPessoa: {
        color: '#FFF',
        fontSize: 20,
      }
})
  
export default Pessoa;