// defining variables 

let name1 = "AG";
let age = 21;

name1 = "Leo";

const class_name = "source";
console.log(name1)

// conditionals and comparisons 
let num = 12

if (num === 12) {
  console.log("a dozen")
}
else if (num === 6) {
  console.log("a half dozen")
}
else if (num < 6 || num > 12) {
  console.log("very small or very large")
}

// ternary 

let namelength = name1.length > 8 ? "long name" : "short name"
console.log(namelength)

let over21 = age !== 21 ? "hi" : 12312;

// defining functions 

function add(num1, num2) {
  return num1 + num2;
}

// a function as a variable 

let subtract = function(num1, num2) {
  return num1 - num2;
};

console.log("subtract result")
console.log(subtract(9, 6)); 

// arrow syntax

let multiply = (num1, num2) => {
  return num1 * num2;
};

let divide = (num1, num2) => {
  let result = num1 / num2;
  return result;
};

// one line arrow function 

let remainder = (num1, num2) => num1 % num2;

console.log("remainder:")
console.log(remainder(10, 4));

// creating an object

let person = {
  name: "AG",
  age: 21
};

person.name = "Byron";
person.year = 3;

console.log("Name:" + person.name);
console.log("Age: " + person.age);
console.log("Year: " + person.year);

// creating an array 

let classes = [
  "Source",
  "Source Lite",
  123123,
  { name: "AG" },
  () => console.log("HI")
];

// adding to an array 
classes.push("Node");
classes.push("Wireframe");

// printing an array  
console.log(classes);
console.log("classes length:", classes.length)

// removing from an array 
classes.pop();
classes.pop();

console.log(classes);

// shift and unshift 
classes.unshift("new first item");
console.log(classes);
classes.shift();
console.log(classes);

// loops & forEach 

for (let i = 0; i < classes.length; i++) {
  console.log(classes[i]);
}

classes.forEach((element) => console.log(element));