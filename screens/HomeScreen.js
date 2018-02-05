import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Container, Content, Header, Right, Left, Title, Body } from 'native-base';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

import { MonoText } from '../components/StyledText';

import SearchScreen from './SearchScreen'
import CategoryScreen from './CategoryScreen'
import VendorScreen from './VendorScreen'

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

const FirstRoute = () => <SearchScreen />;
const SecondRoute = () => <CategoryScreen />;
const ThirdRoute = () => <VendorScreen />;

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    index: 0,
    routes: [
      { key: 'first', icon: 'md-search' },
      { key: 'second', icon: 'md-list-box' },
      { key: 'third', icon: 'ios-basket' },
    ],
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
        <TabViewAnimated
          style={styles.container}
          navigationState={this.state}
          renderScene={this._renderScene}
          renderHeader={this._renderHeader}
          onIndexChange={this._handleIndexChange}
          initialLayout={initialLayout}
        />
      </Container>
    );
  }

  _handleIndexChange = index => this.setState({ index });

  _renderIcon = ({ route }) => (
    <Ionicons name={route.icon} size={24} color="white" />
  );

  _renderHeader = props => <TabBar style = {{backgroundColor: '#f7b9d7'}} renderIcon={this._renderIcon} {...props} />;

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute
  });
}

const styles = {
  container: {
    flex: 1
  }
}