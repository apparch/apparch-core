module.exports = function (component) {
  // Import.
  this.import = function () {
    return 'import { Input } from "apparch-core";\r\n';
  };

  // Property.
  this.buildProperty = function () {
    return component.id + ': ""';
  }

  // Build.
  this.build = function () {
    if (component.setting) {
      return '<Input setting={' + JSON.stringify(component.setting) + '} onChangeText={(' + component.id + ') => this.setState({' + component.id + '})}/>\r\n';
    }
    return '<Input onChangeText={(' + component.id + ') => this.setState({' + component.id + '})}/>\r\n';
  };
}
