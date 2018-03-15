import React, { Component } from 'react'
import { Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Input, View, Item, Left, Body, Right } from 'native-base';
import CategoryScreen from './CategoryScreen'
import store from '../store'
import { observer } from 'mobx-react'
import { Devless } from "../utils/devless";

// componentDidMount() {
//   console.log(props)
// }
const SearchItem = (props) => {
  return(
    <Card>
    
    <CardItem cardBody>
      <TouchableOpacity onPress={() => props.navigation.navigate("Order", {data: props.data})} 
        style={{ flex:1, height: 200, width: null }}
        acitveOpacity={0.8}>
        <Image source={{uri: props.data.image}} style={{height: 200, width: null, flex: 1}}/>
      </TouchableOpacity>
    </CardItem>

    <CardItem>
      <Left style={{flex: 2}}>
        <Body>
          <Text>{props.data.name}</Text>
          <Text note style={{color: 'red'}}>GHS 
            {props.data.price}
            <Text>   </Text>
            {/* <Icon active ios='ios-pizza' android="md-pizza" style={{fontSize: 15, color: 'red'}} /> */}
            <Text note>
            {props.data.vendors[0].name} 
            </Text>
          </Text>
        </Body>
      </Left>
      <Right>
        <TouchableOpacity onPress={() => store.addToFavorites(props.data)}>
          <Icon active ios='ios-heart-outline' android="md-heart-outline" style={{fontSize: 40, color: 'pink'}} />
        </TouchableOpacity>
      </Right>
    </CardItem>
  </Card>
  )
}

@observer
export default class SearchScreen extends Component {
  state = {
    foods: []
  }

  componentWillMount () {
    this._fetchFoods()
  }

  async _fetchFoods () {
    const res = await Devless.queryData('Menu', 'food', {"related":"*"})
    console.log(res.payload[0][0].vendors[0].name)
    if (res.status_code == 625) {
      this.state.foods = res.payload[0]
      this.setState({
        foods: res.payload[0]

      })
      // console.log("foods", this.state.foods[0].related.categories[0].name);
    }
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container style={styles.wrapper}>
        <Content>
          <CategoryScreen></CategoryScreen>
        <View style={{ paddingHorizontal: 5}}>
          {
            (this.state.foods.length === 0)? <ActivityIndicator/> 
            :this.state.foods.map((v,i) => (
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
    // console.log(props)

    // this.menus =[
      // {
      //   id: 1,
      //   image: 'http://travel.home.sndimg.com/content/dam/images/travel/fullset/2014/07/20/32/food-paradise-102-ss-001.rend.hgtvcom.966.544.suffix/1491584380240.jpeg',
      //   menu: 'Rubbish Burger',
      //   location: 'Chix n Ribs',
      //   price: 'GHS 78',
      //   description: 'Ham, cheese, chicken, tomato, pork, egg, sausage, everything. Have fun',
      //   vimage: 'https://www.thonhotels.com/siteassets/hoteller/belgia/brussel/thon-hotel-bristol-stephanie/mat-og-drikke/thon-hotel-bristol-stephanie-91-restaurant-2.jpg'

      // },
    //   {
    //     id: 2,
    //     image: 'http://travel.home.sndimg.com/content/dam/images/travel/fullset/2014/07/20/32/food-paradise-102-ss-001.rend.hgtvcom.966.544.suffix/1491584380240.jpeg',
    //     menu: 'Rubbish Burger',
    //     location: 'Koffee Lounge',
    //     price: 'GHS 91',
    //     description: 'Ham, cheese, chicken, tomato, pork, egg, sausage, everything. Have fun',
    //     vimage: 'https://www.thonhotels.com/siteassets/hoteller/belgia/brussel/thon-hotel-bristol-stephanie/mat-og-drikke/thon-hotel-bristol-stephanie-91-restaurant-2.jpg'

    //   }
    // ]
  }
}

const styles = {
  wrapper: {
  }
}
