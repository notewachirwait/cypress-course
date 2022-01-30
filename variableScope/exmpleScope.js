//global scope

var myVar = "apple"; // Declare a global variable
function checkscope() {
  var myVar = "mango"; // Declare a local variable
  console.log(myVar); // Output is mango
}
console.log(myVar); // Output is apple

// block scope

const colour = () => {
  let homeColour = "blue";
  return homeColour;
};

console.log(colour()); // Output is blue
