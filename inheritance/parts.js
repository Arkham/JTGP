var eventuality = function(that) {
  var registry = {};

  that.on = function (type, method, parameters) {
    var handler = {
      method: method,
      parameters: parameters
    };

    if (registry.hasOwnProperty(type)) {
      registry[type].push(handler);
    } else {
      registry[type] = [handler];
    }

    return this;
  };

  that.fire = function (event) {
    var array,
        func,
        handler,
        i,
        type = typeof event === 'string' ? event : event.type;

    if (registry.hasOwnProperty(type)) {
      array = registry[type];

      for (i = 0; i < array.length; i += 1) {
        handler = array[i];
        func = handler.method;

        if (typeof func === 'string') {
          func = this[func];
        }

        func.apply(this, handler.parameters || [event]);
      }
    }

    return this;
  };

  return that;
};

var myObj = {
  name: 'Mister Obj',
  printName: function () {
    console.log(this.name);
  }
};

eventuality(myObj);

myObj.on('click', function () {
  console.log(this);
  console.log('I noticed a click');
})

myObj.on('click', function (e) {
  console.log('Someone clicked', e.target);
})

myObj.on('click', function(a, b, c) {
  console.log(a, b, c);
}, [1, 2, 3]);

myObj.on('click', 'printName');

myObj.fire({
  type: 'click',
  target: '#button'
});
