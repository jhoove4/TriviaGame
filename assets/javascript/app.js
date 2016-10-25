var numQues = 8;

// Insert number of choices in each question
var numChoi = 4;
//timer
var timeInSecs= 60;
var counter;
var endTime =0;
// Insert number of questions displayed in answer area
var answers = new Array(8);
var reset = 60;
// Insert answers to questions
answers[0] = "Rumple Stiltskin";
answers[1] = "The woods";
answers[2] = "Jack";
answers[3] = "Chicken Little";
answers[4] = "The Three Little Pigs";
answers[5] = "The Little Mermaid";
answers[6] = "Alice In Wonderland";
answers[7] = "Snow White and the 7 Dwarves";


function onTimer(){
    timeInSecs--;
    //udate html timer
   $('#timer').html(timeInSecs);
    if( timeInSecs<=0){
    	stopTimer();
    	// clearInterval(counter);

    	
    }
}

function startGame(){
var t = timeInSecs;
counter =setInterval(onTimer, 1000);
}

$('#start').on('click', function(){
	startGame();
	// 	var startTime = myTime;
	// 	console.log(startTime);
	// 	startTime=parseInt(myTime);
	// $('<h3>Time Left</h3>').html(myTime);
	});

function stopTimer(){
	clearInterval(counter);
	$('#reset').on('click', function(){
		(reset);
	})


}
function reset(){
	clearInterval(counter);
	$('#reset').on('click', function(){
		(reset);
	})
}
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
$('#getScore').on('click', function(){
	stopTimer();
	var form = $("#quiz")[0];
	getScore(form);
})
$('#reset').on('click', function(){
	stopTimer();
	clearInterval(counter);
	(reset);

})
