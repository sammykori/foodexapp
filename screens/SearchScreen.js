import React, { Component } from 'react'
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Input, View, Item, Left, Body, Right } from 'native-base';

export default class SearchScreen extends Component {
  render() {
    return (
      <Container style={styles.wrapper}>
        <Content>
        <Item
        style = {{height:50, backgroundColor: '#f7eff5'}}
        searchBar
        rounded
        >
          <Item>
            <Icon name="ios-search"/>
            <Input
              placeholder = "What are you craving?"
              onChangeText = {this.props.onChangeText}
              returnKeyType = 'search'
              onSubmitEditing ={this.props.menuSearch}
            />
          </Item>
        </Item> 
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
        </Content>
      </Container>
    )
  }
}

const styles = {
  wrapper: {
    backgroundColor: '#ffffff'
  }
}
