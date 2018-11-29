// Define Compnents classes.
let Container = require('./_components/container');
let Header = require('./_components/header');
let Content = require('./_components/content');
let Form = require('./_components/form/form');
let Input = require('./_components/form/input');
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
      // End Form.
      case "accordion":
        build_text += new Accordion(component).build();
        break;
    }
  });
  return build_text;
}

module.exports = {
  importer,
  builder
}
