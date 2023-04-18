import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground,Image } from 'react-native';


//import Login from "../smart-campus/src/Background/PNG/Login.png";
import Login from "../smart-campus/src/Background/PNG/Login.png";

import carta from "../smart-campus/src/Componentes/carta.svg";



export default function App() {

  
  const imagen = Login;

  const icon1 = carta;

  return (
    <View style={styles.container}>

      <ImageBackground source={imagen} resizeMode={'cover'} style={styles.image} >
        
        <View style= {styles.firstContainer}>
          <Text style={styles.titulo}>Smart Campus</Text>

        </View>
        
        <View style = {styles.secondContainer}>
          <View style = {styles.Button}>
      
          <Text style={styles.parrafoButton1}>G</Text>
          <Text style={styles.parrafoButton}>INICIAR SESIÓN</Text>

          </View>

          <View style = {styles.Button}>
          <Text style={styles.parrafoButton1}>G</Text>
          <Text style={styles.parrafoButton}>ENTRAR CON GOOGLE</Text>

          </View>

          <View style = {styles.Button}>
          <Text style={styles.parrafoButton1}>F</Text>
          <Text style={styles.parrafoButton}>ENTRAR CON FACEBOOK</Text>
          </View>
          
          <Text style={styles.parrafo}>------------------------¿NO TIENES CUENTA?------------------------</Text>

          <View style = {styles.Button}>
          <Text style={styles.parrafoButton}>REGISTRARME</Text>
          </View>

          <Text style={styles.parrafo}>Al registrarse con google acepto los terminos, condiciones y politicas de privacidad.</Text>

        </View>

      </ImageBackground>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    flex:1,
    justifyContent:'center',

  },
  titulo: {
    fontSize:45,
    color: "#0942AD",
    fontWeight: "bold",
    textAlign: 'center',
    paddingTop: 60
    //marginBottom: 10,
  },
  firstContainer:{
    flex:4,
    borderWidth:2,
  },


  secondContainer:{
    flex:6,
    borderWidth:2,
    alignItems: 'center', // Centra el contenido horizontalmente.
    justifyContent: 'center',
     // Centra el contenido verticalmente.


  },



  Button:{
    width:'70%',
    height: 50,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginVertical: 8,
    justifyContent: 'center',
    flexDirection: 'row',
    paddingLeft:30,
    paddingRight:30,
    


  },

  parrafo:{
    fontSize:12,
    color: "white",
    textAlign: 'center',
    paddingTop: 30,
    paddingBottom:30,
  },

  parrafoButton1:{

    fontSize:16,
    color: "#3C5897",
    textAlign: 'left',
    alignSelf:'center'
  },

  parrafoButton:{
    flex:1,
    fontSize:16,
    color: "#3C5897",
    textAlign: 'center',
    alignSelf:'center'
    
  },

  icon1:{
    width: 10,
    height: 10,
    tintColor: 'black'
  }





});
