
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, } from 'react-native';



const PlaceholderImage = require('./assets/img/senai.png');

export default function App() {
  return (
    <View style={styles.container}>
      {<Image source = {PlaceholderImage} style={styles.image} /> }
      <Text style={{ color: '#fff'}}></Text>
      <Text>Bruno Rodrigues</Text>
      <Text>Sumaré, 08/02/2024</Text>
      <Text>Técnico em Desenvolvimento de Sistemas</Text>
      <Text>INDMO - Interface para Dispositivos Móveis</Text>
      <Text>Mais informações</Text>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
 },
imageContainer: {
     flex: 1,
    paddingTop: 10,
  },
  image: {
    width: 345,
    height: 90,
    borderRadius: 10,

  },


})