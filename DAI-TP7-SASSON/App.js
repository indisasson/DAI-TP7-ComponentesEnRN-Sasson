import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView } from 'react-native';
import Card from './components/Card';


const imgaFondo =  {uri: 'https://as1.ftcdn.net/jpg/03/56/11/44/1000_F_356114402_KnAV2au0F2RnBTlTweaEus3royONjGAt.jpg'}

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
        <ImageBackground source={imgaFondo} resizeMode='center' style={styles.ImagenFondo}> 
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
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImagenFondo:{
    flex:1,
    justifyContent: 'center',
  },
 
});
