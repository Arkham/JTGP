# JavaScript Types

- Numbers
- Strings
- Booleans
- Objects
- Functions
- Arrays


---
# Numbers

```javascript
0.1 + 0.2
// 0.30000000000000004
// WAT
```


---
# Math

```javascript
Math.sin(3.5);
// -0.35078322768961984

var r = 2;
var d = Math.PI * r * r;
// 12.566370614359172
```


---
# parseInt

```javascript
parseInt("123")
// 123

parseInt("010", 10)
// 10

parseInt("011", 2)
// 3

parseInt("hello", 10)
// NaN
```


---
# NaN

Not-a-Number

```javascript
NaN + 5
// NaN

isNaN(NaN)
// true

NaN == NaN
// false
// WAT
```


---
# Infinity

```javascript
1 / 0
// Infinity

-1 / 0
// -Infinity

Infinity == Infinity
// true
// OK!
```


---
# Infinity

```javascript
isFinite(1/0)
// false

isFinite(-Infinity)
// false

isFinite(NaN)
// false
```


---
# Strings

```javascript
var greeting = "Hello World!";

greeting.length
// 12

greeting.charAt(0)
// 'H'

greeting.replace("Hello", "Goodbye Cruel")
// 'Goodbye Cruel World!'

greeting.toUpperCase()
// 'HELLO WORLD!'
```


---
# Strings

```javascript
"hello" + " " + "world"
// 'hello world'

"3" + 4 + 5
// '345'

3 + 4 + "5"
// '75'
// WAT
```


---
# Null or Undefined?

- *null*: no value
- *undefined*: uninitiliazed value, default value for variables


---
# Null or Undefined?

```javascript
var hello
// undefined

hello = null
// null
```


---
# Falsy

- false
- 0
- ""
- NaN
- null
- undefined


---
# Equality

```javascript
1 == 1
// true

"john" == "john"
// true
```


---
# Equality

```javascript
"" == 0
// true

"0" == 0
// true

"" == "0"
// false
// WAT
```


---
# Equality

```javascript
false == undefined
// false

false == null
// false

null == undefined
// true
// WAT
```


---
# Equality

```javascript
"" === 0
// false

"0" === 0
// false

"" === "0"
// false

false !== undefined
// true

false !== null
// true

null !== undefined
// true
```


---
# Equality

- Always use === and !==
- Coffeescript converts == to ===, by default


---
# Objects

- HashMaps in Java
- Associative arrays in PHP
- Dictionaries in Python
- Hashes in Perl and Ruby
- Hash tables in C and C++


---
# Objects

```javascript
var me = {};

me.name = 'Ju'
// 'Ju'

me['name'] = 'Ju'
// 'Ju'
```


---
# Nested Objects

```javascript
var welaika = {
  name: 'weLaika',
  address: {
    city: 'Turin',
    street_name: 'Corso Vigevano, 14',
    postal_code: '10155'
  }
}

welaika.address.city = 'Milan'
welaika['address']['country'] = 'Italy'
```


---
# Objects

```javascript
var me = {
  first_name: 'Ju',
  last_name: 'Liu',
  twitter: '@arkh4m'
};

for (var key in me) {
  console.log(key, me[key]);
}

// first_name Ju
// last_name Liu
// twitter @arkh4m
```


---
# Arrays

```javascript
var a = ['dog', 'cat', 'hen'];

a.length
// 3

a.push('King Kong')
// 4

a
// [ 'dog', 'cat', 'hen', 'King Kong' ]
```


---
# Arrays

```javascript
var a = ["dog", "cat", "mouse"];

a[100] = "fox";

a.length
// 101
```


---
# Arrays

```javascript
var ary = ["zero", "one", "two", "three"];

for (var i = 0, len = ary.length; i < len; i += 1) {
  console.log(i, ary[i]);
}

// 0 'zero'
// 1 'one'
// 2 'two'
// 3 'three'
```


---
# Intermezzo

https://www.destroyallsoftware.com/talks/wat


---
# Control Structures

```javascript
if (condition) {
  console.log("IF");
} else if (otherCondition) {
  console.log("ELSE IF");
} else {
  console.log("ELSE");
}

for (var i = 0; i < 10; i ++) {
  console.log(i);
}

while (true) {
  console.log('JS is awesome');
}
```


---
# Control Structures

```javascript
var name = o && o.getName();

var name = otherName || "default";

var allowed = (age > 18) ? "yes" : "no";
```


---
# Functions

```javascript
var add = function (a, b) {
  var total = a + b;
  return total;
}

add()
// NaN

add(1)
// NaN

add(1,2)
// 3

add(1,2,3)
// 3
```


---
# Functions

```javascript
var add = function () {
  var total = 0;

  for (var i = 0, len = arguments.length; i < len; i += 1) {
    total += arguments[i];
  }

  return total;
}

add(1,2,3,4,5,6,7,8,9,10)
// 55
```


---
# Functions

```javascript
var avg = function() {
  return add(arguments) / arguments.length;
}

avg(1,2,3,4,5,6,7,8,9,10)
// NaN
```


---
# Functions

```javascript
var avg = function() {
  return add.apply(null, arguments) / arguments.length;
}

avg(1,2,3,4,5,6,7,8,9,10)
// 5.5
```


---
# Self Invoking

```javascript
(function () {
  return "Hello World!";
})();

// 'Hello World!'
```


---
# Scope

```javascript
var a = 1, b = 2;

var sum = function() {
  var b = 3;
  a += b;
}

sum();

a
// 4

b
// 2
```


---
# OOP

```javascript
var makePerson = function (first, last) {
  return {
    first: first,
    last: last
  };
};

var ju = makePerson('Ju', 'Liu');

ju
// { first: 'Ju', last: 'Liu' }
```


---
# OOP

```javascript
var personFullName = function (person) {
  return person.first + " " + person.last;
}

personFullName(ju)
// 'Ju Liu'

var personFullNameReversed = function (person) {
  return person.last + " " + person.first;
}

personFullNameReversed(ju)
// 'Liu Ju'
```


---
# OOP

```javascript
var makePerson = function (first, last) {
  return {
    first: first,
    last: last,
    fullName: function () {
      return this.first + " " + this.last;
    },
    fullNameReversed: function () {
      return this.last + " " + this.first;
    }
  };
};

var aaron = makePerson('Aaron', 'Patterson');

aaron.fullName()
// 'Aaron Patterson'

aaron.fullNameReversed()
// 'Patterson Aaron'
```


---
# This

```javascript
var matz = makePerson('Yukihiro', 'Matsumoto');

matz.fullName()
// 'Yukihiro Matsumoto'

var matzName = matz.fullName;

matzName()
// 'undefined undefined'

matzName.apply(matz)
// 'Yukihiro Matsumoto'
```


---
# New

```javascript
var Person = function (first, last) {
  this.first = first;
  this.last = last;

  this.fullName = function () {
    return this.first + " " + this.last;
  };

  this.fullNameReversed = function () {
    return this.last + " " + this.first;
  };
};

var beppe = new Person('Giuseppe', 'Garibaldi');

beppe.fullName()
// 'Giuseppe Garibaldi'

beppe.fullNameReversed()
// 'Garibaldi Giuseppe'
```


---
# Prototype

```javascript
var Person = function (first, last) {
  this.first = first;
  this.last = last;
};

Person.prototype.fullName = function () {
  return this.first + " " + this.last;
};

Person.prototype.fullNameReversed = function () {
  return this.last + " " + this.first;
};

var scarlett = new Person('Scarlett', 'Johansson');

scarlett.fullName()
// 'Scarlett Johansson'

scarlett.fullNameReversed()
// 'Johansson Scarlett'
```


---
# Prototype Chain

1. scarlett.fullName()
2. scarlett has no method fullName
3. scarlett.prototype has method fullName
4. scarlett.prototype.fullName.apply(scarlett)


---
# DYNAMIC

```javascript
var tony = new Person('Tony', 'Stark');

Person.prototype.industriesName = function () {
  return this.last + " Industries";
}

tony.industriesName()
// 'Stark Industries'
```


---
# Open Prototypes

```javascript
String.prototype.reverse = function () {
  return this.split('').reverse().join('');
}

"What a wonderful world".reverse()
// 'dlrow lufrednow a tahW'
```


---
# Inner Functions

```javascript
var makeFunction = function () {
  return function () {
    return 42;
  }
}

var meaningOfLife = makeFunction();

meaningOfLife()
// 42
```


---
# Inner Functions

```javascript
var makeFunction = function () {
  return function (word) {
    return "Your word is " + word;
  };
};

var wordFunc = makeFunction();

wordFunc("the bird");
// 'Your word is the bird'
```


---
# Inner Functions

```javascript
var makeAdder = function (a) {
  return function (b) {
    return a + b;
  };
};

var addFour = makeAdder(4);

addFour(38)
// 42

addFour(23)
// 27

var subtractFifteen = makeAdder(-15);

subtractFifteen(100)
// 85
```


---
# Inner Functions

```javascript
var pythagoras = function (a, b) {
  var sum = 0;

  var square = function (num) {
    return num * num;
  };

  sum = square(a) + square(b);

  return Math.sqrt(sum);
}

pythagoras(3,4)
// 5
```


---
# Inner Functions

```javascript
var add = function (a, b) {
  if (typeof b === 'undefined') {
    return function (x) {
      return a + x;
    }
  } else {
    return a + b;
  }
};

add(1, 3)
// 4

var addFour = add(4);

addFour(99)
// 103

addFour(53)
// 57
```


---
# Inner Functions

```javascript
Person.prototype.fullNameTwice = function () {
  var doubleFullName = function () {
    var value = this.fullName();
    return value + " " + value;
  };

  return doubleFullName();
}

var scarlett = new Person('Scarlett', 'Johansson');

scarlett.fullNameTwice()
// TypeError: Object [object global] has no method 'fullName'
// WAT
```


---
# Inner Functions

```javascript
Person.prototype.fullNameTwice = function () {
  var that = this;

  var doubleFullName = function () {
    var value = that.fullName();
    return value + " " + value;
  };

  return doubleFullName();
}

var scarlett = new Person('Scarlett', 'Johansson');

scarlett.fullNameTwice()
// 'Scarlett Johansson Scarlett Johansson'
```


---
# THANKS!

@arkh4m
