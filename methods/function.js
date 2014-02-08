Function.prototype.bind = function (that) {
  var method = this,
      slice = Array.prototype.slice,
      args = slice.call(arguments, 1);

  return function () {
    return method.apply(that, args.concat(slice.apply(arguments)))
  };
};

var x = function (num) {
  return this.value + num;
}.bind({value: 555});

console.log(x(111));
// 666
