// console.log("Aditya");

/* 
    If used postfix, with operator after operand (for example, x++), 
    the increment operator increments and returns the value before incrementing.

    If used prefix, with operator before operand (for example, ++x), 
    the increment operator increments and returns the value after incrementing
*/


console.log('Yes the code is working');


function outerFunction() {
  let outerVariable = 'I am outer';

  function innerFunction() {
    console.log(outerVariable); // Inner function has access to outerVariable
  }

  return innerFunction; // Return innerFunction, capturing outerVariable
}

// Calling outerFunction returns innerFunction
let closureExample = outerFunction();

// Even though outerFunction has finished executing, innerFunction still has access to outerVariable
closureExample(); // Output: I am outer


let con = 'Aditya Vinod regde';
let ans = con.toUpperCase();

console.log(ans);

// const contact = document.getElementById('intext').innerHTML = 'Yes the content is correct';

// let answer = contact.toUpperCase();


const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person1 = {
  firstName:"John",
  lastName: "Doe"
}

const person2 = {
  firstName:"Mary",
  lastName: "Doe"
}

// console.log(person.fullName.call(person1, "Oslo", "Norway")) 
console.log(person.fullName.apply(person1, ["Oslo", "Norway"])) 
console.log(person.fullName.call(person2, ["Oslo", "Norway"])) 





let summ = Math.max(20,55,85,956,74,852,1000,555);

console.log(summ);

console.log(Math.max.apply(null, [1,2,3]));
console.log(Math.max.apply(Math, [1,5,9,88,207,3]));







// Function Borrowing
// With the bind() method, an object can borrow a method from another object.


const persons = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}

let fullName = persons.fullName.bind(member);
console.log(fullName());

// other expmple



const personans = {
  firstName:"John",
  lastName: "Doe",
  display: function() {
    return this.firstName + " " + this.lastName;
  }
}

let display = personans.display.bind(personans);
setTimeout(display, 3000)


function myFunction() {
  let a = 4;
  let aa = a * a;
  console.log(aa);
}

// A closure is a function having access to the parent scope, even after the parent function has closed.

// JavaScript has a built in function for converting JSON strings into JavaScript objects:

// JSON.parse()

// JavaScript also has a built in function for converting an object into a JSON string:

// JSON.stringify()

// Convert a JavaScript object into a string with JSON.stringify().

const obj = {name: "John", age: 30, city: "New York"};
const arr = ["John", "Peter", "Sally", "Jane"];
const myJSON = JSON.stringify(obj);
const myJSON1 = JSON.stringify(arr);
console.log(myJSON, myJSON1);


let x= 110;
let y;
let z = x+ y;
console.log(z);
y= 15;