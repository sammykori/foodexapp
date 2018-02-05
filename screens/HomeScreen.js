import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet, TextInput } from 'react-native';
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
          <Body>
            <TextInput placeholder="What do you want today?" style={{backgroundColor: 'white', padding: 10, borderWidth: 1, borderRadius: 5, borderColor: 'black'}}/>
          </Body>
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