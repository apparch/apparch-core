module.exports = function (component) {
  const COMPONENTS = require("../components");

  // Import
  this.import = function () {
    let importer = 'import { Content } from "native-base";\r\n';

    // Check nested
    if (component.components) {
      importer += COMPONENTS.importer(component.components);
    }

    return importer;
  };

  // Build
  this.build = function () {
    let content = '\t\t\t\t<Content>\r\n';
    if (component.setting.padder) {
      content = '\t\t\t\t<Content padder>\r\n';
    }

    // Check nested
    if (component.components) {
      content += '\t\t\t\t\t' + COMPONENTS.builder(component.components);
    }

    content += '\t\t\t\t</Content>\r\n';
    return content;
  };
}
