import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container } from 'native-base';

// Components
// import Header from '../../components/Header/Header';
import { Header } from 'apparch-core';

class ExampleHomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header {...this.props} title="Welcome"/>
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Welcome to AppArch!</Text>
        </View>
      </Container>
    );
  }
}

export default ExampleHomeScreen;
