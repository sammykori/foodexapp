import React from 'react';
import { ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import { Container, Header, Content, List, ListItem, Button,Left, Body, Right, Thumbnail, Text, Icon, Title } from 'native-base';
import store from '../store'


const FavoriteItem = (props) => {
  return(
        
              <ListItem avatar button>
                <Left>
                  <Thumbnail small source={{uri: props.data.image}} />
                </Left>
                <Body>
                  <Text>
                    {props.data.name}
                  </Text>
                  <Text numberOfLines={1} note>
                    {props.data.description}
                  </Text>
                </Body>
                <Right>
                  <Text note>
                    available
                  </Text>
                </Right>
              </ListItem>
        
        
  )
}

export default class FavoritesScreen extends React.Component {
 

  state = { loaded: false, favorites: [] };

  constructor(...args) {
    super(...args);
    this.props.navigation.addListener('didFocus', () => {
      this.setState({ loaded: true, favorites: store.favorites });
    });
  }

  render() {
    return this.state.loaded
      ? <Container style={styles.container}>
          <Header 
            style={{ backgroundColor: "#dc4239" }}
            androidStatusBarColor="#dc2015"
            iosBarStyle="light-content"
          >
            <Left>
            <Button 
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
            </Left>
            <Body style={{ flex: 3 }}>
              <Title>Favorites</Title>
            </Body>
            <Right />
          </Header>

            <Content>
              <ScrollView style={styles.slowScreen}>
                {this.state.favorites.map((item, i) => <FavoriteItem data={item} key={i}/>)}
              </ScrollView>
            </Content>
        </Container>
      : <ActivityIndicator size={'large'} style={{ padding: 16 }} />;
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
