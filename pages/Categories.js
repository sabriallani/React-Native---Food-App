import React, {Component} from 'react';
import {Platform, StatusBar,StyleSheet,Image, ImageBackground, Text, View,TouchableOpacity,TextInput} from 'react-native';
import { Container, Left, Right,Header,Content,Icon, Card, CardItem, Thumbnail, Item,Input, Body, Title, Grid, Col,Button } from 'native-base';
import {withNavigation} from 'react-navigation';
class Categories extends Component{


render() {
    return(
        <Grid style={{backgroundColor:'#ccc'}}>
        <Col>
          <CardItem button transparent >
          <ImageBackground
          source={require('../p.jpeg')}
          resizeMode='cover'
          style={styles.bgimg} >
    <View style={{backgroundColor: 'rgba(0,0,0,0.4)', flex: 1}} >
          <Text style={styles.catText}>Fast Food</Text>
          </View>
          </ImageBackground>
          </CardItem>
          </Col>
       
        <Col>
         <CardItem button transparent >
          <ImageBackground
          source={require('../if.jpeg')}
          resizeMode='cover'
          style={styles.bgimg}>
  <View style={{backgroundColor: 'rgba(0,0,0,0.4)', flex: 1}} >
          <Text style={styles.catText}>Indian Food </Text>
          </View>
          </ImageBackground>
          </CardItem>
          </Col>

        </Grid>

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
        resizeMode: 'cover',
       
},
catText:{

    textAlign: 'center',
    fontSize: 24,
    padding: 25,
    color:'#fff',
    // textShadowColor: '#000',
    // textShadowOffset: {width: -1, height: 1},
    // textShadowRadius: 10
}
    })
export default withNavigation(Categories);