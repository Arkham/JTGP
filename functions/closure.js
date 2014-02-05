var myObject = function() {
  var value = 0;

  return {
    increment: function (inc) {
      value += typeof inc === 'number' ? inc : 1;
    },
    getValue: function () {
      return value;
    }
  }
}();

myObject.increment();
console.log(myObject.getValue());
// 1

myObject.increment();
console.log(myObject.getValue());
// 2

myObject.increment();
myObject.increment();
console.log(myObject.getValue());
// 4

var quo = function(string) {
  return {
    getStatus: function () {
      return string;
    }
  }
}

var myQuo = quo("happy")
console.log(myQuo.getStatus());
// happy

var addHandlers = function (nodes) {
  var fn = function (i) {
    return function() {
      console.log(i);
    }
  }

  for (var i = 0, len = nodes.length; i < len; i++) {
    nodes[i].onclick = fn(i)
  }
}

var nodes = [{}, {}, {}];
addHandlers(nodes);
nodes.forEach(function (node) {
  node.onclick();
})
// 0, 1, 2

// always create functions outside loops, they're computationally
// wasteful and can cause issues
