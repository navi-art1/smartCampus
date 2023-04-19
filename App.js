import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground,ScrollView } from 'react-native';

//import Login from "../smart-campus/src/Background/PNG/Login.png";
import Inicio from "../smart-campus/src/Background/PNG/Inicio.png";


const statusBarHeight = Platform.OS === 'ios' ? 40 : StatusBar.currentHeight;

export default function App() {

  
  const imagen = Inicio;


  return (
    <View style={styles.container}>

      <ImageBackground source={imagen} resizeMode={'cover'} style={styles.image}>

      
          <StatusBar backgroundColor="red" />
      
        <View style={{flex: 0.1 , justifyContent:'space-between', borderWidth:1}} >

        </View>
        <Text style={styles.titulo}>Calidad de Aire</Text>

        <View style={{flex: 0.35 , justifyContent:'space-between', borderWidth:1}} >
          <Text style={{fontSize:24, fontWeight:"bold",  color: "#0942AD", paddingLeft: 30}}>Exterior</Text>
          <View style={{flex:1, borderWidth:1,alignItems:'center',gap:20, padding:20, justifyContent:'center'}}>
            <View style={{backgroundColor:'white', width:'50%', alignItems:'center', borderTopLeftRadius: 20, borderBottomRightRadius:20}}>
              <Text style={{padding:10,fontSize:20, color: "#0942AD"}}>Puerta 3</Text>
            </View>

            <View style={{backgroundColor:'white', width:'50%', alignItems:'center', borderTopLeftRadius: 20, borderBottomRightRadius:20}}>
              <Text style={{padding:10,fontSize:20, color: "#0942AD"}}>Puerta 5</Text>
            </View>

            <View style={{backgroundColor:'white', width:'50%', alignItems:'center', borderTopLeftRadius: 20, borderBottomRightRadius:20}}>
              <Text style={{padding:10,fontSize:20, color: "#0942AD"}}>CTIC</Text>
            </View>

          </View>
        </View>

        <View style={{flex: 0.55 , borderWidth:1}} >
          <Text style={{fontSize:24, fontWeight:"bold",  color: "#0942AD", paddingLeft: 30}}>Interior</Text>
          <View style={{backgroundColor:'white', width:'50%', alignItems:'center', borderTopLeftRadius: 20, borderBottomRightRadius:20, alignSelf:'center'}}>
              <Text style={{padding:10,fontSize:20, color: "#0942AD"}}>Buscar...</Text>
          </View>
          
          <ScrollView>
            <View style={{ flex:1, paddingLeft: 30, borderWidth:1, gap:20}}>
              <Text style={{fontSize:24, fontWeight:"bold",  color: "#0942AD", paddingLeft: 30}}> {'> CTIC'} </Text>

              <View style={{backgroundColor:'white', width:'50%', alignItems:'center', borderTopLeftRadius: 20, borderBottomRightRadius:20, alignSelf:'center'}}>
                <Text style={{padding:10,fontSize:20, color: "#0942AD"}}>Smart City</Text>
              </View>

              <View style={{backgroundColor:'white', width:'50%', alignItems:'center', borderTopLeftRadius: 20, borderBottomRightRadius:20, alignSelf:'center'}}>
                <Text style={{padding:10,fontSize:20, color: "#0942AD"}}>Administración</Text>
              </View>

              <View style={{backgroundColor:'white', width:'50%', alignItems:'center', borderTopLeftRadius: 20, borderBottomRightRadius:20, alignSelf:'center'}}>
                  <Text style={{padding:10,fontSize:20, color: "#0942AD"}}>Dirección</Text>
              </View>


            </View>

            <View style={{ paddingLeft: 30, borderWidth:1, gap:20}}>
              <Text style={{fontSize:24, fontWeight:"bold",  color: "#0942AD", paddingLeft: 30}}> {'> Comedor'} </Text>

              <View style={{backgroundColor:'white', width:'50%', alignItems:'center', borderTopLeftRadius: 20, borderBottomRightRadius:20, alignSelf:'center'}}>
                <Text style={{padding:10,fontSize:20, color: "#0942AD"}}> Comedor </Text>
              </View>

              <View style={{backgroundColor:'white', width:'50%', alignItems:'center', borderTopLeftRadius: 20, borderBottomRightRadius:20, alignSelf:'center'}}>
                <Text style={{padding:10,fontSize:20, color: "#0942AD"}}> Comedor </Text>
              </View>

              <View style={{backgroundColor:'white', width:'50%', alignItems:'center', borderTopLeftRadius: 20, borderBottomRightRadius:20, alignSelf:'center'}}>
                <Text style={{padding:10,fontSize:20, color: "#0942AD"}}> Comedor </Text>
              </View>

              <View style={{backgroundColor:'white', width:'50%', alignItems:'center', borderTopLeftRadius: 20, borderBottomRightRadius:20, alignSelf:'center'}}>
                <Text style={{padding:10,fontSize:20, color: "#0942AD"}}> Comedor </Text>
              </View>

              <View style={{backgroundColor:'white', width:'50%', alignItems:'center', borderTopLeftRadius: 20, borderBottomRightRadius:20, alignSelf:'center'}}>
                <Text style={{padding:10,fontSize:20, color: "#0942AD"}}> Comedor </Text>
              </View>

              <View style={{backgroundColor:'white', width:'50%', alignItems:'center', borderTopLeftRadius: 20, borderBottomRightRadius:20, alignSelf:'center'}}>
                <Text style={{padding:10,fontSize:20, color: "#0942AD"}}> Comedor </Text>
              </View>

            </View>
          </ScrollView>

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
    //justifyContent: 'center',
  },
  image:{
    flex:1,
    marginTop: statusBarHeight 
  },
  titulo: {
    fontSize:50,
    color: "#0942AD",
    fontWeight: "bold",
    textAlign: 'center',

  },

});
