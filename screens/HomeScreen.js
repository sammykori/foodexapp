import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Container, Content, Header, Right, Left, Title, Body } from 'native-base';
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
        <Header style = {{backgroundColor: '#f70278'}}>
          <Left/>
          <Body>
            <Title>FoodExpress</Title>
          </Body>
          <Right/>
        </Header>
        <SearchScreen {...this.props} />
      </Container>
    );
  }
}

const styles = {
  container: {
    flex: 1
  }
}