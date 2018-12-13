import React, { Component } from 'react';
import {NavigationActions} from 'react-navigation';
import { Text, View, StyleSheet, ImageBackground,SafeAreaView,ScrollView,Image,FlatList,Linking } from 'react-native'
import { Icon, Item } from 'native-base';


export default class Menu extends Component {
   
    state ={
        data:[],
        isLoading: true,
        refreshing: false
      }
   
    navigateToScreen = ( route ) =>(
        () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    })

  render() {
    return (
        <SafeAreaView style={{flex:1}} >
            <ScrollView>
                 <View style={styles.head}>
                   <Image source={require('../logo.png')}  
                   style={{width:120, height:120,flex:1}} /> 
                   
                </View>

                            
                            <Text style={styles.link} 
                             onPress={() => this.props.navigation.navigate('Home')}>
                            <Icon type="FontAwesome" name="home" style={styles.icon}/> Home
                            </Text>


                            <Text style={styles.link} 
                             onPress={() => this.props.navigation.navigate('Login')}>
                            <Icon type="FontAwesome" name="lock" style={styles.icon}/> Login
                            </Text>


                            
                
            </ScrollView>
</SafeAreaView>
    
    )
  }
}

const styles = StyleSheet.create({
    link:{
        // backgroundColor:'#efefef',
        padding:10,
        color:'#2E94F7',
        margin:10
    },
    head:{

        backgroundColor: '#2E94F7',
        height: 120,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon:{
        fontSize:17,
        color:'#2E94F7'
    }

});