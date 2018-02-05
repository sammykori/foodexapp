import React, { Component } from 'react'
import { Image, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Input, View, Item, Left, Body, Right } from 'native-base';
import CategoryScreen from './CategoryScreen'

export default class SearchScreen extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container style={styles.wrapper}>
        <Content>
          <CategoryScreen></CategoryScreen>
        <View style={{ paddingHorizontal: 5}}>

        <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>Beef Jollof</Text>
                  <Text note><Icon active ios='ios-pizza' android="md-pizza" style={{fontSize: 15, color: 'red'}} /> Coffee Lounge</Text>
                </Body>
              </Left>
              <Right>
                <Button transparent>
                  <Icon active ios='ios-heart-outline' android="md-heart-outline" style={{fontSize: 40, color: 'pink'}} />
                </Button>
              </Right>
            </CardItem>
            <CardItem cardBody>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Order')} style={{ flex:1, height: 200, width: null }}>
                <Image source={require('../assets/images/food.jpg')} style={{height: 200, width: null, flex: 1}}/>
              </TouchableOpacity>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>Beef Jollof</Text>
                  <Text note><Icon active ios='ios-pizza' android="md-pizza" style={{fontSize: 15, color: 'red'}} /> Coffee Lounge</Text>
                </Body>
              </Left>
              <Right>
                <Button transparent>
                  <Icon active ios='ios-heart-outline' android="md-heart-outline" style={{fontSize: 40, color: 'pink'}} />
                </Button>
              </Right>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../assets/images/food.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
          </Card>
        </View>
          
        </Content>
      </Container>
    )
  }
  constructor(props) {
    super(props) 
    console.log(props)
  }
}

const styles = {
  wrapper: {
  }
}
