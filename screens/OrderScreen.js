import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import {Container, Content, Left, Icon, Body, Title, Header} from 'native-base'

import { MonoText } from '../components/StyledText';

export default class OrderScreen extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    const { goBack } = this.props.navigation;
    const { params } = this.props.navigation.state;
    return (
      <Container>
        <Header>
          <Left>
            <TouchableOpacity onPress={() => goBack()} activeOpacity={0.9}> 
              <Icon name="ios-arrow-back" style={{ color: 'white'}} />
            </TouchableOpacity>
          </Left>
          <Body>
            <Title>{params.data.menu}</Title>
          </Body>
        </Header>
        <Content>
          <MonoText>ORders ScReen</MonoText>
        </Content>
      </Container>
    )
  }
}