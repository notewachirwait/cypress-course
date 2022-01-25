// example 1:  We are changing the value of the const variable so that it returns an error.

// const a = 10;
// function changeValue() {
//   a = 9;
//   console.log(a);
// }
// changeValue();

// example 2: change value of object
const a = {
  prop1: 10,
  prop2: 9,
};
function changeValue() {
  console.log("before change value a is::", a);
  a.prop1 = 12;
  console.log("after change value a is::", a);
}
changeValue();

//  It is not allowed
// a = {
//   b: 10,
//   prop2: 9,
// };

// example 3 : change value of array

const member = [];
member.push("banana"); // สามารถทำได้ ! ตัวแปร member ไม่ได้ถูก assign ใหม่ แต่ถูกแปลงค่าข้างใน
console.log(member[0]); // "banana"
// member = ["apple"]; // เกิด error เพราะว่าไม่สามารถ assign ค่าซ้ำได้สำหรับตัวแปรที่ประกาศด้วย cons
