const CONSOLE = require("../console_config");
const BUILD_API = CONSOLE.BUILD_API;

fs = require('fs');
const Config = require("../../../../src/config");
const Screens = BUILD_API.screens;

// Map Nav
let fileText = '';
fileText += 'import { createDrawerNavigator } from "react-navigation";\r\n';

// Loop through screens to import screens.
Screens.forEach(function(screen) {
  let screenClass = screen.name + 'Screen';
  fileText += 'import ' + screenClass + ' from "./_screens/' + screenClass + '";\r\n';
});
// End Loop through screens

fileText += '\r\n';

fileText += 'const Screens = {\r\n';

// Loop through screens to write screens object.
Screens.forEach(function(screen) {
  let screenClass = screen.name + 'Screen';
  fileText += '\t'+screen.name.replace(/\s/g, "")+': ' + screenClass + ',\r\n';
});
// End Loop through screens

fileText += '};\r\n';
fileText += '\r\n';

fileText += 'export default createDrawerNavigator(Screens);\r\n';

// Write the file.
fs.writeFile(Config.BUILD_DIR+'/_navigation.js', fileText, function (err) {
  if (err) return console.log(err);
  console.log(CONSOLE.COLOR.cyan, 'Config "navigation" created successfully!');
});
