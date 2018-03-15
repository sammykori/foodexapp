import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  List,
  ListItem,
  Text,
  Thumbnail,
  Left,
  Right,
  Body
} from "native-base";
import styles from "./styles";

const pratik = require("../../assets/contacts/pratik.png");
const sanket = require("../../assets/contacts/sanket.png");
const megha = require("../../assets/contacts/megha.png");
const atul = require("../../assets/contacts/atul.png");
const saurabh = require("../../assets/contacts/saurabh.png");
const varun = require("../../assets/contacts/varun.png");
const datas = [
  {
    img: pratik,
    menu: "Rubbish Burger",
    description: "Its time to build a difference . .",
    price: "GHS 46",
    time: "3:43 pm"
  },
  {
    img: pratik,
    menu: "Rubbish Burger",
    description: "Its time to build a difference . .",
    price: "GHS 46",
    time: "3:43 pm"
  }
];

class NHListAvatar extends Component {
  render() {
    return (
      <Container style={styles.container}>
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
            <Title>Ordered Orders</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem avatar button
              onPress={() => this.props.navigation.navigate('OrderScreen')}
              >
                <Left>
                  <Thumbnail small source={data.img} />
                </Left>
                <Body>
                  <Text>
                    {data.menu}
                  </Text>
                  <Text numberOfLines={1} note>
                    {data.description}
                  </Text>
                </Body>
                <Right>
                  <Text note>
                    {data.time}
                  </Text>
                </Right>
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default NHListAvatar;
