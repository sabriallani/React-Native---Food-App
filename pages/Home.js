import React, {Component} from 'react';
import {Platform, StatusBar,StyleSheet,Image, ImageBackground, Text, View,TouchableOpacity,TextInput} from 'react-native';
import { Container, Left, Right,Header,Content,Icon, Card, CardItem, Thumbnail, Item,Input, Body, Title, Grid, Col,Button } from 'native-base';
import Headers from './common/headers';
import {withNavigation} from 'react-navigation';
import Swiper from 'react-native-swiper';
import Categories from './Categories';
import Slider from "./Slider";
import BestList from "./BestList";
import TopBar from "./TopBar";
 class Home extends Component<Props> {
  render() {
    return (
      
      <Container >
     <Headers/>
      <TopBar/>
             
     <Content>
         <Slider/>
         <Categories/>
         
        <BestList
        name="Chicken Biryani"
        place="chandigarh restaurant"
        price="200"
        qty="head"
        time="10am to 4pm"
        discount="10"
        disDay="friday"
        img={require("../ch.jpeg")}
        />


         <BestList
        name="Kadai Paneer"
        place="Hawai Adda"
        price="250"
        qty="head"
        time="2pm to 5pm"
        discount="10"
        disDay="Monday"
        img={require("../pan.jpg")}
        />

         <BestList
        name="Chicken Biryani"
        place="chandigarh restaurant"
        price="200"
        qty="head"
        time="10am to 4pm"
        discount="12"
        disDay="friday"
        img={require("../ch.jpeg")}
        />

           <BestList
        name="Kadai Paneer"
        place="Hawai Adda"
        price="140"
        qty="head"
        time="2pm to 4pm"
        discount="5"
        disDay="Sunday"
        img={require("../pan.jpg")}
        />
    </Content>

     
    
      </Container>
    );
  }
}


export default withNavigation(Home);