/*
 * Component API
 * - setting:
 *    - placeholder {string} {Optional} Field name.
 *    - bordered {boolean} {Optional} true OR false.
 *    - rowSpan {integer} {Optional} {Default: 5}.
 */

import React, { Component } from "react";
import {
  Textarea as BaseTextarea
} from "native-base";

class Textarea extends Component {
  render() {
    return (
      <BaseTextarea
        placeholder={
          this.props.setting && this.props.setting.placeholder
          ? this.props.setting.placeholder
          : undefined
        }
        // bordered.
        bordered={
          this.props.setting
          && this.props.setting.bordered === true
        }
        // rowSpan.
        rowSpan={
          this.props.setting && this.props.setting.rowSpan
          ? this.props.setting.rowSpan
          : 5
        }
      />
    );
  }
}

export default Textarea;
