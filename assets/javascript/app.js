(function(){
	var questions =[{
		question: "What character would steal children from the parents if they couldn't guess his name?",
		answer: ["Donald Trump", "Rumple Stiltskin", "The Grim Reaper", "The Grinch"],
		correctAnswer: 1
	},{
		question: "Where did Hansel and Gretle get lost?",
		answer: ["Somewhere in the Mid West", "Top of a mountain", "The woods", "A pay toilet in Scotland"],
		correctAnswer:2
	},{
		question: "What character traded the family cow for a handful of magic beans?",
		answer: ["Gomer Pile", "Jack Skeleington", "Jack B. Nimble", "Jack"],
		correctAnswer:3
	},{
		question: "What story had a neurotic character who thought the sky was falling?",
		answer: ["Chicken Little", "Stewart Little", "The Ghost and Mr. Chicken", "The Princess and the Pea"],
		correctAnswer: 0
	},{
		question: "Which story had a wolf that could blow down your house and then would eat you?",
		answer: ["Little Red Riding Hood", "The Three Little Pigs", "UnderWorld", "Donald Trumps Presidential Campaign"],
		correctAnswer: 1
	},{
		question: "Which Disney movie cover picture had to be replaced because of a phalic symbol?",
		answer: ["Alladin", "Cinderella", "Beauty and the Beast", "The Little Mermaid"],
		correctAnswer: 3
	},{
		question: "In which story featured a white rabbit running away saying 'I'm late for a very important date!'",
		answer: ["Snow White", "Beauty and the Beast", "Alice in Wonderland", "Reservoir Dogs"],
		correctAnswer:2
	},{
		question: "In what story did a group of dedicated men serve one woman?",
		answer: ["England", "Pulp FIction", "Dogma", "Snow White and the 7 Dwarves"],
		correctAnswer: 3
	}
];


 var currentQuestion = 0;
 var userGuess = [];
 var quizOver = false;
 setTimeOut(timeUp, 15 * 1000);
 var game = $('#game');
 displaynext();

$(document).ready(function() {
	function startGame(){
		$('#startButton').on('click', function(){
			 displayquestions();
			 setTimeOut(timeUp, 15*1000)
		})
	} 
	function timeUp(){
		$('<h3> Time Left</h3>').html('0');
		alert('Time is Up!' );
	}

  //Display the first question:
  // displayCurrentQuestion();

  $(this).find(".quizMessage").hide();

  //On clicking start, display the next question
  $(this).find("#startButton").on("click", function() {
    if (!quizOver) {

//       value = $("input[type='radio']: checked").val();

//       if (value == undefined) {
//         $(document).find(".quizMessage").text("Please select an answer");
//         $(document).find(".quizMessage").show();
//         } else {
//         $(document).find(".quizMessage").hide();
//         if(value == questions[currentQuestion].correctAnswer) {
//           correctAnswer++;
//         }
//         currentQuestion++;
//         if(currentQuestion < questions.length) {
//           displayCurrentQuestion();
//         }else {
//           displayScore();
//           //$(document.find("nextButton").toggle();
//           //$(document).find(".playAgainButton").toggle();
//           //Change the text in the next button to ask if user wants to play again.
//           $(document).find(".nextButton").text("Play Again?");
//           quizOver = true;
//         }
//       }
//     }else {
//        {//quiz is over and clicked the nextButton (which should display as 'Play Again?')
//        quizOver = false;
//        $(document).find(".nextButton").text("NextQuestion");
//        resetQuiz();
//        displayCurrentQuestion();
//        hideScore();
//      }

//    };

//  });
//  //This displays the currentQuestion AND choices:
//  function displayCurrentQuestion() {
//    console.log("In display current question");

//    var question = questions[currentQuestion].question;
//    var questionClass = $(document).find(".quizContainer > .question");
//    var choiceList= $(document).find(".quizContainer > .choiceList");
//    var numChoices = question[currentQuestion].choices;

//    //Here I will set the questionClass text to the currentQuestion
//    $(questionClass).text(question);

//    //Remove all <li> elements.
//    var choice; for (i = 0; i < numChoices; i++) {
//      choice = questions[currentQuestion].choices[i];
//      $('<li><input type="radio" value =' + 1 + ' name = dynradio" />' + choice + '</li>').appendTo(choiceList);
//    }

//  }
//   function displayScore() {
//    $(document).find(".quizContainer > .result").text("You score: "+ correctAnswer + " out of: " + questions.length);
//    $(document).find(".quizContainer > .result").show();

//    function hideScore() {
//      $(document).find(" .result").hide();
//  }
// }
}
)})
   
