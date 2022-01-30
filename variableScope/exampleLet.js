// example: 1
let member = "Iphone X";
member = "Iphone 11";
console.log(member);

// example: 2
let x = 3;
if (x === 3) {
  let y = 4;
  console.log("This is y : ", y);
}
// console.log("This is y outside: ", y); // y ไม่สามารถประกาศนอก scope block function ได้

// example: 3
let a = 10;
if (true) {
  let a = 9;
  console.log(a); // It prints 9
}
console.log("a is :", a);
