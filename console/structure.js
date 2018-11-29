fs = require('fs');
const CONSOLE = require("./console_config");

const FOLDERS = [
  './src',
  './src/_build',
  './src/_build/_screens'
];

FOLDERS.forEach(function(dir) {
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
    console.log(CONSOLE.COLOR.yellow, 'Directory "' + dir + '" created successfully!');
  }
});
