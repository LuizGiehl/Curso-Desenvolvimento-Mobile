import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import Pessoa from './src/Pessoa'

export default function App() {

const [feed, setFeed] = useState([
  {_id: 1, nome: 'Luiz', cargo: 'Estudante',}
])

  return (
    <View>
      <Text style={styles.Text}>Sejá Bem Vindo!!!!</Text>

      
      <FlatList
      data={feed}
      keyExtractor={(item) => item._id}
      renderItem={ ({item}) => <Pessoa data={item} />}
      >

      </FlatList>

    </View>

  );

}

const styles = StyleSheet.create({
  Text: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 30
  }
})
