import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Pressable } from 'react-native';

const imga =  {uri: 'https://img.europapress.es/fotoweb/fotonoticia_20150331134913-15031252329_600.jpg'}


export default function Card() {
    const [colorBoton, setColorBoton] = useState("#BBD2EC") // pasar el use state a uno de los botones para que funcione la function del pressable

    return(
        <>
            <View style={style.contenedor}>
                <StatusBar style={'light'}/>
                <Image source={imga}  style={style.Image}/>
                <Text style={style.nombre}>Adrián Fernández</Text>
                <TouchableOpacity style={style.boton}><Text style={style.textoBoton}>Contactar</Text></TouchableOpacity>
                <TouchableOpacity style={style.boton2}><Text style={style.textoBoton2}>Ver Portfolio</Text></TouchableOpacity>
                <TextInput value="  Escribi algo" keyboardType='number-pad' style={style.Input}/>
                <Pressable onPressIn={CambiarFondoBoton()} style={style.boton3}><Text>Ver Perfil</Text></Pressable>
                
            </View>
        </>
    )
};

function CambiarFondoBoton(){
    setColorBoton ("red")
}

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
      },
      boton: {
        width: 80,
        height: "auto",
        backgroundColor: "#BBD2EC",
        textAlign: "center",
        padding: 3,
        borderRadius: 8,
        marginLeft: 70,
        marginTop: 10
      },
      textoBoton: {
        marginLeft: 5
      },
      boton2: {
        width: 100,
        height: "auto",
        backgroundColor: "#BBD2EC",
        textAlign: "center",
        padding: 3,
        borderRadius: 8,
        marginLeft: 60,
        marginTop: 10
      },
      textoBoton2: {
        marginLeft: 8
      },
      Input:{
        backgroundColor: "white",
        borderRadius: 10,
        marginTop: 10
      },
      boton3: {
        width: 110,
        height: "auto",
        backgroundColor: "#BBD2EC",
        textAlign: "center",
        padding: 3,
        borderRadius: 8,
        marginLeft: 60,
        marginTop: 10
      }
  });