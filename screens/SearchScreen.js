import React, { Component } from 'react'
import { Container, Content, Text } from 'native-base'

export default class SearchScreen extends Component {
  render() {
    return (
      <Container style={styles.wrapper}>
        <Content>
          <Text>Search Screen</Text>
        </Content>
      </Container>
    )
  }
}

const styles = {
  wrapper: {
    backgroundColor: '#ff4081'
  }
}