// https://medium.com/@pakawatmange/scope-var-let-const-%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%A2%E0%B8%B1%E0%B8%87%E0%B9%84%E0%B8%87-d614c4649aa9

// example : 1
function fruitCategory() {
  var category = ["banana", "apple", "mango"];
  var fruit = "orange";
  console.log(fruit);
  console.log(fruitCategory);
  console.log(category); //["banana", "apple", "mango"]
}
// console.log(category); //is not defined
//ReferenceError เพราะ category ไม่สามารถเข้าถึงได้จากภายนอก function
fruitCategory();

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
// console.log(fruit);   is not defined
