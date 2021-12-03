let x = 4;
let y = 9;
let r = 10;
let z = x * x + y * y;

alert(
  Math.sqrt(z) > r
    ? "This point lies outside the circle"
    : "This point lies inside the circle"
);
