Array.dim = function (dimension, initial) {
  var result = [];

  for (var i = 0; i < dimension; i++) {
    result[i] = initial;
  }

  return result;
};

console.log(Array.dim(10, 777));

Array.matrix = function (n, m, initial) {
  var result = [];

  for (var i = 0; i < n; i++) {
    result[i] = [];

    for (var j = 0; j < m; j++) {
      result[i][j] = initial;
    }
  }

  return result;
};

console.log(Array.matrix(3, 4, 7));
