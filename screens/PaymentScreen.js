import React, { Component } from 'react'
import { TouchableOpacity, ScrollView, Alert, Image, View, ImageBackground, Text } from 'react-native'
import {Container, Thumbnail, Content,  Card, CardItem, Left, Icon, Body, Title, Right, Header, Button} from 'native-base'

import { MonoText } from '../components/StyledText';

export default class PaymentScreen extends Component {
  static navigationOptions = {
    header: null
  }
  onPressEvent() {
    Alert.alert(
      params.data.menu,
      params.data.price,
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'Buy', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }
  
  render(){
    const { goBack } = this.props.navigation;
    const { params } = this.props.navigation.state;
    return (
      <Container>
        <Header style = {{backgroundColor: "black"}}>
          <Left>
            <TouchableOpacity  activeOpacity={0.9}> 
              <Button onPress={() => goBack()} transparent>
              <Icon name="ios-arrow-back" style={{ color: 'white'}} />
              </Button>
            </TouchableOpacity>
          </Left>
          <Body>
            <Title>{params.data.menu}</Title>
          </Body>
        </Header>
        <Content>
            <Card>
              <CardItem>
                <Text>{params.data.menu}</Text>
                <Right>
                  <Text style ={{color: "blue"}}>{params.data.price}</Text>
                </Right>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <Text>{params.data.location}</Text>
              </CardItem>
            </Card>
            <Text style = {{color: "red", fontSize: 20, textAlign:"center", padding: 5}}> How would you like to pay for your food?</Text>
          <View style={{flex: 1, height: 160, flex: 1, flexDirection: 'row', justifyContent: 'space-between'}} >
            <ScrollView horizontal contentContainerStyle={styles.wrapper}>
              <TouchableOpacity onPress = {this.onPressEvent} style={styles.categoryStyle} activeOpacity={0.7}>
                <View style={[styles.categoryImg, {backgroundColor: "white"}]}>
                <ImageBackground
            style={{
            flex: 1}}
             source={{uri: 'http://www.biztechafrica.com/media/images/stories/mtncrazymoney_1.jpg'}} >
             </ImageBackground>
                </View>
                <Text style={{marginTop: 5}}>MTN Mobile</Text><Text>Mobile</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress = {this.onPressEvent} style={styles.categoryStyle} activeOpacity={0.7}>
                <View style={[styles.categoryImg, {backgroundColor: "white"}]}>
                <ImageBackground
                style={{
                flex: 1}}
                 source={{uri: 'http://www.makolapapa.com/wp-content/uploads/2017/11/airtelmoney-1.png'}} >
                 </ImageBackground>
                 </View>
                <Text style={{marginTop: 5}}>Airtel</Text><Text>Money</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress = {this.onPressEvent} style={styles.categoryStyle} activeOpacity={0.7}>
                <View style={[styles.categoryImg, {backgroundColor: "white"}]}>
                <ImageBackground
                style={{
                flex: 1}}
                 source={{uri: 'https://kuulpeeps.com/wp-content/uploads/2017/10/CkChrJtXAAA6QHT-1024x1024.jpg'}} >
                 </ImageBackground>
                 </View>
                <Text style={{marginTop: 5}}>Vodafone</Text><Text>Cash</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
          <View style={{flex: 1, height: 160}}>
            <ScrollView horizontal contentContainerStyle={styles.wrapper}>
              <TouchableOpacity onPress = {this.onPressEvent} style={styles.categoryStyle} activeOpacity={0.7}>
                <View style={[styles.categoryImg, {backgroundColor: "white"}]}>
                <ImageBackground
                style={{
                flex: 1}}
                 source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Visa.svg/200px-Visa.svg.png'}} >
                 </ImageBackground>                
                 </View>
                <Text style={{marginTop: 5}}>Visa Card</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress = {this.onPressEvent} style={styles.categoryStyle} activeOpacity={0.7}>
                <View style={[styles.categoryImg, {backgroundColor: "white"}]}>
                <ImageBackground
                style={{
                flex: 1}}
                 source={{uri: 'https://pbs.twimg.com/profile_images/444023291477753856/G4ZoBF4Y_400x400.jpeg'}} >
                 </ImageBackground>                
                 </View>
                <Text style={{marginTop: 5}}>ExpressPay</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress = {this.onPressEvent} style={styles.categoryStyle} activeOpacity={0.7}>
                <View style={[styles.categoryImg, {backgroundColor: "white"}]}>
                <ImageBackground
                style={{
                flex: 1}}
                 source={{uri: 'http://ghanahometrade.com/wp-content/uploads/2015/09/slydepay-logo-payment.png'}} >
                 </ImageBackground>                
                 </View>
                <Text style={{marginTop: 5}}>SlydePay</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </Content>
      </Container>
    )
  }
}

const styles = {
  wrapper: {

  },
  categoryImg: {
    width: 100,
    height: 100,
    borderRadius: 35
  },
  categoryStyle: {
    margin: 10,
    alignItems: 'center',
  }
}