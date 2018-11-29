module.exports = function (component) {
  // Import
  this.import = function () {
    return 'import { Input } from "apparch-core";\r\n';
  };

  // Build
  this.build = function () {
    if (component.setting) {
      return '<Input setting={' + JSON.stringify(component.setting) + '} />\r\n';
    }
    return '<Input/>\r\n';
  };
}
