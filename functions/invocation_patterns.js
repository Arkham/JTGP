///////////////////////////////
// method invocation pattern //
///////////////////////////////

var myObject = {
  value: 0,
  increment: function (inc) {
    this.value += typeof inc == 'number' ? inc : 1;
  }
}

myObject.increment();
console.log(myObject.value);
// 1

myObject.increment();
console.log(myObject.value);
// 2

/////////////////////////////////
// function invocation pattern //
/////////////////////////////////

function add(a, b) {
  return a + b;
}

var sum = add(3,4);
console.log(sum);
// 7

// when functions are invoked in this way,
// `this` is bound to the global object, so
// this will not work


myObject.double = function () {
  var helper = function () {
    this.value = add(this.value, this.value)
  }

  helper();
}

myObject.double()
console.log(myObject.value);
// 2

// a common workaround
myObject.double = function () {
  var that = this;

  var helper = function () {
    that.value = add(that.value, that.value)
  }

  helper();
}

myObject.double();
console.log(myObject.value);
// 4

////////////////////////////////////
// constructor invocation pattern //
////////////////////////////////////

var Quo = function(string) {
  this.status = string;
}

Quo.prototype.get_status = function () {
  return this.status
}

var myQuo = new Quo('confused');
console.log(myQuo.get_status());
console.log(myQuo.status);

//////////////////////////////
// apply invocation pattern //
//////////////////////////////

var array = [3,4];
var sum = add.apply(null, array);
console.log(sum);
// 7

var statusObject = {
  status: 'A-OK'
};

var status = Quo.prototype.get_status.apply(statusObject);
console.log(status);
