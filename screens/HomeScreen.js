import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet, TouchableOpacity} from 'react-native';
import { Drawer, Container, Content, Header, Right, Left, Title, Body, Item, Icon, Input, Button } from 'native-base';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
// import Category from 'react-native-category'

import { MonoText } from '../components/StyledText';

import SearchScreen from './SearchScreen'
import CategoryScreen from './CategoryScreen'
import VendorScreen from './VendorScreen'
import SideBar from './SideBar'

export default class HomeScreen extends React.Component {
  closeDrawer() {
    this._drawer._root.close()
  };
  openDrawer() {
    this._drawer._root.open()
  };

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
    

      
        <Container>
          <Header  style = {{backgroundColor: '#f70278', height: 40}}>
            <Left style={{flex: 8, padding: 3}}>
              <Body >
              <Item searchBar style = {{backgroundColor: 'white', height: 35, borderRadius: 20, padding: 2}}>
                <Icon name="ios-search" />
                  <Input placeholder="What are you craving?34t35535t356y5" style = {{width: 150}}/>
              </Item>
              </Body>
            </Left>
            <Right >
              <TouchableOpacity onPress = {()=> this.openDrawer()}>
              <Icon active ios='ios-menu' android="md-menu" style={{ color: 'white'}} />
              </TouchableOpacity>
            </Right>
            <Button transparent>
          </Button>
          </Header>
          <SearchScreen {...this.props} />
        </Container>
        
      
      
    );
  }
}

const styles = {
  container: {
    flex: 1,
  }
}