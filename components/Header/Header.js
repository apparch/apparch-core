import React from 'react';
import {
  Container,
  Header as BaseHeader,
  Left,
  Body,
  Right,
  Icon,
  Title,
  Button
} from 'native-base';

class Header extends React.Component {
  render() {
    return (
      <BaseHeader>
        <Left>
          <Button transparent onPress={ () => this.props.navigation.toggleDrawer()}>
            <Icon ios='ios-menu' android="md-menu" />
          </Button>
        </Left>
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
        <Right />
      </BaseHeader>
    );
  }
}

export default Header;
