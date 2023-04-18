import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

//import Login from "../smart-campus/src/Background/PNG/Login.png";
import Inicio from "../smart-campus/src/Background/PNG/Inicio.png";


export default function App() {

  
  const imagen = Inicio;


  return (
    <View style={styles.container}>

      <ImageBackground source={imagen} resizeMode={'cover'} style={styles.image}>
        <Text style={styles.titulo}>Smart Campus</Text>



      </ImageBackground>


      


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  image:{
    flex:1,
    justifyContent:'center',
  },
  titulo: {
    fontSize:50,
    color: "#0942AD",
    fontWeight: "bold",
    textAlign: 'center',
    marginBottom: 300,
  },

});
