module.exports = function (component) {
  // Import
  this.import = function () {
    return 'import { Header } from "apparch-core";\r\n';
  };

  // Build
  this.build = function () {
    return '\t\t\t<Header {...this.props} title="Some title"/>\r\n';
  };
}
