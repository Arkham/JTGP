///////////////////
// array methods //
///////////////////

////////////
// concat //
////////////

console.log([1,2,3].concat([4,5,6]));
// [1, 2, 3, 4, 5, 6]

//////////
// join //
//////////

console.log(['a', 'b', 'c', 'd'].join(''));
// abcd

/////////
// pop //
/////////

var ary = [1, 2, 3];
console.log(ary.pop());
// 3
console.log(ary);
// [1, 2]

//////////
// push //
//////////

var ary = [1, 2];
console.log(ary.push(['hello', 'world'], true));
// 4
console.log(ary);
// [1, 2, ['hello', 'world'], true]

/////////////
// reverse //
/////////////

console.log([1, 2, 3].reverse());
// [3, 2, 1]

/////////
// pop //
/////////

var ary = [1, 2, 3];
console.log(ary.pop());
// 1
console.log(ary);
// [2, 3]

// this is generally much slower than pop, since all elements keys have to
// be shifted back: remember that arrays in js are actually objects...

///////////
// slice //
///////////

var ary = ['a', 'b', 'c'];
console.log(ary.slice(0, 1));
// ['a']
console.log(ary.slice(1));
// ['b', 'c']
console.log(ary.slice(1, 2));
// ['b']
console.log(ary.slice());
// ['a', 'b', 'c']
console.log(ary.slice(0, 3));
// ['a', 'b', 'c']

//////////
// sort //
//////////

var ary = [1,6,4,15,24,8];
console.log(ary.sort());
// [1, 15, 24, 4, 6, 8] WAT

console.log(ary.sort(function (a, b) {
  return a - b;
}));
// [1, 4, 6, 8, 15, 24]

////////////
// splice //
////////////

var ary = ['a', 'b', 'c'];
console.log(ary.splice(1, 1));
// ['b']
console.log(ary);
// ['a', 'c']
console.log(ary.splice(1, 0, 'd', 'e'));
// []
console.log(ary);
// ['a', 'c', 'd', 'e']

/////////////
// unshift //
/////////////

var ary = [1, 2, 3];
console.log(ary.unshift(0));
// 4
console.log(ary);
// [0, 1, 2, 3]

