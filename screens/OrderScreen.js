import React, { Component } from 'react'
import { TouchableOpacity, Image, View, ImageBackground, Text, Dimensions } from 'react-native'
import {Container, Content, ActionSheet, Card, CardItem, Left, Right, Icon, Body, Title, Header, Textarea, Button, ListItem, Radio} from 'native-base'

import { MonoText } from '../components/StyledText';

const { width, height } = Dimensions.get('window');

export default class OrderScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radio1: true,
      radio2: false,
    };
  }
  toggleRadio1() {
    this.setState({
      radio1: true,
      radio2: false
    });
  }
  toggleRadio2() {
    this.setState({
      radio1: false,
      radio2: true
    });
  }

state={
  toggle:false
};
  static navigationOptions = {
    header: null
  }

_onPress(navigate){
  const newState = !this.state.toggle;
  this.setState({toggle:newState})
  
}
  render(){
    const {toggle} = this.state;
    const textValue = toggle?"CANCEL":"ORDER";
    const bttnBG = toggle?"white":"dodgerblue";
    const textC = toggle?"dodgerblue":"white";
    const { goBack } = this.props.navigation;
    const { params } = this.props.navigation.state;
    const {navigate} = this.props.navigation;
    return (
      <Container>
        <Header>
          <Left>
            <TouchableOpacity  activeOpacity={0.9}> 
              <Button onPress={() => goBack()} transparent>
              <Icon name="ios-arrow-back" style={{ color: 'white'}} />
              </Button>
            </TouchableOpacity>
          </Left>
          <Body>
            <Title>{params.data.name}</Title>
          </Body>
        </Header>
        <Content>
          <ImageBackground
          style={{
            height:200,
            backgroundColor: 'black',
            flex: 1,
            marginBottom: 2
          }}
          source = {{uri: params.data.vendors[0].image}}
          >
            <View
            style={{
              height:200,
              backgroundColor: 'black',
              opacity: 0.5,
              flex: 1,
              // flexDirection: 'column',
              // justifyContent: 'space-between',
            }}
            >
            <Text
            style={{color: 'white', backgroundColor: 'transparent', fontSize: 30, padding:10}}>
              {params.data.vendors[0].name}
            </Text>
            <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: height*0.17}}>
              <View>
                <Text
                style={{color: 'white', fontSize: 15, fontWeight: 'bold', padding:10, zIndex: 1}}>
                  {params.data.name}
                  
                </Text>
              </View>
              <View>
                <Text style ={{textAlign: 'right', padding:10}}><Icon active ios='ios-call' android="md-call" style={{fontSize: 25, fontWeight: 'bold', color: 'red', padding:10}} /></Text>
              </View>
            </View>
            
            </View>
          </ImageBackground>
          <View style={{ paddingHorizontal: 5}}>
            <Card>
              <CardItem cardBody>
              <View style={{
                  flex: 1,
                
                }}>
                <ImageBackground
                  style={{
                  height:100,
                  width: null,
                  flex: 1,
                }}
                source = {{uri: params.data.image}}
                >
                <View
                  style={{
                    height:200,
                    backgroundColor: 'black',
                    opacity: 0.8,
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                  >
                  <Text style={{fontSize:50, fontWeight: 'bold', color: 'grey', textAlign:'center'}}>GHS {params.data.price}</Text>
                </View>
                </ImageBackground>
              </View>
              </CardItem>
            </Card>
            <View padder>
            <Textarea rowSpan={5} bordered placeholder="Textarea" />
            </View>
            <ListItem
            selected={this.state.radio1}
            onPress={() => this.toggleRadio1()}
          >
            <Left>
              <Text>PICKUP</Text>
            </Left>
            <Right>
              <Radio
                selected={this.state.radio1}
                onPress={() => this.toggleRadio1()}
              />
            </Right>
          </ListItem>
          <ListItem
            selected={this.state.radio2}
            onPress={() => this.toggleRadio2()}
          >
            <Left>
              <Text>DELIVERY</Text>
            </Left>
            <Right>
              <Radio
                selected={this.state.radio2}
                onPress={() => this.toggleRadio2()}
              />
            </Right>
          </ListItem>

            <View style= {{height: 50}}/>
            <View style = {{flexDirection: 'row'}}>
              <TouchableOpacity onPress = {() => this.props.navigation.navigate("Payment", {data: params.data})}
               style = {{margin: 10, flex: 1, height: 30, backgroundColor: bttnBG}}>
                <Text style = {{color: textC, fontSize: 16, textAlign: 'center'}}>{textValue}</Text>
              </TouchableOpacity>
            </View>

            {/* </View>
            <Button onPress={() => this.props.navigation.navigate("Payment", {data: params.data})} full warning>
            <Text>ORDER</Text>
            </Button> */}
              {/* <Button onPress={() => ActionSheet.show(
                  {
                    options: BUTTONS,
                    cancelButtonIndex: CANCEL_INDEX,
                    destructiveButtonIndex: DESTRUCTIVE_INDEX,
                    title: "Testing ActionSheet"
                  },
                  (buttonIndex) => {
                    this.setState({ clicked: BUTTON });
                  }
                )}
              >
            <Text>Actionshit</Text>
          </Button> */}
          </View>
        </Content>
      </Container>
    )
  }
}