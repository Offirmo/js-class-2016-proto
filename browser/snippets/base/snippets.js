import _ from 'lodash';

"ABCD".toLowerCase();

[ 1, 2 ].length;

[ 1, 2, 3, 4 ].slice(2, 3);

[ 'Hi', 'World' ].map(function(t) {
  return t.toLowerCase();
});

[ 'Hi', 'World' ].map(
  T => t.toLowerCase()
);


let foo = [
typeof 0    // "number"
typeof true // "boolean"
typeof "foo" // "string"
typeof {} // "object"
typeof undefined // "undefined"

typeof null  // "object"
typeof function(){} // "function"
typeof NaN  // "number"

typeof []  // "object"
typeof new String("lalala")  // "object"
];


