const CONSOLE = require("../console_config");
const BUILD_API = CONSOLE.BUILD_API;
const COMPONENTS = require("./components");

fs = require('fs');
const Config = require("../../../../src/config");
const Screens = BUILD_API.screens;

// Loop through screens
Screens.forEach(function(screen) {
  let screenClass = screen.name + 'Screen';
  let fileText = '';

  // Import Basic components.
  fileText += 'import React from "react";\r\n';

  // Import Dependancy components
  fileText += COMPONENTS.importer(screen.components);

  // New line.
  fileText += '\r\n';

  // Open screen class.
  fileText += 'class ' + screenClass + ' extends React.Component {\r\n';

  // Functions build.
  fileText += '\t\t' + COMPONENTS.functionsBuilder(screen.components);

  // Open render function.
  fileText += '\trender() {\r\n';
  // Open return function.
  fileText += '\t\treturn (\r\n';

  // Build Components.
  fileText += '\t\t' + COMPONENTS.builder(screen.components);

  // Close return function.
  fileText += '\t\t);\r\n';
  // Close render function.
  fileText += '\t}\r\n';
  // Close screen class.
  fileText += '}\r\n';

  fileText += '\r\n';

  // Export class.
  fileText += 'export default ' + screenClass + ';\r\n';

  // New line.
  fileText += '\r\n';

  // Write the file.
  fs.writeFile(Config.BUILD_DIR + '/_screens/' + screenClass + '.js', fileText, function (err) {
    if (err) return console.log(err);
    console.log(CONSOLE.COLOR.yellow, 'Screen "' + screenClass + '" created successfully!');
  });

});
// End Loop through screens
