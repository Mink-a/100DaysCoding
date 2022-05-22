// PURE
function add(a, b) {
  return a + b;
}

add(1, 2); // 3
add(1, 2); // 3

// INPURE
function add(x, y) {
  console.log(x + y); // impure produces sideeffect
  return x + y;
}
add(1, 3); // 3
