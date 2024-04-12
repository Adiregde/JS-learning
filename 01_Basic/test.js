// console.log("Aditya");

/* 
    If used postfix, with operator after operand (for example, x++), 
    the increment operator increments and returns the value before incrementing.

    If used prefix, with operator before operand (for example, ++x), 
    the increment operator increments and returns the value after incrementing
*/


// function x(){
//     var a=10;
//     function y(){
//         //console.log(a)
//     }
// y();
// }
// x();
// // console.log('testing correct')


// const num = [1,2,3,4,5,6,7,8,9,10];

// const sumarr = num.filter( (num) => {
//     return num > 4
// })

// console.log(sumarr);


//new method

// const sum = ['iron man', 'superman', 'captain', 'sheild', 'thor'];

// let ans = sum.filter( (sum) => {
//     if(sum.includes('man')){
//         // console.log('11111111');
//         return sum;
//     }
// })
// console.log(ans);

// const connect = document.getElementById('heading').innerHTML = 'Yes correct done';
// connect.style.background = red;

let addnum = document.querySelector('myButton').onclick = function(){
    let n1 = document.getElementById('testing1').innerText = 'clicked me yes';
    console.log('yes its correct');
}	


const ans = document.getElementById("p1").innerHTML = "New text!";

const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);


alert('Yes we are in');


// Testing the rough code in JS

function startRocket() {
  var speedInput = document.getElementById('speedInput');
  var rocket = document.getElementById('rocket');

  var speed = parseInt(speedInput.value, 10) || 1; // Get input value and fallback to 1 if non-numeric.

  rocket.style.left = "100%"; // Move the rocket to the right side of the screen.

  setTimeout(function() {
    rocket.style.left = "-100px"; // Move the rocket back to the left side of the screen.
  }, speed * 1000); // Convert speed to milliseconds.

  speedInput.value = ""; // Clear input value after starting.
}