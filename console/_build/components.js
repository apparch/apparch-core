// Define Compnents classes.
let Container = require('./_components/container');
let Header = require('./_components/header');
let Content = require('./_components/content');
let Form = require('./_components/form/form');
let Input = require('./_components/form/input');
let Textarea = require('./_components/form/textarea');
let Accordion = require('./_components/accordion');

/*
 * Import Component.
 * First level.
 */
let importer = function (components) {
  // Loop through components.
  let import_text = '';
  components.forEach(function(component) {
    switch (component.type) {
      case "container":
        import_text += new Container(component).import();
        break;
      case "header":
        import_text += new Header(component).import();
        break;
      case "content":
        import_text += new Content(component).import();
        break;
      // Start Form.
      case "form":
        import_text += new Form(component).import();
        break;
      case "input":
        import_text += new Input(component).import();
        break;
      case "textarea":
        import_text += new Textarea(component).import();
        break;
      // End Form.
      case "accordion":
        import_text += new Accordion(component).import();
        break;
    }
  });

  let import_array = import_text.split("\n");
  let unique_import_array = [...new Set(import_array)];
  let filterd_import_text = unique_import_array.join("\n");
  return filterd_import_text;
}

/*
 * Functions Builder.
 */
// let functionsBuilder = function (components) {
//   // Loop through components.
//   let build_text = '';
//   components.forEach(function(component) {
//     switch (component.type) {
//       // Start Form.
//       case "form":
//         build_text += new Form(component).functionsBuild();
//         break;
//     }
//   });
//   return build_text;
// }

/*
 * Functions Builder.
 */
let functionsBuilder = function (components)
{
  funtions = '';

  /*
   * Constractor.
   */
  funtions += buildConstructorFunction(components);

  /*
   * Another function.
   */

  // Return functions.
  return funtions;
}

/*
 * Constructor function.
 */
let buildConstructorFunction = function (components)
{
  let constructorFunction = 'constructor() {\n';
  constructorFunction += 'super();\n';
  constructorFunction += 'this.state = {\n';

  // Get components properties.
  constructorFunction += getProperties(components);

  constructorFunction +=  '}\n';

  // Test.
  constructorFunction += 'console.warn(this.state);\n';

  constructorFunction +=  '}\n';
  return constructorFunction;
}

/*
 * Get properties.
 */
let getProperties = function (components) {
  let build_properties = '';

  components.forEach(function(component) {
    switch (component.type) {
      case "input":
        build_properties += new Input(component).buildProperty();
        // Seperator
        build_properties += ',\n';
        break;
      case "textarea":
        build_properties += new Textarea(component).buildProperty();
        // Seperator
        build_properties += ',\n';
        break;
    }
    // Child components.
    if (component.components) {
      build_properties += getProperties(component.components);
    }

  });

  return build_properties;
}

/*
 * Build Component text.
 * First level.
 */
let builder = function (components) {
  // Loop through components.
  let build_text = '';
  components.forEach(function(component) {
    switch (component.type) {
      case "container":
        build_text += new Container(component).build();
        break;
      case "header":
        build_text += new Header(component).build();
        break;
      case "content":
        build_text += new Content(component).build();
        break;
      // Start Form.
      case "form":
        build_text += new Form(component).build();
        break;
      case "input":
        build_text += new Input(component).build();
        break;
      case "textarea":
        build_text += new Textarea(component).build();
        break;
      // End Form.
      case "accordion":
        build_text += new Accordion(component).build();
        break;
    }
  });
  return build_text;
}

// /*
//  * Build Form elements properties.
//  */
// let getFormElementProperties = function (components) {
//   // None properties components
//   let none_properties_components_ids = [];

//   // Loop through components.
//   let build_properties = '';
//   components.forEach(function(component) {
//     switch (component.type) {
//       case "input":
//         build_properties += new Input(component).buildProperty();
//         break;
//       case "textarea":
//         build_properties += new Textarea(component).buildProperty();
//         break;
//       default:
//         // Loop through child components to get properties if any.
//         if (component.components) {
//           let child_components = component.components;
//           child_components.forEach(function(child_component) {

//           }
//           // Recurcive call.
//           this.getFormElementProperties(child_components);
//         }
//         break;
//     }
//   });
//   return build_properties;
// }

module.exports = {
  importer,
  builder,
  functionsBuilder,
  //getFormElementProperties
}
