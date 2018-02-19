import React, { Component } from 'react'
import { TouchableOpacity, Image, View, ImageBackground, Text } from 'react-native'
import {Container, Content, ActionSheet, Card, CardItem, Left, Icon, Body, Title, Header, Button} from 'native-base'

import { MonoText } from '../components/StyledText';

export default class OrderScreen extends Component {

  static navigationOptions = {
    header: null
  }
  render() {
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
            <Title>{params.data.menu}</Title>
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
          source = {{uri: params.data.vimage}}
          >
            <View
            style={{
              height:200,
              backgroundColor: 'black',
              opacity: 0.5,
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
            >
            <Text
            style={{color: 'white', backgroundColor: 'transparent', fontSize: 30, padding:10}}>
              {params.data.location}
            </Text>
            <Text
            style={{color: 'white', fontSize: 15, fontWeight: 'bold', padding:10, zIndex: 1}}>
              {params.data.menu}
              <Text>                                                       </Text>
              <Icon active ios='ios-call' android="md-call" style={{fontSize: 25, fontWeight: 'bold', color: 'red', padding:10}} />
            </Text>
           
            
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
                  <Text style={{fontSize:50, fontWeight: 'bold', color: 'grey', textAlign:'center'}}>{params.data.price}</Text>
                </View>
                </ImageBackground>
              </View>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <Left style={{flex: 2}}>
                  <Body>
                    <Text>Description</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Text style={{padding:5, fontWeight: 'bold', fontStyle: 'italic'}}>{params.data.description}</Text>
              </CardItem>
            </Card>

            <View style= {{height: 50}}/>
              <Button onPress={() => this.props.navigation.navigate("Payment", {data: params.data})} full warning>
              <Text>ORDER</Text>
              </Button>
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