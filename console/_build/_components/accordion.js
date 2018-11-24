module.exports = function (component) {
  // Import
  this.import = function () {
    return 'import { Accordion } from "apparch-core";\r\n';
  };

  // Build
  this.build = function () {
    // Todo Remove data to get it from seprate service.
    if (component.setting) {
      return '<Accordion data={' + JSON.stringify(component.data) + '} setting={' + JSON.stringify(component.setting) + '} />\r\n';
    }
    return '<Accordion data={' + JSON.stringify(component.data) + '} />\r\n';
  };
}
