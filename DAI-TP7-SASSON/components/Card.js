import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const imga =  {uri: 'https://img.europapress.es/fotoweb/fotonoticia_20150331134913-15031252329_600.jpg'}

export default function Card() {
    return(
        <>
            <View style={style.contenedor}>
                <StatusBar style={'light'}/>
                <Image source={imga}  style={style.Image}/>
                <Text style={style.nombre}>Adrián Fernendez</Text>
                
            </View>
        </>
    )
};

const style = StyleSheet.create({
    contenedor: {
      flexDirection: 'column',
      backgroundColor: '#808080',
      textAlign: 'center',
      textAlignVertical: 'auto',
      padding:60,
      borderRadius: 70
    },
    Image: {
        width: 150,
        height: 150,
        borderRadius: 70,
        marginLeft: 28
      },
      nombre: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: 30
      }
  });