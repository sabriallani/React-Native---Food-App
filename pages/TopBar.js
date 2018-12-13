import React, {Component} from "react";
import {View, Text,StyleSheet} from "react-native";
import {Icon,Button} from "native-base";
import {withNavigation} from "react-navigation";
class TopBar extends Component{
    render(){
        return(
            <View style={styles.bar}>
            <Button transparent  iconRight
            onPress={() => this.props.navigation.navigate('Register')}>
            <Text>Hello, username</Text>
            </Button>

            <View style={{ flexDirection: 'row' }}>
            <Button transparent  iconRight
            onPress={() => this.props.navigation.navigate('Register')}>
                <Text>Your Account </Text>
                <Icon 
                name="arrow-forward" style={{ fontSize: 18 }} />
                </Button> 
            </View>
        </View>
        )
    }
}
const styles = StyleSheet.create({
    bar:{ height: 50, backgroundColor: 'white', flexDirection: 'row', paddingHorizontal: 5, alignItems: 'center', justifyContent: 'space-between' 
}
})
export default  withNavigation(TopBar)