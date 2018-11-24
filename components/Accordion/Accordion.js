import React, { Component } from "react";
import { Accordion as BaseAccordion } from "native-base";

class Accordion extends Component {
  render() {
    /*
     * With custom icons.
     */
    if (this.props.data.icon && this.props.data.expandedIcon) {
      return (
        <BaseAccordion
          dataArray={this.props.data.rows}
          expanded={0}
          icon={this.props.data.icon}
          expandedIcon={this.props.data.expandedIcon}
        />
      );
    }

    /*
     * Simple.
     */
    return (
      <BaseAccordion
        dataArray={this.props.data.rows}
        expanded={0}
      />
    );
  }
}

export default Accordion;
