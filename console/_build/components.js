// Define Compnents classes.
let Container = require('./_components/container');
let Header = require('./_components/header');
let Content = require('./_components/content');
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
      case "accordion":
        import_text += new Accordion(component).import();
        break;
    }
  });
  return import_text;
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
