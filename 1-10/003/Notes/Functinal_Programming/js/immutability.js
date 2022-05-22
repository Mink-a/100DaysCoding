// cannot change =>immutable
// const greet = "hello";

// const person = Object.freeze({
//   fname: "joe",
// });

// person.lname = "white";

const ind = Object.freeze([0, 1, 2, 3, 4, 5]);
function addElement(arr) {
  // ind.push(arr.length);

  return Object.freeze([...arr, arr.length]);
}

console.log(addElement(addElement(addElement(ind))));
