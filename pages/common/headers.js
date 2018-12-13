import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';

import {withNavigation} from 'react-navigation';
import { Container, Left, Right,Header,Content,Icon, Body, Title } from 'native-base';
class Headers extends Component{

    render(){
        return(
            
            <Header style={{backgroundColor:'#2E94F7'}}>
            <Left> 
              <Icon style={{color:'#fff'}} name="menu"
                 onPress={() => this.props.navigation.toggleDrawer()}/>
           </Left>
           <Body> 
             <Title style={{color:'#fff'}}>App Name</Title>
           </Body>
                <Right>  
                  <Icon name="shopping-cart" 
                  onPress={() => this.props.navigation.navigate('Login')}
                  type="FontAwesome" style={{color:'#fff'}}/>
                   </Right>
                
                </Header>

                
        )
    }
}
export default withNavigation(Headers);