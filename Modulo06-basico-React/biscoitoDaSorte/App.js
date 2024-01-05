import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

function App() {
  const [img, setImg] = useState(require('./src/biscoito.png'))


  return (
    <View style={styles.container}>

      <Image
      source={img}
      style={styles.img}
      />

      <Text style={styles.frases}>"Alguma coisa, aaaaaaaaaa"</Text>

      <TouchableOpacity onPress={ () => alert('teste')} style={styles.botao}>
        <View style={styles.btnArea}>
          <Text style={styles.btnText}>
            Quebrar biscoito
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={ () => alert('teste')} style={[styles.botao,{borderColor:'#121212',} ]}>
        <View style={styles.btnArea}>
          <Text style={[styles.btnText, {color:'#121212'}]}>
            Reiniciar Biscoito
          </Text>
        </View>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  img:{
    width:230,
    height:230,

  },

  frases:{
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },

  botao:{
    width: 230,
    height:50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25,
    marginTop: 5,
  },
  btnArea:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText:{
    fontSize: 17,
    fontWeight: 'bold',
    color: '#dd7b22',
  }
})

export default App;