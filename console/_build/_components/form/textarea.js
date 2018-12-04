module.exports = function (component) {
  // Import
  this.import = function () {
    return 'import { Textarea } from "apparch-core";\r\n';
  };

  // Property.
  this.buildProperty = function () {
    return component.id + ': ""';
  }

  // Build
  this.build = function () {
    if (component.setting) {
      return '<Textarea setting={' + JSON.stringify(component.setting) + '} onChangeText={(' + component.id + ') => this.setState({' + component.id + '})}/>\r\n';
    }
    return '<Textarea  onChangeText={(' + component.id + ') => this.setState({' + component.id + '})}/>\r\n';
  };
}
