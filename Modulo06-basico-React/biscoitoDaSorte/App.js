import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

function App() {
  const [img, setImg] = useState(require('./src/biscoito.png'));
  const [textoFrase, settextoFrase] = useState('');

  let frases = [
    "A vida trará coisas boas se tiveres paciência.",
    "Seu sorriso pode mudar o dia de alguém.",
    "O sucesso nasce do querer, da determinação e persistência.",
    "Lute pelo que você ama, aceite o que você recebe.",
    "Sua sorte está no seu esforço.",
    "Acredite em milagres, mas não dependa deles.",
    "A sorte favorece a mente bem preparada.",
    "Seja a mudança que você deseja ver no mundo.",
    "A jornada de mil quilômetros começa com um único passo.",
    "O segredo da vida é saber como cair e se levantar.",
    "A verdadeira sabedoria está em reconhecer a própria ignorância.",
    "Acredite em si mesmo e tudo será possível.",
    "Quando você sentir que não pode, respire fundo e diga a si mesmo que você pode.",
    "Nada é impossível para quem acredita.",
    "O fracasso é apenas a oportunidade de recomeçar de novo, com mais inteligência.",
    "Siga seus sonhos, pois eles conhecem o caminho.",
    "A sorte não existe. Aquilo a que chamas sorte é o cuidado com os detalhes.",
    "A vida é feita de escolhas, então faça escolhas que te façam feliz.",
    "O tempo deixa perguntas, mostra respostas, esclarece dúvidas, mas, acima de tudo, o tempo traz verdades.",
    "Cada novo dia é uma nova oportunidade para melhorar.",
    "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
    "A vida é como andar de bicicleta. Para ter equilíbrio, você tem que se manter em movimento.",
    "Grandes mentes discutem ideias; mentes médias discutem eventos; mentes pequenas discutem pessoas.",
    "A verdadeira medida de um homem não é como ele se comporta em momentos de conforto e conveniência, mas como ele se mantém em tempos de desafio e controvérsia.",
    "A felicidade não é algo pronto. Ela é feita pelas suas próprias ações.",
    "A persistência realiza o impossível.",
    "O caminho para o sucesso é fazer o que você ama.",
    "Se você quer fazer algo que nunca fez, precisa estar disposto a fazer algo que nunca fez.",
    "Não espere por circunstâncias ideais. Elas podem nunca chegar. Comece de onde você está, com o que você tem, e faça o melhor possível.",
    "O segredo para chegar longe é começar.",
    "O que você faria se soubesse que não pode falhar?",
    "Nada é tão contagioso quanto o entusiasmo.",
    "O otimismo é a fé em ação.",
    "A sorte favorece a mente preparada.",
    "Nunca é tarde demais para ser o que você poderia ter sido.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "As coisas boas acontecem para aqueles que esperam, mas as melhores coisas acontecem para aqueles que agem.",
    "Acredite em você mesmo e tudo será possível.",
    "A sorte não está no que acontece, mas em como lidamos com o que acontece.",
    "A verdadeira sorte consiste em ter alguém para amar, algo para fazer e algo para esperar.",
    "O universo conspira a favor de quem não conspira contra os outros.",
    "A mudança é a lei da vida, e aqueles que olham apenas para o passado ou para o presente estão destinados a perder o futuro.",
    "A alegria está na luta, na tentativa, no sofrimento envolvido, não na vitória propriamente dita.",
    "Quanto mais você suar no treinamento, menos você sangrará na batalha.",
    "O homem que move montanhas começa carregando pequenas pedras.",
    "O que você faz hoje pode melhorar todos os seus amanhãs.",
    "Não espere por oportunidades excepcionais. Agarre as com as duas mãos e faça algo incrível com elas.",
    "A única maneira de fazer um excelente trabalho é amar o que você faz.",
    "A jornada é a recompensa.",
    "A sorte favorece a mente preparada.",
    "Não basta conquistar, é preciso saber seduzir.",
    "O segredo do sucesso é a constância do propósito.",
    "Nada é mais caro do que um pensamento perdido.",
    "O importante não é vencer todos os dias, mas lutar sempre.",
    "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
    "A sorte é o que acontece quando a preparação encontra a oportunidade.",
    "A persistência realiza o impossível.",
    "Se você acredita, faz toda a diferença.",
    "O primeiro passo para o sucesso é acreditar que podemos.",
    "O segredo para chegar longe é começar.",
  ]

  function quebraBiscoito() {
    let numAleatorio = Math.floor(Math.random() * frases.length);
    settextoFrase('"' + frases[numAleatorio]+'"');
    setImg(require('./src/biscoitoAberto.png'));

  }
  function reiniciarBiscoito() {
    settextoFrase("");
    setImg(require('./src/biscoito.png'))
  }


  return (
    <View style={styles.container}>

      <Image
      source={img}
      style={styles.img}
      />

      <Text style={styles.frases}>{textoFrase}</Text>

      <TouchableOpacity onPress={ quebraBiscoito } style={styles.botao}>
        <View style={styles.btnArea}>
          <Text style={styles.btnText}>
            Quebrar biscoito
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={ reiniciarBiscoito } style={[styles.botao,{borderColor:'#121212',} ]}>
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