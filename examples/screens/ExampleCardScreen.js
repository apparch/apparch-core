import React, { Component } from 'react';
import { Container, Content, Card as BaseCard, CardItem, Body, Text } from 'native-base';

// Core Components
import { Header } from 'apparch-core';

class ExampleCardScreen extends Component {
  render() {
    var items = [
      'Simon Mignolet',
      'Nathaniel Clyne',
      'Dejan Lovren',
      'Mama Sakho',
      'Emre Can'
    ];

    return (
      <Container>
        <Header {...this.props} title="Card"/>
        <Content padder>
          <BaseCard
            dataArray={items}
            renderRow={(item) =>
              <CardItem bordered>
                <Body>
                  <Text>
                     {item}
                  </Text>
                </Body>
              </CardItem>
            }>
          </BaseCard>
        </Content>
      </Container>
    );
  }
}

export default ExampleCardScreen;
