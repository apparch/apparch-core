import React, { Component } from "react";
import { Accordion as BaseAccordion } from "native-base";

class Accordion extends Component {
  render() {
    /*
     * With custom icons.
     */
    return (
      <BaseAccordion
        dataArray={this.props.data}
        expanded={0}

        // Icon
        icon={
          this.props.setting && this.props.setting.icon && this.props.setting.expandedIcon
          ? this.props.setting.icon
          : undefined
        }

        // Expanded icon
        expandedIcon={
          this.props.setting && this.props.setting.icon && this.props.setting.expandedIcon
          ? this.props.setting.expandedIcon
          : undefined
        }
      />
    );
  }
}

export default Accordion;
