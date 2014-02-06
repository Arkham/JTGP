//////////////////////
// prototypal style //
//////////////////////

var herb = {
  name: "Herb the Mammal",
  getName: function () {
    return this.name;
  },
  says: function () {
    return this.saying || '';
  }
}

console.log(herb.getName());
console.log(herb.says());

// In prototypal inheritance, we don't think about classes, instead we
// just think about objects. An object just inherits the properties of
// another object.

var lena = Object.create(herb)

lena.name = 'Lena the Cat';
lena.saying = 'Meow';

lena.purr = function (n) {
  var i, s = '';
  for (i = 0; i < n; i += 1) {
    if (s) { s += '-'; }
    s += 'r';
  }
  return s;
};

lena.getName = function () {
  return this.says() + " " + this.name + " " + this.says();
};

console.log(lena.getName());
console.log(lena.says());
console.log(lena.purr(5));
