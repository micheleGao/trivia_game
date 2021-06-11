<img width="875" alt="Screen Shot 2021-06-11 at 9 33 27 AM" src="https://user-images.githubusercontent.com/72947727/121694483-289ab780-ca98-11eb-91c7-ac5d563ebc79.png">


# Trivia_game:
This game was inspired from testings ones memory, or knowledge on the basis of entertainment. These sets of questions that were used are frequently asked in some trivia. 

The questions used were from this site:
"https://www.quizbreaker.com/trivia-questions"

### Technologies used:
1. Javascript: loops(for of, for each), object, array, event listeners, callback and DOM manipulation.
2. CSS
3. HTML
4. Bootstrap: modal

### Contribution Guidelines:
1. Dry code
2. An exit strategy for the player 
3. Innovative ideas for populating the questions

### Game Description:
This game only has a set of five questions, and once the player has finished selecting their answers in the choices provided by the radio button. Once submitted, the answers are then evaluated by the javascript conditional statement to see if it is true.

### Win Conditions:
Winning conditions are if you scored a hundred with the correct answers, which is then evaluated by the values given in the radio button, to the the value of the correct answer, before the timer ends.

### Lose Conditions:
Losing conditions is scored below 80. If you don't submit anything before the timer ends, your score will populate at the end of the page and the restart button will then refresh the page again to start over.

## Lessons/ongoing issues:
- I originally had planned to create a carousel which switched from one question to the next. However, giving it some thought, I wanted a foundation to build on. During wireframing, it had dawned on me, it was going to be more challenging then intended. I had settled for a MVP so it is in working order and I can build onto it with  more levels and more questions. I also, had some trouble dealing with the radio buttons, not understanding they were in an array. Checking if they were checked off and evaluating their values of  the correct answer in the object, made it a bit challenging than intended.
- I also, had originally tried to format this code with some grid, however, with so many labels and so many divs and the modal, my styling because we hard to manage, things were beginning to over lap, words were missing. Instead of the spending hours of trying to fix the issue, I decided to spend some time to fix my bugs. 
    
### ongoing issues
- Work on dry coding.

### Bug fixes
-There were a few issues with the winning condition and the losing state. I ultimately had to create separate functions and invoke them in the populate question function. 

## Focusing on user experience:
-  When arriving on the page, there should be a modal, which states the detailed instructions. I also tried to make the fonts a bit more exciting, and have a timer, so they didn't feel like they are being quizzed, but more of a game. I tried to make the display of score and winning/losing state easy to read at the top of the game. If the player wanted to replay the button would be easy to find.

### Lessons learned:
- Along the way, making this project, I was a bit over ambitious. I had alot of plans for my wireframing, but had come to the conclusion functionality matter most before all.
- There will always be bugs that pop, however, with patience I was able to fix them.

## Current Status:
- WIP.


