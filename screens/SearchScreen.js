import React, { Component } from 'react'
import { Image, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Input, View, Item, Left, Body, Right } from 'native-base';
import CategoryScreen from './CategoryScreen'
import store from '../store'
import { observer } from 'mobx-react'

const SearchItem = (props) => {
  return(
    <Card>
    <CardItem>
      <Left style={{flex: 2}}>
        <Body>
          <Text>{props.data.menu}</Text>
          <Text note><Icon active ios='ios-pizza' android="md-pizza" style={{fontSize: 15, color: 'red'}} />{props.data.location} <Text note style={{color: 'red'}}>{props.data.price}</Text></Text>
        </Body>
      </Left>
      <Right>
        <TouchableOpacity onPress={() => store.addToFavorites(props.data)}>
          <Icon active ios='ios-heart-outline' android="md-heart-outline" style={{fontSize: 40, color: 'pink'}} />
        </TouchableOpacity>
      </Right>
    </CardItem>
    <CardItem cardBody>
      <TouchableOpacity onPress={() => props.navigation.navigate("Order", {data: props.data})} 
        style={{ flex:1, height: 200, width: null }}
        acitveOpacity={0.8}>
        <Image source={{uri: props.data.image}} style={{height: 200, width: null, flex: 1}}/>
      </TouchableOpacity>
    </CardItem>
  </Card>
  )
}

@observer
export default class SearchScreen extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container style={styles.wrapper}>
        <Content>
          <CategoryScreen></CategoryScreen>
        <View style={{ paddingHorizontal: 5}}>

          {
            this.menus.map((v,i) => (
              <SearchItem navigation={this.props.navigation} data={v} key={i}/>
            ))
          }

        </View>
          
        </Content>
      </Container>
    )
  }
  constructor(props) {
    super(props) 
    console.log(props)

    this.menus =[
      {
        id: 1,
        image: 'http://travel.home.sndimg.com/content/dam/images/travel/fullset/2014/07/20/32/food-paradise-102-ss-001.rend.hgtvcom.966.544.suffix/1491584380240.jpeg',
        menu: 'Rubbish Burger',
        location: 'Chix n Ribs',
        price: 'GHS 78'

      },
      {
        id: 2,
        image: 'http://travel.home.sndimg.com/content/dam/images/travel/fullset/2014/07/20/32/food-paradise-102-ss-001.rend.hgtvcom.966.544.suffix/1491584380240.jpeg',
        menu: 'Rubbish Burger',
        location: 'Koffee Lounge',
        price: 'GHS 91'

      }
    ]
  }
}

const styles = {
  wrapper: {
  }
}
