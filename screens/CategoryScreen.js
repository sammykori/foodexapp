import React, { Component } from 'react'
import { Container, Content, Text } from 'native-base'

export default class CategoryScreen extends Component {
  render() {
    return (
      <Container style={styles.wrapper}>
        <Content>
          <Text>Category Screen</Text>
        </Content>
      </Container>
    )
  }
}

const styles = {
  wrapper: {
    backgroundColor: '#673ab7'
  }
}