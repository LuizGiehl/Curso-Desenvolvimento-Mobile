import React, { useState} from 'react';
import { View, Text, Button} from 'react-native';


function App() {
const [nome, setNome] = useState('Luiz');
const [idade, setIdade] = useState(16)

  function entrar(nome, idade) {
    setNome(nome)
    setIdade(idade)
  }

  return(
    <View style={{ marginTop: 35}}>
      <Button
      title="Mudar nome"
      onPress={ () => entrar('Roberto', 30) }
      />
      <Text style={{fontSize:25}}>{nome}</Text>
      <Text style={{fontSize:25}}>{idade}</Text>
    </View>
  );
}

export default App;