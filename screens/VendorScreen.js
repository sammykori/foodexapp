import React, { Component } from 'react'
import { Container, Content, Text } from 'native-base'

export default class VendorScreen extends Component {
  render() {
    return (
      <Container style={styles.wrapper}>
        <Content>
          <Text>Vendor Screen</Text>
        </Content>
      </Container>
    )
  }
}

const styles = {
  wrapper: {
    backgroundColor: 'orange'
  }
}