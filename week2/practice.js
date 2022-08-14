// defining variables 

let name = "AG";
let age = 21;

name = "Leo";

const class_name = "source";

// ternary 

let over21 = age !== 21 ? "hi" : 12312;

// defining functions 

function add(num1, num2) {
  return num1 + num2;
}

let subtract = function(num1, num2) {
  return num1 - num2;
};

let multiply = (num1, num2) => {
  return num1 * num2;
};

let divide = (num1, num2) => {
  let result = num1 / num2;
  return result;
};

let remainder = (num1, num2) => num1 % num2;

console.log(remainder(10, 4));

console.log(multiply(1, 4));
console.log(divide(42, 2));

console.log(subtract(10, 5));

console.log(add(5, 10));

// creating an object

let person = {
  name: "AG",
  age: 21
};

person.name = "Leo";
person.year = 4;

console.log("Name:" + person.name);
console.log("Age: " + person.age);
console.log("Year: " + person.year);

// list 

let classes = [
  "Source Pro",
  "Source Lite",
  123123,
  { name: "AG" },
  () => console.log("HI")
];
classes.push("Source");
classes.push("Node");
classes.push("Wireframe");

console.log(classes);

classes.pop();
classes.pop();

console.log(classes);

classes.unshift("new first item");
console.log(classes);
classes.shift();
console.log(classes);

// loops & forEach 

for (let i = 0; i < classes.length; i++) {
  console.log(classes[i]);
}

classes.forEach((element) => console.log(element));