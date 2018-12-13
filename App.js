import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createDrawerNavigator} from 'react-navigation';
import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/Home';
type Props = {};
import Menu from './pages/Menu';
export default class App extends Component<Props> {
  render() {
    return (
      
     <Mypages/>
    );
  }
}

const Mypages = new createDrawerNavigator({
  Home:{screen:Home},
Login: { screen:Login},
Register: {screen:Register}
},
{
  contentComponent:Menu
});
