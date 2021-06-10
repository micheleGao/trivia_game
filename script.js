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
        question: " 1. What was the first toy to be advertised on television?",
        answers:{ 
            a: "Buzz Light Year", 
            b: "Mr. Potato Head",
            c: "dinosaurs"
        },
        correctAnswer:"Mr. Potato Head"
    },
    {
        question: " 2. What was the first feature-length animated movie ever released?",
        answers:{ 
            a: "Toy story", 
            b: "Beauty & the Beast",
            c: "Snow white and the seven dwarfs"
        },
        correctAnswer:"Snow white and the seven dwarfs" 
    },
    {
        question: " 3. What TV series showed the first interracial kiss on American network television?",
        answers:{ 
            a: "Star Trek", 
            b: "Keeping up with the Kardashians",
            c: "Pocahontas"
        },
        correctAnswer:"Star Trek" 
    },
    {
        question: " 4. Who created Sherlock Holmes?",
        answers:{ 
            a: "Sherlock himself.", 
            b: "Arthur Doyle",
            c: "Jason Mamao"
        },
        correctAnswer:"Arthur Doyle" 
    },
    {
        question: " 5. Which member of the Beatles married Yoko Ono?",
        answers:{ 
            a: "John Lennon", 
            b: "Chris Rock",
            c: "Ozzy Obourne"
        },
        correctAnswer:"John Lennon"
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
            label.innerHTML=`
                <input type="radio" name="question${i}" value="${trivia_Questions[i].answers[letter]}" id="answers">
                ${letter}:
                ${trivia_Questions[i].answers[letter]}
                 `
            triviaContainer.appendChild(label);
        }  
    }   
}
populateQuestions(trivia_Questions, triviaContainer);


function populateResults(trivia_Questions){
    //const answerContainer=document.querySelectorAll('#answers');
    //initializing the user's answer for the results later
    //need to select all the possible answers.
    const checkedRadio = document.querySelectorAll(`input[type="radio"]:checked`);
    let userAnswer= '';
    //initialize the score as zero for incrementing later
    let correctSelection = 0;
    //created a for loop to check the if the boxes were checked.
    for(let i=0; i<trivia_Questions.length;i++){
        //find the answer selected /checked
        if(checkedRadio[i].value === trivia_Questions[i].correctAnswer){
            //increment the score 
            correctSelection+=20;
        }
        if(correctSelection <20){
            losingState();
            
        }
        if(correctSelection === 100){
            winning();
        }


        
    }
    score.innerText= `->>>>SCORE ::: ${correctSelection} <<<<-`;
}

//event listener
submit.onclick = function(event){
    event.preventDefault();
    populateResults(trivia_Questions, triviaContainer);

}
document.addEventListener(
    "click",
    function(event) {
      // If user clicks start then close modal by calling closeModal()
      if (
        event.target.matches(".btn-close") ||
        !event.target.closest(".modal")
      ) {
        closeModal()
      }
    },
    false
  )
  
  function closeModal() {
    document.querySelector(".modal").style.display = "none";
  }

  // creating a timer for a game.
  //update the time to every 60 seconds
 
 let time = 10;
 let timer= document.getElementById('timer');
 const countdown = setInterval(function(){
    time --;
    document.getElementById('timer').innerHTML = time;
    if (time ===0) clearInterval(countdown);
 }, 1000);

 const restartButton = document.getElementById('restart');
 function restart(event){
    event.preventDefault();
    let correctSelection = 0;
    if(event.target.matches('#restart')){
        const checkedRadio = document.querySelectorAll(`input[type="radio"]:checked`);
        checkedRadio.forEach(button => button.checked=false);
        let time = 10;
        let timer= document.getElementById('timer');
        const countdown = setInterval(function(){
        time --;
        document.getElementById('timer').innerHTML = time;
        if (time ===0) clearInterval(countdown);
        }, 1000);
    }
    score.innerText= `->>>>SCORE ::: ${correctSelection} <<<<-`;
}
restartButton.addEventListener('click', restart);

function losingState(){
        let time = 10;
        let timer= document.getElementById('timer');
        const countdown = setInterval(function(){
        time --;
        document.getElementById('timer').innerHTML = time;
        if (time ===0) clearInterval(countdown);
        }, 1000);
        document.getElementById('losing-state').innerHTML= `You lost! You didn't get above 20! `

}

function winning(){
    document.getElementById('Winner').innerHTML=`YOU WON!`
}
