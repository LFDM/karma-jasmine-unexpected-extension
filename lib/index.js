var path = require('path');

var createPattern = function(path) {
  return {pattern: path, included: true, served: true, watched: false};
};

function initUnexpectedExtension(files) {
  //var unexpectedPath = path.dirname(require.resolve('unexpected'));
  //files.unshift(createPattern(unexpectedPath + '/../unexpected.js'));
  files.unshift(createPattern(__dirname + '/boot.js'));
}

initUnexpectedExtension.$inject = ['config.files'];

module.exports = {
  'framework:jasmine-unexpected-extension': ['factory', initUnexpectedExtension]
};

