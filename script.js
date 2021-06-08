/* ================
Trivia Game 
====================*/
// selecting the Html for the dom later 
const triviaContainer = document.getElementById('trivia');
console.log(triviaContainer);
const results = document.getElementById('results');
console.log(results);
const submit = document.getElementById('submit');
console.log(submit);
const score = document.getElementById('score');





//object for the questions 
const trivia_Questions = [
    {
        question: "What was the first toy to be advertised on television?",
        answers:{ 
            a: "Buzz Light Year", 
            b: "Mr. Potato Head",
            c: "dinosaurs"
        },
        correctAnswer:"b"
    },
    {
        question: "What was the first feature-length animated movie ever released?",
        answers:{ 
            a: "Toy story", 
            b: "Beauty & the Beast",
            c: "Snow white and the seven dwarfs"
        },
        correctAnswer:"c" 
    },
    {
        question: " What TV series showed the first interracial kiss on American network television?",
        answers:{ 
            a: "Star Trek", 
            b: "Keeping up with the Kardashians",
            c: "Pocahontas"
        },
        correctAnswer:"c" 
    },
    {
        question: "Who created Sherlock Holmes?",
        answers:{ 
            a: "Sherlock himself.", 
            b: "Arthur Doyle",
            c: "Jason Mamao"
        },
        correctAnswer:"b" 
    },
    {
        question: "Which member of the Beatles married Yoko Ono?",
        answers:{ 
            a: "John Lennon", 
            b: "Chris Rock",
            c: "Ozzy Obourne"
        },
        correctAnswer:"a"
    }
];

console.log(trivia_Questions);
console.log(trivia_Questions[0].question);
console.log(trivia_Questions[1].answers);
console.log(trivia_Questions[1].correctAnswer);

//functions
//This will be self scoring based on the answers.
// this will need a conditional statement to compare the answers

function populateQuestions(trivia_Questions, triviaContainer){
    //store and initilize the variable being used
    // let array = [];
    // let answers;
    //for loop for each of the questions
    for(let i=0; i<trivia_Questions.length; i++){
        const arrayQuestions =[]
        arrayQuestions.push(
            ` <div class="question">${trivia_Questions[i].question}</div>`
        )
        triviaContainer.innerHTML += arrayQuestions.join('');
        //have answers in this array
        //const answers =[];
        console.log(trivia_Questions[i].question);
        console.log(i);
        // for each of the possible answers add a radio button
        for(letter in trivia_Questions[i].answers){
            //create a lable for each of the radio buttons
            const label = document.createElement('label');
            label.innerHTML=
                `
                <input type="radio" name="question${i}" value="letter" id="answers">
                ${letter}:
                ${trivia_Questions[i].answers[letter]}
                 `
            triviaContainer.appendChild(label);
        }
        
    }
}

// console.log(trivia_Questions[1].correctAnswer);
populateQuestions(trivia_Questions, triviaContainer);

//needs two parameters to perform the task
function populateResults(trivia_Questions, triviaContainer){
    //const answerContainer=document.querySelectorAll('#answers');
    //console.log(answerContainer);
    //initializing the user's answer for the results later
    let userAnswer='';
    //initialize the score as zero for incrementing later
    let correctSelection =0;
    console.log("THIS IS THE USER " +userAnswer +"INPUT")
    //create a div for the score to show results
    scoreboard = document.createElement('div');
     scoreboard.innerHTML=`<div> Score: ${correctSelection}</div>`
    for(let i=0; i<trivia_Questions.length; i++){
        //need to select all the possible answers.
        //possible ways to select to the radio buttons.
        //const answerContainer=document.querySelectorAll('#answers');
        const checkedRadio = doucument.querySelectorAll(`input[name="questions${i}"]:checked`);
        console.log("this is all the " + checkedRadio);
        //find the answer selected /checked
        //look for the three first answers first;
        
        //first select the radio buttons 
        //radioButton = document.querySelectorAll('#answers');
        console.log(userAnswer);
        //conditions for the correct answer
        if(userAnswer === trivia_Questions[i].correctAnswer && checkedRadio){
            //increment the score 
            correctSelection += 20;
            console.log(correctSelection);
            //change the color of the correct answers to the 
            //answerContainer[i].style.color='hotpink';
        }else{
            //answerContainer[i].style.color='blue';
        }

    }
}
populateResults(triviaContainer, trivia_Questions);
//call the function
 //populateQuestions(questions, triviaContainer);
//event listener
// submit.onClick = function (){
//     populateResults(questions, triviaContainer, resultsLog);
// }
//<div class="answers">${trivia_Questions[i].answers.answers}</div> 

//put labels into one div with a class name, each set of labels together. 