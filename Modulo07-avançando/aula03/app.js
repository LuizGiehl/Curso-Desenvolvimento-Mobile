import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import Pessoa from './src/Pessoa'

export default function App() {

const [feed, setFeed] = useState([
  {_id: '1', nome: 'Luiz', idade: 16, email: 'luiz@gmail.com'},
  {_id: '2', nome: 'José', idade: 20, email: 'jose@gmail.com'},
  {_id: '3', nome: 'Carlinhos', idade: 55, email: 'DalvaCavalo@gmail.com'},
  {_id: '4', nome: 'Antonio', idade: 17, email: 'vesgo@gmail.com'},
  {_id: '5', nome: 'CalvãoBoeno', idade: 69, email: 'calvo@gmail.com'},
  {_id: '6', nome: 'Alberto', idade: 79, email: 'alberto@gmail.com'}
]);

  return (
    <View style={styles.container}>
      
      <FlatList
      data={feed}
      keyExtractor={(item) => item._id}
      renderItem={ ({ item }) => <Pessoa data={item} /> }
      showsVerticalScrollIndicator={false}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

})
