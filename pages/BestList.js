import React, {Component} from "react";
import {View, Text} from "react-native";
import {Card, CardItem, Thumbnail,Item, Left, Right} from "native-base";
export default class BestList extends Component{

    render(){
        return(
            <View>
            <CardItem bordered body>
          
            
                <Left>
                 <Thumbnail square style={{borderRadius:5, width:50, height:50}} 
                 source={this.props.img} />
                    <View style={{ flexDirection:'column', marginLeft:5}}>
                    <Text style={{fontSize:14, fontWeight:'800'}}>{this.props.name}</Text>
                    <Text style={{fontSize:11}}>{this.props.place}</Text>
                    <Text style={{fontSize:11}}>{this.props.price} / {this.props.qty}</Text>
                    </View>
                </Left>

               <Right>
                <View style={{flexDirection:'column'}}>
                <Text  style={{textAlign:'right', fontSize:10}} > {this.props.time}</Text>
                <Text  style={{textAlign:'right', fontSize:10}}>{this.props.discount}
                % off on {this.props.disDay}</Text>
                </View>

              </Right>
            </CardItem>
            </View>
            
        )
    }
}