/*
 * Component API
 * - setting:
 *    - label {string} {Optional} Field name.
 *    - labelType {string} {Optional} {Default: "fixed"}:
 *       Accept one of the following options:
 *         "fixed" OR "inline" OR "floating" OR "stacked".
 *    - placeholder {string} {Optional} Field placeholder.
 *    - last {boolean} {Optional} true OR false.
 */

import React, { Component } from "react";
import {
  Item,
  Label,
  Input as BaseInput
} from "native-base";

class Input extends Component {
  render() {
    // Label child component.
    let label = undefined;
    if (this.props.setting && this.props.setting.label) {
      label = <Label>{this.props.setting.label}</Label>;
    }

    return (
      <Item
        // labelType.
        fixedLabel={
          this.props.setting
          && this.props.setting.label
          && this.props.setting.labelType === "fixed"
        }
        inlineLabel={
          this.props.setting
          && this.props.setting.label
          && this.props.setting.labelType === "inline"
        }
        floatingLabel={
          this.props.setting
          && this.props.setting.label
          && this.props.setting.labelType === "floating"
        }
        stackedLabel={
          this.props.setting
          && this.props.setting.label
          && this.props.setting.labelType === "stacked"
        }

        // last.
        last={
          this.props.setting
          && this.props.setting.last === true
        }
      >
        { label }
        <BaseInput
          placeholder={
            this.props.setting && this.props.setting.placeholder
            ? this.props.setting.placeholder
            : undefined
          }
        />
      </Item>
    );
  }
}

export default Input;
