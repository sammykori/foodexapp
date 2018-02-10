import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import { observer } from 'mobx-react';
import store from '../store'

@observer
export default class FavoritesScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  componentDidFocus () {
    console.log('somethings')
  }

  componentWillUpdate () {
    console.log('update')
  }


  render() {
    console.log('her')
    return (
      <Container>
        <Content>
          <Text>FavoritesScreen</Text>
          {/* <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('../assets/images/food.jpg')} />
              </Left>
              <Body>
                <Text>Beef Jollof</Text>
                <Text note>Koffee Lounge</Text>
              </Body>
              <Right>
                <Text note>available</Text>
              </Right>
            </ListItem>
          </List>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('../assets/images/food.jpg')} />
              </Left>
              <Body>
                <Text>Egg Jollof</Text>
                <Text note>Koffee Lounge</Text>
              </Body>
              <Right>
                <Text note>unavailable</Text>
              </Right>
            </ListItem>
          </List> */}
        </Content>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
