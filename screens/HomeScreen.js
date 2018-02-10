import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet} from 'react-native';
import { Container, Content, Header, Right, Left, Title, Body, Item, Icon, Input, Button } from 'native-base';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
// import Category from 'react-native-category'

import { MonoText } from '../components/StyledText';

import SearchScreen from './SearchScreen'
import CategoryScreen from './CategoryScreen'
import VendorScreen from './VendorScreen'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Container>
        <Header searchBar rounded style = {{backgroundColor: '#f70278'}}>
          <Item>
            <Icon name="ios-search" />
              <Input placeholder="What are you craving?" />
          </Item>
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