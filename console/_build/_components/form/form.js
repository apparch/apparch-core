module.exports = function (component) {
  const COMPONENTS = require("../../components");

  // Import
  this.import = function () {
    let importer = 'import { Form } from "native-base";\r\n';

    // Check nested
    if (component.components) {
      importer += COMPONENTS.importer(component.components);
    }

    return importer;
  };

  // Build
  this.build = function () {
    let form = '\t\t\t\t<Form>\r\n';

    // Check nested
    if (component.components) {
      form += '\t\t\t\t\t' + COMPONENTS.builder(component.components);
    }

    form += '\t\t\t\t</Form>\r\n';
    return form;
  };
}
