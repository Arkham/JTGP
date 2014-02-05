Function.prototype.method = function (name, func) {
  this.prototype[name] = func;
  return this;
}

String.method('deentityify', function() {
  var entityMap = {
    quot: '"',
    lt: '<',
    gt: '>'
  };

  return function() {
    return this.replace(/&([^&;]+);/g, function(a, b) {
      var r = entityMap[b];
      return typeof r === 'string' ? r : a;
    })
  }
}())

console.log("&lt;&quot;Hello&quot;&gt;".deentityify());
// <"Hello">
