import React from 'react';

import { Container, Content } from "native-base";

// Simple.
const data = {
  rows: [
    { title: "First Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
  ]
};

// With custom icons.
const data2 = {
  icon: 'ios-add',
  expandedIcon: 'ios-remove',
  rows: [
    { title: "First Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
  ]
};


// Core Components
import { Header } from 'apparch-core';
import { Accordion } from 'apparch-core';

class ExampleAccordionScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header {...this.props} title="Accordion"/>
        <Content padder>
          <Accordion data={data} expanded={0}/>
          <Accordion data={data2} expanded={0}/>
        </Content>
      </Container>
    );
  }
}

export default ExampleAccordionScreen;
