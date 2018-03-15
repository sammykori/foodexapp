import React, { Component } from 'react'
import { ScrollView, Text, View, TouchableOpacity } from 'react-native'
import { Thumbnail } from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import { Devless } from "../utils/devless";

// const CategoryItem = (props) => {
//   return (
//     <TouchableOpacity style={styles.categoryStyle} activeOpacity={0.7}>
//       <View style={[styles.categoryImg, {backgroundColor:"white"}]}>
//         <Thumbnail source={{uri: props.data.image}} />
//       </View>
//       <Text style={{marginTop: 5}}>{props.data.name}</Text>
//     </TouchableOpacity>
//   )
// }

export default class CategoryScreen extends Component {
  state = {
    categories: []
  }

  componentWillMount () {
    this._fetchCategories()
  }

  async _fetchCategories () {
    const res = await Devless.queryData('Menu', 'categories')
    if (res.status_code === 625) {

      this.setState({
        categories: res.payload.results
      })
      console.log(this.state.categories)
    }
  }
  click = ()=>{
    this.props.call();
  }
  render() {
    return (
      <View style={{flex: 1, height: 105}}>
        <ScrollView horizontal contentContainerStyle={styles.wrapper}>
          {
            this.state.categories.map((v, i) => (
              <TouchableOpacity onPress={this.click} style={styles.categoryStyle} activeOpacity={0.7} key={i}>
                <View style={[styles.categoryImg, {backgroundColor:"white"}]}>
                  <Thumbnail source={{uri: v.image}} />
                </View>
                <Text style={{marginTop: 5}}>{v.name}</Text>
              </TouchableOpacity>
            ))
          }
        </ScrollView>
      </View>
    )
  }

  constructor() {
    super()

    
     
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