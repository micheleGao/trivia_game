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


//functions 
function createTrivia(){
    // to store the html output
    const triviaPrint = [];
    // for each of the question and each choice to have a button
    trivia_Questions.forEach(
        (newQuestion, questionSequence) => {
            //the array for the answers
            const possibleAnswers =[];
            //for each of the possible answers create an html radio button 
            for(sequence in newQuestion.possibleAnswers){
                possibleAnswers.push(
                    `
                    <label>
                    <input type="radio" name="questions">${questionSequence}" value= "${sequence}>
                    ${sequence}:
                    ${questionSequence.possibleAnswers[sequence]}
                    </label>
                    `
                );
                console.log(possibleAnswers);
            }
            //console.log(newQuestion.possibleAnswers);
            //push the answers  and questions to the empty array to show up on the html
            triviaPrint.push(
                `<div class="questions">${newQuestion.question}</div>
                <div class="answers">${possibleAnswers.join('')}</div>
                `
            );
            // console.log(triviaPrint);
            // console.log(possibleAnswers);
        }
    
    );
    // createTrivia();
    //put it in html to populate on the page
    triviaContainer.innerText = triviaPrint.join('');
}


//console.log(createTrivia);

createTrivia(triviaContainer);


function showResults(){
    

}







//evaluating user answers 





//event listeners
//submit.addEventLister('click', showResults);



//This will be self scoring based on the answers.
// this will need a conditional statement to compare the answers