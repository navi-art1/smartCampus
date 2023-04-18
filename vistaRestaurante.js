import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground,Image } from 'react-native';



import Login from "/Proyectos/Smart Campus/smart-campus/src/Background/PNG/Login.png";

import prueba from "/Proyectos/Smart Campus/smart-campus/src/Componentes/prueba.png";

import carro from "/Proyectos/Smart Campus/smart-campus/src/Componentes/carro1.png";


import humano from "/Proyectos/Smart Campus/smart-campus/src/Componentes/humano.png";


import restaurante2 from "/Proyectos/Smart Campus/smart-campus/src/Componentes/restaurante2.png";

import cubiertos from "/Proyectos/Smart Campus/smart-campus/src/Componentes/cubiertos.png";

export default function App() {

  const imagen = restaurante2;



  return (
    <View style={styles.container}>

    <View style= {styles.firstContainer}>

    <ImageBackground source={imagen} resizeMode={'stretch'} style={styles.image1} >

      <View style= {styles.titleContainerIcon}>
        <Text style={styles.title}>Facultad de Ciencias</Text>
      </View>
      

    </ImageBackground>

    

    </View>

    <View style= {styles.secondContainer}>


      <View style = {styles.rowContainer}>

          
        <View style = {styles.iconContainer}>
          <Image style={styles.image} source={cubiertos}/>
          <Text style={styles.textIcon}> Ciencias </Text>
        </View>

        <View style = {styles.textContainer}>
          <Text style={styles.textIconInfo} >Comedor ubicado en el frontis de la Facultad de ciencias </Text>
        </View>

      </View>


      <View style = {styles.rowContainer}>

          
          <View style = {styles.iconContainer}>
            <Image style={styles.image} source={humano}/>
            <Text style={styles.textIcon}> Distancia </Text>
          </View>

          <View style = {styles.textContainer}>
            <Text style={styles.textIconInfo} >Distancia entre la posición actual y el restaurante es de 5 minutos </Text>
          </View>

      </View>

      <View style = {styles.rowContainer}> 
          
          <View style = {styles.iconContainer}>
            <Image style={styles.image} source={prueba}/>
            <Text style={styles.textIcon}> Horario </Text>
          </View>

          <View style = {styles.textContainer}>
            <Text style={styles.textIconInfo} > L-S de 7:00 - 20:00 </Text>
          </View>

      </View>

      <Text style={styles.textSubtitle}> ¿Qué deseas hacer? </Text>

      <View style = {styles.Button}>
        <Text style={styles.parrafoButton}>Ver Menú</Text>

      </View>

      <View style = {styles.Button}>
        <Text style={styles.parrafoButton}>Pedir por Delivery</Text>
      </View>

      <View style={styles.line2} />


    </View>

    <View style= {styles.thirdContainer}>

    </View>


    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#396fc5'
  },
  image: {
    height: 30,
    width: 30,
    resizeMode: "contain",
  },

  /////////////////////////////////////////////
  firstContainer:{
    flex:3,

  },

  title:{
    color:"#0942ad",
    fontWeight:"bold",
    fontSize:20,
  },

  
  titleContainerIcon:{
    backgroundColor:'#f2f9ff',
    width: 200,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius:10,
    borderBottomLeftRadius:10,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderColor: "#3C5897",
    marginLeft:30,
    marginTop:180,
    marginBottom:10
  },

  titleContainerIcon2:{
    backgroundColor:'#f2f9ff',
    width:200,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius:10,
    borderBottomLeftRadius:10,
    borderWidth:1,
    borderColor: "#3C5897",
    marginLeft:30,
    marginTop:5,

    
  },

  firstText:{
    color:"#0942ad",
    paddingLeft:10,
    fontSize:16,
    fontWeight: 'bold',
    
  },




  secondText:{
    color:"#0942ad",
    paddingLeft:10,
    fontSize:16,

  },
  line: {
    width: '85%',
    height: 2,
    backgroundColor: 'white',
    marginVertical: 15, // margen vertical para posicionar la línea en el centro
    alignSelf:'center'
  },

  image1:{
    flex:1,
    justifyContent:'center',

  },





  /////////////////////////////////////////////

  secondContainer:{
    flex:7,
    paddingTop:20

     // Centra el contenido verticalmente.
  },

  rowContainer:{
    flexDirection:'row',
    paddingLeft:30,
    paddingBottom:30
  },

  image: {
    height: 40,
    width: 40,
    resizeMode: "contain",
    alignSelf:'center'
  },

  textIcon:{
    color:'white'
  },

  iconContainer:{
    width:70,
    alignItems:'center'
  
  },

  textContainer:{
    justifyContent:'center',

    width:280,

    marginLeft:20

  },

  textIconInfo:{
    color:'white',
    paddingLeft: 10
    
  },

  textSubtitle:{
    fontSize:30,
    color: "white",
    paddingTop: 10,
    paddingLeft:30,
    paddingBottom:30
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
    alignSelf:'center'
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


  line2: {
    width: '85%',
    height: 2,
    backgroundColor: 'white',
    marginVertical: 40, // margen vertical para posicionar la línea en el centro
    alignSelf:'center'
  },

  /////////////////////////////////////////////
  
  thirdContainer:{
    flex:1,
  },

  /////////////////////////////////////////////
});
