import React, { useState} from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';


function App() {
const [nome, setNome] = useState('Luiz');
const [idade, setIdade] = useState(16)

  function entrar(nome, idade) {
    setNome(nome)
    setIdade(idade)
  }

  return(
    <View style={styles.area}>
      <Button
      title="Mudar nome"
      onPress={ () => entrar('Roberto', 30) }
      />
      <Text style={[styles.titulo, styles.textAling]}>{nome}</Text>
      <Text style={styles.titulo}>{idade}</Text>
      <Text style={[styles.p, styles.textAling]}>Qualquer coisa 123</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  area: {
    marginTop: 36
  },
  titulo: {
    fontSize: 50,
    color:'#121250',
    padding: 5,
  },
  p: {
    fontSize: 25,
    marginTop: 25,
    color: '#550022'
  },
  textAling: {
    textAlign: 'center',
  }
})



export default App;