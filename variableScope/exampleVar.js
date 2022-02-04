// example : 1
function fruitCategory() {
  var category = ["banana", "apple", "mango"];
  var fruit = "orange";
  console.log(fruit);
  console.log(fruitCategory);
  console.log(category); //["banana", "apple", "mango"]
}
// console.log(category); //is not defined
// ReferenceError เพราะ category ไม่สามารถเข้าถึงได้จากภายนอก function

// example : 2
function apple(fruit) {
  var expect = fruit;
  if (expect == "apple") {
    expect = "apple correct";
    console.log(expect); // apple
  } else {
    console.log("incorrect"); // other fruit will log incorrect
  }
  console.log(expect);
}
apple("apple");
// // console.log(fruit);   is not defined

var greeter = "apple";
greeter = "mango  instead apple";
console.log(greeter); // output is  mango  instead apple
