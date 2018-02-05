import React, { Component } from 'react'
import {Container, Content, Body, Title, Header} from 'native-base'

import { MonoText } from '../components/StyledText';

export default class OrderScreen extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    const { params } = this.props.navigation.state;
    return (
      <Container>
        <Header>
          <Body>
            <Title>afasdf</Title>
          </Body>
        </Header>
        <Content>
          <MonoText>ORders ScReen</MonoText>
        </Content>
      </Container>
    )
  }
}