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
      <View style={{flex: 1, height: 100}}>
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
        image: 'http://individual.icons-land.com/IconsPreview/3D-Food/PNG/256x256/Seafood_Shrimp.png',
        label: 'Sea Food',
        bg: 'yellow'
      }
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