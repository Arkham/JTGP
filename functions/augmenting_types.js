Function.prototype.method = function (name, func) {
  if (!this.prototype[name]) {
    this.prototype[name] = func;
    return this;
  }
}

Number.method('integer', function() {
  return Math[this < 0 ? 'ceil' : 'floor'](this);
})

console.log((10/-3).integer());
console.log((10/3).integer());

String.method('trim', function() {
  return this.replace(/^\s+|\s+$/g, '');
})

console.log("   hello there   ".trim());
