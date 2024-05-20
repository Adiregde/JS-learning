const { error, log } = require('console');
const ans = require('./tutorial')

// console.log(ans);

// // console.log(new ans.SomeObject())

// console.log('we got the output')

// console.log('new array will print below');

// console.log(ans.rest());

// console.log(ans.adding());

// events and emitter in node JS

// const EventEmitter = require('events');
// const eventEmitter = new EventEmitter();

// eventEmitter.on('tutorial',(n1,n2) => {
//     // console.log('inside the event emiiter occured');
//         // console.log(n1+n2);
// })

// eventEmitter.emit('tutorial',2,5)



// class Person extends EventEmitter{
//     constructor(name){
//         super();
//         this._name = name;
//     }

//     get name(){
//         return this._name;
//     }
// }

// let Pedro = new Person('Aditya');
// Pedro.on('name', () => {
//     // console.log('My name is ' + Pedro.name);
// });

// Pedro.emit('name');


//working with the readline module  

// const readline = require('readline');

// const rl = readline.createInterface({input: process.stdin, output: process.stdout});

// let num1 = Math.floor((Math.random() * 10) + 1);
// let num2 = Math.floor((Math.random() * 10) + 1);
// let result = num1 + num2;

// rl.question(`what is ${ num1 } + ${ num2 }? \n`,
// (userinput) =>{
//     if(userinput.trim() == result){
//         rl.close();
//     }
//     else{
//         rl.setPrompt(`The answer you tried ${userinput} is incorrect please try again \n`);
//         rl.prompt();
//         rl.on('line',(userinput)=>{
//             if(userinput.trim() == result){
//                 rl.close();
//             }
//             else{
//                 rl.setPrompt(`Your answer of ${userinput} is incorrect you can try again for correct answer\n`);
//                 rl.prompt();
//             }
//         })
//     }
// });

// rl.on('close',() =>{
//     console.log('Correct!!!!!');
// });


//ending on with the readline module  


//working with the file system module (creating , reading,deleating, renaming)

// const fs = require('fs');

//create a file

// fs.writeFile('example.txt',"this is an example file",(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('FIle is craeted successful.');
//         //in the below line if we dont pass or mention the encoding type in the 2nd parameter then we might the the output as binary numbers
//         // <Buffer 74 68 69 73 20 69 73 20 61 6e 20 65 78 61 6d 70 6c 65 20 66 69 6c 65>
//         fs.readFile('example.txt','utf-8',(err,file)=>{
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 console.log(file);
//             }
//         });
//     }
// });

//rename mentod

// fs.rename('exmp.txt', 'examplee.txt',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('successfully renameed the value of the file');
//     }
// }); 

//append data into the file.

// fs.appendFile('examplee.txt', 'Date is being transfer from th file',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('sucsseful data is appended into the file');
//     }
// });



//delete the file

// fs.unlink('examplee.txt',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('the file is deleted sucessfuly form the file');
//     }
// });



// create and deleting the files in the folders format.

// fs.mkdir('tutorial',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         fs.writeFile('./tutorial/a.txt','123',(err)=>{
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 console.log('sucessfully created the folder and the file ');
//             }
//         });
//     }
// });

// below code is to delete the foler

// fs.rmdir('tutorial', (err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('The file is deleted from the folder');
//     }
// });

// fs.unlink('./tutorial/a.txt',(err)=>{
//     if(err)
//     console.log(err);
//     else{
//         fs.rmdir('tutorial',(err)=>{
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 console.log('the folder is deleted');
//             }
//         });
//     }
// });


//multiple files are there and if we want to delete of create it.

// fs.readdir('example',(err , files)=>{
//     if(err)
//         console.log(err);
//     else
//     for(let file of files){
//         fs.unlink('./example/' + file, (err)=>{
//             if(err)
//             console.log(err);
//             else{
//                 console.log('The files have been deleted sucecssfully');
//             }
//         });
//     }
// });


// working with the readable and writeable Streams

    // const readStream = fs.createReadStream('./example.txt','utf8');
    // const writeStream = fs.createWriteStream('exmp.txt');
    // readStream.on('data',(chunk)=>{
    //     writeStream.write(chunk);
    // });

    // const readStream = fs.createReadStream('./example.txt', 'utf-8');
    // const writeStream = fs.createWriteStream('exmp.txt');
    
    // readStream.on('data', (chunk) => {
    //     writeStream.write(chunk);
    // });
    
    // readStream.on('end', () => {
    //     console.log('Finished reading from the file.');
    //     writeStream.end(); // Close the write stream when done writing
    // });
    
    // readStream.on('error', (err) => {
    //     console.error('Error reading from the file:', err);
    // });
    
    // writeStream.on('finish', () => {
    //     console.log('Data has been written to the file.');
    // });
    
    // writeStream.on('error', (err) => {
    //     console.error('Error writing to the file:', err);
    // });

    
// why to use the streams because it uses the very buffer to hold the memory,data, or content into it rather then the readfile methods. memory efficient for data to be reaad and chunk.

// pipes and pipe chaining

// const fs = require('fs');
// const zlib = require('zlib');
// const gunzip = zlib.createGunzip();
// const readStream = fs.createReadStream('./exmp.txt.gz');
// const writeStream = fs.createWriteStream('exmpuncompressed.txt');

// readStream.pipe(gunzip).pipe(writeStream);


// creat a HTTP Serve using the HTTP module

// const https = require('https');
// const server = https.createServer((req,res)=>{
//     if(req.url === '/'){
//         res.write('yes we are in the node js');
//         res.end();
//     }else{
//         res.write('we are out of the url with other domain');
//         res.end();
//     }
// });

// server.listen('300');


// to create a package json file run the this line of code in the terminal.
// npm init
// after that this are the questions we have to ans.
// package name: (nodejs-learning)
// version: (1.0.0)
// description: Learinng Node JS
// entry point: (index.js)
// test command:
// git repository:
// keywords:
// author: Aditya Vinod Regde
// license: (ISC)


/// install the packages using nom


// const exmp = require('lodash');
// let example = exmp.fill([1,5,2,2,54,6,641,24,], 'Yes it is working',1,4);
// console.log(example);

// semantic versioning


// const sum = ( n1,n2) => {n1 + n2}
// module.exports = sum;


const answer = require('./tutorial');

console.log(answer(3,6));