// Define Compnents classes.
let Accordion = require('./_components/accordion');

/*
 * Import Component.
 */
let importer = function (components) {
  // Loop through components.
  let import_text = '';
  components.forEach(function(component) {
    switch (component.type) {
      case "accordion":
        import_text += new Accordion(component).import();
        break;
    }
  });
  return import_text;
}

/*
 * Build Component text.
 */
let builder = function (components) {
  // Loop through components.
  let build_text = '';
  components.forEach(function(component) {
    switch (component.type) {
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
