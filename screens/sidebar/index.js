import React, { Component } from "react";
import { Image } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge
} from "native-base";
import styles from "./style";

// const drawerCover = require("../../assets/drawer-cover.png");
// const drawerImage = require("../../assets/logo-kitchen-sink.png");
const datas = [
  {
    name: "Home",
    route: "MainTabNavigator",
    icon: "home"
  },
  {
    name: "Orders",
    route: "NHListAvatar",
    icon: "checkmark-circle",
    bg: "#C5F442",
    types: "30"
  },
  {
    name: "Favorites",
    route: "Favorites",
    icon: "heart",
    bg: "#C5F442",
    types: "30"
  },
  {
    name: "Profile",
    route: "Favorites",
    icon: "person",
    bg: "#C5F442",
    types: "30"
  },
 

];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }

  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
        >
          <Image source={{uri:"http://www.guibingzhuche.com/data/out/113/1175616.png"}} style={styles.drawerCover} />
          {/* <Image square style={styles.drawerImage} source={drawerImage} /> */}

          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Icon
                    active
                    name={data.icon}
                    style={{ color: "#777", fontSize: 26, width: 30 }}
                  />
                  <Text style={styles.text}>
                    {data.name}
                  </Text>
                </Left>
                {data.types &&
                  <Right style={{ flex: 1 }}>
                    <Badge
                      style={{
                        borderRadius: 3,
                        height: 25,
                        width: 72,
                        backgroundColor: data.bg
                      }}
                    >
                      <Text
                        style={styles.badgeText}
                      >{`${data.types}`}</Text>
                    </Badge>
                  </Right>}
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;
