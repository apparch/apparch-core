import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container } from 'native-base';

// Components
import { Header } from 'apparch-core';

class BaseScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header {...this.props} title="Base Screen"/>
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Welcome to Base Screen!</Text>
        </View>
      </Container>
    );
  }
}

export default BaseScreen;
