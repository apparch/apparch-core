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

  // Property.
  this.buildProperty = function () {
    // Check nested
    if (component.components) {
      //
    }
    return '';
  }

  // Functions build
  this.functionsBuild = function () {
    let funtions = '';

    /*
     * Constractor.
     */
    // constructor() {
    //   super();
    //   this.state = {
    //     name: 'Mahmoud',
    //     description: 'Test'
    //   }
    //   console.warn(this.state);
    // }
    let constructorFunction = 'constructor() {\n';
    constructorFunction += 'super();\n';
    constructorFunction += 'this.state = {\n';
    // Check nested
    if (component.components) {
      // Loop through form properties.
      constructorFunction += COMPONENTS.getFormElementProperties(component.components);
      constructorFunction += ',\n';
      // End loop through form properties.
    }
    constructorFunction +=  '}\n';

    // Test.
    constructorFunction += 'console.warn(this.state);\n';

    funtions += constructorFunction;
    funtions += '\n';

    /*
     * Another function.
     */

    funtions += '';
    return funtions;
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
