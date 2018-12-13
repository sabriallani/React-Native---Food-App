import React, {Component} from "react";
import Swiper from "react-native-swiper";
import {ImageBackground,Text,View,StyleSheet} from "react-native";
export default class Slider extends Component{

render(){
    return(

      <Swiper showsButtons={true} autoplay={true}
      style={{width:'100%', height:150}}>


<ImageBackground
        style={styles.bgimg}
        source={require('../p.jpeg')}>
      <View  style={{backgroundColor: 'rgba(0,0,0,0.4)', flex: 1}} >
        <Text style={styles.catText}>
         PIzza One
        </Text>
        </View>
      </ImageBackground>


<ImageBackground style={styles.bgimg} source={require('../p.jpeg')}>
      <View style={{backgroundColor: 'rgba(0,0,0,0.4)', flex: 1}} >
        <Text style={styles.catText}>
         Pizza 2
        </Text>
        </View>
      </ImageBackground>


      </Swiper>
    )
}

}
const styles = StyleSheet.create({
 bgimg:{
  backgroundColor: '#ccc',
  width: null,
  height: null,
  justifyContent: 'center',
  flex:1,
  resizeMode: 'cover'
 },
 catText:{
    textAlign: 'center',
    fontSize: 30,
    padding: 40,
    color:'#fff'
 }
});