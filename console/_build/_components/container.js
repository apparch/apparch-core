module.exports = function (component) {
  const COMPONENTS = require("../components");

  // Import
  this.import = function () {
    let importer = 'import { Container } from "native-base";\r\n';

    // Check nested
    if (component.components) {
      importer += COMPONENTS.importer(component.components);
    }

    return importer;
  };

  // Build
  this.build = function () {
    let container = '\t<Container>\r\n';

    // Check nested
    if (component.components) {
      container += '\t' + COMPONENTS.builder(component.components);
    }

    container += '\t\t\t</Container>\r\n';
    return container;
  };
}
