import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground,Image } from 'react-native';


//import Login from "../smart-campus/src/Background/PNG/Login.png";
import funcionalidades from "../smart-campus/src/Background/PNG/Funcionalidades.png";

import icon from "../smart-campus/src/Background/PNG/Icono2.png";


import carta from "../smart-campus/src/Componentes/carta.svg";



export default function App() {

  
  const imagen = funcionalidades;

  const icono = icon;

  const icon1 = carta;

  return (
    <View style={styles.container}>

      <ImageBackground source={imagen} resizeMode={'cover'} style={styles.image} >
        
        <View style= {styles.firstContainer}>
          <View style= {styles.titleContainer}>
            <Text style={styles.titulo}>Funcionalidades</Text>
          </View>
          
        </View>
        
        <View style = {styles.secondContainer}>
          <View style = {styles.rowContainer}>

            <View style = {styles.iconImage}>
                <ImageBackground  source={icon} resizeMode={'cover'} style={styles.image}>
                  <View style= {styles.titleContainerIcon}>
                    <Text style={styles.tituloIcon}>Smart Parking</Text>
                  </View>
                </ImageBackground>
            </View>

            <View style = {styles.iconImage}>
                <ImageBackground  source={icon} resizeMode={'cover'} style={styles.image}>
                  <View style= {styles.titleContainerIcon}>
                    <Text style={styles.tituloIcon}>Calidad aire</Text>
                  </View>
                </ImageBackground>
            </View>



          </View>

          <View style = {styles.rowContainer}>
            <View style = {styles.iconImage}>
                <ImageBackground  source={icon} resizeMode={'cover'} style={styles.image}>
                  <View style= {styles.titleContainerIcon}>
                    <Text style={styles.tituloIcon}>Poste Auxilio</Text>
                  </View>
                </ImageBackground>
            </View>

            <View style = {styles.iconImage}>
                <ImageBackground  source={icon} resizeMode={'cover'} style={styles.image}>
                  <View style= {styles.titleContainerIcon}>
                    <Text style={styles.tituloIcon}>Vigonz</Text>
                  </View>
                </ImageBackground>
            </View>



          </View>


          <View style = {styles.rowContainer}>
            <View style = {styles.iconImage}>
                <ImageBackground  source={icon} resizeMode={'cover'} style={styles.image}>
                  <View style= {styles.titleContainerIcon}>
                    <Text style={styles.tituloIcon}>Desarrollo Software</Text>
                  </View>
                </ImageBackground>
            </View>

            <View style = {styles.iconImage}>
                <ImageBackground  source={icon} resizeMode={'cover'} style={styles.image}>
                  <View style= {styles.titleContainerIcon}>
                    <Text style={styles.tituloIcon}>Coche Bomba</Text>
                  </View>
                </ImageBackground>
            </View>



          </View>


        
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
   // justifyContent:'center',

  },
  titulo: {
    fontSize:25,
    color: "#0942AD",
    fontWeight: "bold",
    textAlign: 'left',
    padding:4
  },

  titleContainer:{
    backgroundColor:'#f2f9ff',
    width: 200,
    marginTop:40,
    marginLeft:30,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius:10,
    borderBottomLeftRadius:10,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderColor: "#3C5897"
  },
//////////////////////////////////////////////////
iconImage:{
  height:150,
  width:150,
  margin:20,
  borderWidth:2,
  borderColor: "white",
  elevation: 8, // elevación de la sombra
  shadowColor: 'blue', // color de la sombra
  
},




  titleContainerIcon:{
    backgroundColor:'#f2f9ff',
    width: 80,
    marginTop:10,
    marginLeft:10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius:10,
    borderBottomLeftRadius:10,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderColor: "#3C5897"
  },

  tituloIcon:{
    fontSize:15,
    color: "black",
    color: "#0942AD",
    fontWeight: "bold",
    padding:2
  },


  ////////////////////////////////////////////
  firstContainer:{
    flex:2.45,

  },


  secondContainer:{
    flex:7.55,
    //alignItems: 'center', // Centra el contenido horizontalmente.
    justifyContent: 'center',// Centra el contenido verticalmente.
  },

  rowContainer:{
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',

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
