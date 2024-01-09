import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

let timer = null;
let seg = 0;
let min = 0;
let hor = 0;

export default function App() {
  const [cronometro, setCronometro] = useState(0);
  const [botao, setBotao] = useState('Iniciar');
  const [ultimo, setUltimo] = useState(null);

  function iniciar() {
    if(timer !== null){
      clearInterval(timer);
      timer = null;
      setBotao('Iniciar')
    } else {
      timer = setInterval(()=>{
        seg++;

        if(seg == 60) {
          seg = 0;
          min++;
        }

        if(min == 60) {
          min = 0;
          hor++;
        }

        let format = 
        (hor < 10 ? '0' + hor : hor) + ':'
        + (min < 10 ? '0' + min : min) + ':'
        + (seg < 10 ? '0' + seg : seg);

        setCronometro(format);

      }, 1000);
      setBotao('Parar');
    }



  };

  function limpar() {
    if(timer !== null){
      clearInterval(timer);
      timer = null;


    }

    setUltimo(cronometro)

    setCronometro(0);
    seg = 0;
    min = 0;
    hor = 0;

    setBotao('Iniciar');
  };

  return (
    <View style={styles.container}>
      
      <Image
      source={require('./src/crono.png')}
      />

      <Text style={styles.timer}>{cronometro}</Text>

      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn} onPress={iniciar}>
          <Text style={styles.btnText}>{botao}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={limpar}>
          <Text style={styles.btnText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.areaUltima}>
        <Text style={styles.textCorrida}>
          { ultimo ? 'Último tempo: ' + ultimo : ""}
          </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef'
  },

  timer: {
    fontSize: 40,
    color: '#FFFFFF',
    marginTop: -160,
    fontWeight: 'bold',


  },

  btnArea: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 130,
    height: 40,
  },

  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: 40,
    margin: 17,
    borderRadius: 5,
  },

  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#00aeef',
  },

  areaUltima:{
    marginTop: 40,

  },

  textCorrida:{
    fontSize:25,
    color: '#FFFFFF',
    fontStyle:'italic',
  }
});
