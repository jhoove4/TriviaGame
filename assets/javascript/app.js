var numQues = 8;

// Insert number of choices in each question
var numChoi = 4;

// Insert number of questions displayed in answer area
var answers = new Array(8);

// Insert answers to questions
answers[0] = "Rumple Stiltskin";
answers[1] = "The woods";
answers[2] = "Jack";
answers[3] = "Chicken Little";
answers[4] = "The Three Little Pigs";
answers[5] = "The Little Mermaid";
answers[6] = "Alice In Wonderland";
answers[7] = "Snow White and the 7 Dwarves";

// Do not change anything below here ...
function getScore(form) {
  var score = 0;
  var currElt;
  var currSelection;
  for (i=0; i<numQues; i++) {
    currElt = i*numChoi;
    for (j=0; j<numChoi; j++) {
      currSelection = form.elements[currElt + j];
      if (currSelection.checked) {
        if (currSelection.value == answers[i]) {
          score++;
          break;
        }
      }
    }
  }
  score = Math.round(score/numQues*100);
  form.percentage.value = score + "%";
  var correctAnswers = "";
  for (i=1; i<=numQues; i++) {
    correctAnswers += i + ". " + answers[i-1] + "\r\n";
  }
  form.solutions.value = correctAnswers;
}

// (function(){
// 	var questions =[{
// 		question: "What character would steal children from the parents if they couldn't guess his name?",
// 		answer: ["Donald Trump", "Rumple Stiltskin", "The Grim Reaper", "The Grinch"],
// 		correctAnswer: 1
// 	},{
// 		question: "Where did Hansel and Gretle get lost?",
// 		answer: ["Somewhere in the Mid West", "Top of a mountain", "The woods", "A pay toilet in Scotland"],
// 		correctAnswer:2
// 	},{
// 		question: "What character traded the family cow for a handful of magic beans?",
// 		answer: ["Gomer Pile", "Jack Skeleington", "Jack B. Nimble", "Jack"],
// 		correctAnswer:3
// 	},{
// 		question: "What story had a neurotic character who thought the sky was falling?",
// 		answer: ["Chicken Little", "Stewart Little", "The Ghost and Mr. Chicken", "The Princess and the Pea"],
// 		correctAnswer: 0
// 	},{
// 		question: "Which story had a wolf that could blow down your house and then would eat you?",
// 		answer: ["Little Red Riding Hood", "The Three Little Pigs", "UnderWorld", "Donald Trumps Presidential Campaign"],
// 		correctAnswer: 1
// 	},{
// 		question: "Which Disney movie cover picture had to be replaced because of a phalic symbol?",
// 		answer: ["Alladin", "Cinderella", "Beauty and the Beast", "The Little Mermaid"],
// 		correctAnswer: 3
// 	},{
// 		question: "In which story featured a white rabbit running away saying 'I'm late for a very important date!'",
// 		answer: ["Snow White", "Beauty and the Beast", "Alice in Wonderland", "Reservoir Dogs"],
// 		correctAnswer:2
// 	},{
// 		question: "In what story did a group of dedicated men serve one woman?",
// 		answer: ["England", "Pulp FIction", "Dogma", "Snow White and the 7 Dwarves"],
// 		correctAnswer: 3
// 	}
// ];


//  var currentQuestion = 0;
//  var userGuess = [];
//  var quizOver = false;
//  setInterval(timeUp, 15 * 1000);
//  var game = $('#game');
//  displaynext();
//  var timeLeft= 15;

// 	//start the game and send the page to the first question, start the timer
// 		//start the counter and display the question with answer choices

// 	//timer counts down from 15, user either answers or runs out of time
// 	//page gives the correct answer and moves to the next question
// 	//repeats this until all the questions have been answered
// 	//final score is given and game resets
// 	$(document).ready(function() {

// 	function startGame(){
// 		$('#startButton').on('click', function(){
// 			var startButton = $(this).attr('timeLeft');
// 			 currentQuestion = questions[Math.floor(Math.random()*questions.length)];
// 			 console.log(currentQuestion);
// 			 displayquestions();
// 			 setTimeOut(timeUp, 15*1000)
// 			 console.log(timeUp);
// 		})
// 	} 
// 	function run(){
// 		counter = setInterval(decrement, 1000);
// 	};
	
// 	function decrement(){
// 		timeLeft--;
// 		$('<h3> Time Left</h3>').html('0');
// 	};

// }
// )})
   
