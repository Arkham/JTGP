var add = function(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw {
      name: 'TypeError',
      message: 'add needs numbers'
    };
  }

  return a + b;
}

var try_it = function () {
  try {
    add("seven");
  } catch(e) {
    console.log(e.name + ": " + e.message);
  }
}

try_it();
