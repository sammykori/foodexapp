import React from 'react';
import { ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import store from '../store'

export default class FavoritesScreen extends React.Component {
  static navigationOptions = {
    title: 'Favorites',
  };

  state = { loaded: false, favorites: [] };

  constructor(...args) {
    super(...args);
    this.props.navigation.addListener('didFocus', () => {
      this.setState({ loaded: true, favorites: store.favorites });
    });
  }

  render() {
    return this.state.loaded
      ? <ScrollView style={styles.slowScreen}>
          {this.state.favorites.map((item, i) => <Text key={i}>{item.menu}</Text>)}
        </ScrollView>
      : <ActivityIndicator size={'large'} style={{ padding: 16 }} />;
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
