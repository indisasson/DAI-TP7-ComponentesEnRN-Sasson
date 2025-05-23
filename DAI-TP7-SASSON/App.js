import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView } from 'react-native';
import Card from './components/Card';


const imgaFondo =  require('./assets/fotoFondo.jpg');

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
        <ImageBackground source={imgaFondo} resizeMode='cover' style={styles.ImagenFondo}> 
        <View style={styles.container}>
          <Card/>
        </View>  
      </ImageBackground>
    </SafeAreaView>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImagenFondo:{
    flex:1,
    justifyContent: 'center',
  },
 
});
