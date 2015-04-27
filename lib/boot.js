(function(global) {
  var jasmineExpect = global.expect;

  global.expect = extendedExpect;

  function extendedExpect() {
    var args = arguments;
    if (args.length === 1) {
      return jasmineExpect(arguments[0]);
    } else {
      return weknowhow.expect.apply(weknowhow, arguments);
    }
  }

})(window);
