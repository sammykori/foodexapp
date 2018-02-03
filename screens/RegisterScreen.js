import React from "react";
import {
  Container,
  Content,
  Form,
  Item,
  Label,
  Input,
  Text,
  Button
} from "native-base";
import { View } from 'react-native';
import Spacer from "../components/Spacer";

export default class RegisterScreen extends React.Component {
  state = {
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  }

  handleSubmit () {
    console.log('submitting')
  }
  render() {
    const {goBack} = this.props.navigation
    return (
      <Container style={{ backgroundColor: '#fff'}}>
        <Content>
          <Spacer size={50} />
          <Text style={styles.labelText}>FoodExpress</Text>
          <Spacer size={30} />
          <Form>
            <Item stackedLabel>
              <Label>First Name</Label>
              <Input
                value={this.state.firstname}
                onChangeText={firstname => this.setState({firstname})}
              />
            </Item>
            <Item stackedLabel>
              <Label>Last Name</Label>
              <Input
                value={this.state.lastname}
                onChangeText={lastname => this.setState({lastname})}
              />
            </Item>
            <Item stackedLabel>
              <Label>Email</Label>
              <Input
                autoCapitalize="none"
                value={this.state.email}
                keyboardType="email-address"
                onChangeText={email => this.setState({email})}
              />
            </Item>
            <Item stackedLabel>
              <Label>Password</Label>
              <Input
                secureTextEntry
                onChangeText={password => this.setState({password})}
              />
            </Item>
            <Spacer size={20} />

            <View style={styles.btnWrapper}>
              <Button block onPress={this.handleSubmit}>
                <Text>Register</Text>
              </Button>
            </View>
            <Spacer size={20} />
            <Text style={styles.registerWrapper}>Already have an account? 
              <Text style={styles.registerText} onPress={()=>goBack()}> Login Now</Text>
            </Text>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = {
  labelText: {
    fontSize: 30,
    alignSelf: 'center'
  },
  btnWrapper: {
    paddingHorizontal: 16
  },
  registerWrapper: {
    alignSelf: 'center'
  },
  registerText: {
    color: 'blue',
    textDecorationLine: 'underline'
  }
}