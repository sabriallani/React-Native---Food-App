import React, {Component} from 'react';
import {Platform, StyleSheet, Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image} from 'react-native';
import Headers from './common/headers';
import { Container } from 'native-base';
import Logo from "./common/Logo";
type Props = {};
export default class register extends Component<Props> {
  constructor(props) {
    super(props);
    state = {
      email   : '',
      password: '',
      mobile:''
    }
  }
  render() {
    return (
      <Container >
        <Headers/>
        
        <View style={styles.container}>
        <Logo/>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/phone-mobile/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="mobile number"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(mobile) => this.setState({mobile})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} 
        onPress={this.myfun}>
          <Text style={styles.loginText}>Sign Up</Text>
        </TouchableHighlight>


        <TouchableHighlight style={styles.buttonContainer} 
        onPress={() => this.props.navigation.navigate('Login')}>
            <Text>Login</Text>
        </TouchableHighlight>
      </View>
       
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
})