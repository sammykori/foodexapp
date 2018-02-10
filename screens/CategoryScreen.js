import React, { Component } from 'react'
import { ScrollView, Text, View, TouchableOpacity } from 'react-native'
import { Thumbnail } from 'native-base'
import { Ionicons } from '@expo/vector-icons';

const CategoryItem = (props) => {
  return (
    <TouchableOpacity style={styles.categoryStyle} activeOpacity={0.7}>
      <View style={[styles.categoryImg, {backgroundColor: props.data.bg}]}>
        <Thumbnail source={{uri: props.data.image}} />
      </View>
      <Text style={{marginTop: 5}}>{props.data.label}</Text>
    </TouchableOpacity>
  )
}

export default class CategoryScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, height: 105}}>
        <ScrollView horizontal contentContainerStyle={styles.wrapper}>
          {
            this.categories.map((v, i) => (
              <CategoryItem data={v} key={i}/>
            ))
          }
        </ScrollView>
      </View>
    )
  }

  constructor() {
    super()

    this.categories = [
      {
        id: 1,
        image: 'https://www.insightly.com/wp-content/uploads/2016/09/Food-Service.jpg',
        label: 'Fast Food',
        bg: 'white'
      },
      {
        id: 2,
        image: 'http://www.snackblackstar.be/media/images/upload/menu/11.png',
        label: 'Local Food',
        bg: 'white'
      },
      {
        id: 3,
        image: 'http://naturegourmet.eu/files/products/food_currywurst.png',
        label: 'Restaurant Food',
        bg: 'white'
      },
      {
        id: 4,
        image: 'https://www.emergenc.com/sites/default/files/berry-berry-bad-smoothie.png',
        label: 'Smoothies',
        bg: 'white'
      },
      {
        id: 5,
        image: 'http://www.dfcchicken.com/wp-content/uploads/2016/04/Chicken-Fillet-burger.png',
        label: 'Pizzas & Burgers',
        bg: 'white'
      },

    ]
  }
}

const styles = {
  wrapper: {

  },
  categoryImg: {
    width: 60,
    height: 60,
    borderRadius: 35
  },
  categoryStyle: {
    margin: 10,
    alignItems: 'center',
  }
}