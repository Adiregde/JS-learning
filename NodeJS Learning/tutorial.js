// // const sum = (num1, num2) => num1 + num2;

// console.log("hello welcome to Node JS Learning");

// const x = 10;

// function ObjectSum() {
//     let x1 = 23;
//     let y1 = 20;
//     function ObjectAdd() {
//         let x2 = 50;
//         let y2 = 10;
//         let z = (x1 + y1) + (x2 + y2)
//         console.log(`Wow we got the value of z: ${z}`);
//     }
//     ObjectAdd()
// }

// class SomeObject{
//     constructor(){
//         console.log('we are inside the class objecct');
//     }
// }

// //the below 3 lines can alos be written as shown in line 33 

//     // module.exports.sum = sum;
//     // module.exports.ObjectSum = ObjectSum;
//     // module.exports.SomeObject = SomeObject;

// //or we can write the above 3 lines in one line by passing all the values in one object

// // module.exports = {sum: sum, ObjectSum: ObjectSum, SomeObject: SomeObject}





// function rest() {
//     let test = 'Testing done'
//     function resting() {
//         let test1 = 'Testing about to be done'
//         console.log(test1) 
//         console.log(test) 
//     }
//     resting()
// }

// function adding() {
//     let names = ['Spiderman', 'Ironman', 'Captain','Thor', 'Looki']
//     console.log(names)
//     console.log('names')
//     function AddingName() {
//         let newArray = ['Lady Thor', 'Black Widow', 'Vision'];
//         newArray.push(names);
//         console.log(newArray)
//     }
//     AddingName()
// }

// let aaa = (n1, n2) => n1-n2;

// module.exports = {rest: rest, adding: adding}

let sum = (n1, n2) => n1+n2;
module.exports = sum