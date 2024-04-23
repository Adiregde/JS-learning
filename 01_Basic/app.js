const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.length
  
  if (randomNumber === 1) {
    computerChoice = 'rock'
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors'
  }
  if (randomNumber === 3) {
    computerChoice = 'paper'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  if (computerChoice === userChoice) {
    result = 'its a draw!'
  }
  if ((computerChoice === 'rock' && userChoice === "paper") || (computerChoice === 'paper' && userChoice === "scissors") || (computerChoice === 'scissors' && userChoice === "rock")) {
    result = 'you win!'
  }
  if ((computerChoice === 'rock' && userChoice === "scissors") || (computerChoice === 'paper' && userChoice === "rock") || (computerChoice === 'scissors' && userChoice === "paper")){
    result = 'you lost!'
  }
//   if (computerChoice === 'paper' && userChoice === "scissors") {
//     result = 'you win!'
//   }
//   if (computerChoice === 'paper' && userChoice === "rock") {
//     result = 'you lose!'
//   }
//   if (computerChoice === 'scissors' && userChoice === "rock") {
//     result = 'you win!'
//   }
//   if (computerChoice === 'scissors' && userChoice === "paper") {
//     result = 'you lose!'
//   }
  resultDisplay.innerHTML = result
}


// function addTask() {
//     var taskInput = document.getElementById('taskInput');
//     var taskList = document.getElementById('taskList');
//     var taskText = taskInput.value.trim();
    
//     if (taskText !== '') {
//         var li = document.createElement('li');
//         li.textContent = taskText;
//         taskList.appendChild(li);
//         taskInput.value = '';
//     } else {
//         alert('Please enter a task.');
//     }
// }

// function deleteTask() {
//     let taskInput = document.getElementById('taskInput');
//     var taskList = document.getElementById('taskList');

//     alert('yes task is being deleted in few min.');
    
//     // Add delete button
//     var deleteButton = document.createElement("button");
//     deleteButton.textContent = "Delete";
//     deleteButton.onclick = function() {
//         this.parentNode.remove();
//     };
//     li.appendChild(deleteButton);
//     if(taskInput.value){
//         let deleteinputtext = document.removeChild(deleteinputtext);
//     }else{
//         alert('Please enter a text');
//     }
// }


// Function to add a new task
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var taskList = document.getElementById("taskList");
        var li = document.createElement("li");
        li.textContent = taskText;

        // Add delete button
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() {
            // alert('are you sure you want to delete the text');
            alert(`are you sure you want to delete the text ${taskText}`);
            this.parentNode.remove();
        };
        li.appendChild(deleteButton);

        taskList.appendChild(li);
        taskInput.value = "";
    }else {
        alert('Please enter a task.');
    }
}

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'Orange') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'Green') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'Yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'Red') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'Blue') {
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'Reset'){
        body.style.backgroundColor = 'lightblue';
    }
    
  });
});

