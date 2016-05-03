window.onload = function(){
 $('#start').on('click', game.start);
 $('#reset').on('click', game.reset);
 $('#reset').hide();
};

var game = {

	time:15,
	questionNum : 0,


	trivia : [
    	{id: 1, image: "<img src='assets/images/Arizona_Cardinals.jpg'>", Options: ['Atlanta Falcons', 'Arizona Cardinals', 'Seattle Seahawks', 'Toronto Blue-Jays' ], answer: 'Arizona Cardinals'},
    	{id: 2, image: "<img src='assets/images/New_York_Giants.jpg'>", Options: ['New York Giants', 'New York Jets', 'New York Yankees', 'New York Mets' ], answer: 'New York Giants'},
    	{id: 3, Question: 'Question 3?', Options: ['option1', 'option2', 'option3', 'option4' ], answer: 'option2'},
    	{id: 4, Question: 'Question 4?', Options: ['option1', 'option2', 'option3', 'option4' ], answer: 'option2'},
    	{id: 5, Question: 'Question 5?', Options: ['option1', 'option2', 'option3', 'option4' ], answer: 'option2'},
    	{id: 6, Question: 'Question 6?', Options: ['option1', 'option2', 'option3', 'option4' ], answer: 'option2'},
    ],
	

	begin: function(){
	    game.time--;
		var converted = game.timeConverter(game.time);
    	$('#display').html(converted);
    	// if (game.time == 0) {
	    // 	game.stop();
	    // 	$('#reset').show();
	    // 	$('#questionSection').empty();
	    // 	$('#responseSection').empty();
	    //  $('#resultSection').show();
	    // }
  	},
  	reset: function(){
	    game.time = 15;
	    converted = game.timeConverter(game.time);
    	$('#display').html(converted);
    	$('#reset').hide();
    	$('#start').show();
  	},
  	stop: function(){
   		clearInterval(counter);
  	},
  	
  	start: function(){
  		counter = setInterval(game.begin, 1000);
  		$('#start').hide();
  		console.log(game.questionNum);
  		var question = game.nextQuestion(game.questionNum);
  		$('#questionSection').html(question);
  		game.questionNum++;
  		$('#responseSection').empty();
  		$('#resultSection').empty();
 	},


  	timeConverter: function(t){
	    var minutes = Math.floor(t/60);
	    var seconds = t - (minutes * 60);
	    if (seconds < 10){
	      seconds = "0" + seconds;
	    }
	    if (minutes === 0){
	      minutes = "00";
	    } else if (minutes < 10){
	      minutes = "0" + minutes;
	    }
	    return minutes + ":" + seconds;
	},
	nextQuestion: function(q){
		$('#questionSection').html('<h1>Name this team!</h1>' + game.trivia[q].image + '<div>');

			for (var i = 0; i < game.trivia[q].Options.length; i++) {    // start for loop to create anwer option buttons
			    var b = $('<button>');
			    b.addClass('option ' + game.trivia[q].id);
			    b.attr('data-option', game.trivia[q].Options[i]);
			    b.attr('data-answer', game.trivia[q].answer);
			    b.attr('data-num', i);
			    b.text(game.trivia[q].Options[i]);
			    b.attr('id',game.trivia[q].id);
			    $("#questionSection").append(b); 
			}                                    // end of for loop creating anwser option buttons
		$('#questionSection').append('</div>');  // end new div to seperate team image from anwer option buttons

		$('.option').on('click',function(){  // start of onclick for answer option buttons
			console.log($(this).data('option'));
			console.log($(this).data('answer'));
			var check = ($(this).data('option') == $(this).data('answer'))
			console.log(check);
			
			
		});		//end of onclick for answer option buttons
	},          // end of nextQuestion -- creates and adds all things pertaining to question into question Section.

	nextResponse: function(c){
		console.log(c);
	}

};

