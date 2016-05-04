window.onload = function(){
 $('#start').on('click', game.start);
 $('#reset').on('click', game.reset);
 $('#reset').hide();
};

var game = {

	time:15,
	questionNum : 0,
	correctCount: 0,
	responseTime: 3,


	trivia : [
    	{id: 1, image: "<img src='assets/images/Arizona_Cardinals.jpg'>", Options: ['Atlanta Falcons', 'Arizona Cardinals', 'Seattle Seahawks', 'Toronto Blue-Jays' ], answer: 'Arizona Cardinals'},
    	{id: 2, image: "<img src='assets/images/New_York_Giants.jpg'>", Options: ['New York Giants', 'New York Jets', 'New York Yankees', 'New York Mets' ], answer: 'New York Giants'},
    	{id: 3, image: "<img src='assets/images/New_Orleans_Saints.jpg'>", Options: ['option1', 'option2', 'New Orleans Saints', 'option4' ], answer: 'New Orleans Saints'},
    	{id: 4, image: "<img src='assets/images/Philadelphia_Eagles.jpg'>", Options: ['Philadelphia Eagles', 'option2', 'option3', 'option4' ], answer: 'Philadelphia Eagles'},
    	{id: 5, image: "<img src='assets/images/Houston_Texans.jpg'>", Options: ['option1', 'option2', 'Houston Texans', 'option4' ], answer: 'Houston Texans'},
    	{id: 6, image: "<img src='assets/images/Green_Bay_Packers.jpg'>", Options: ['option1', 'option2', 'option3', 'Green Bay Packers' ], answer: 'Green Bay Packers'},
    ],
	

	begin: function(){
	    game.time--;
		var converted = game.timeConverter(game.time);
    	$('#display').html(converted);
    	if (game.time == 0) {
	    	game.showResults();

	    	
	    }
  	},
  	reset: function(){
	    game.time = 15;
	    game.questionNum = 0;
	    game.correctCount = 0;
	    converted = game.timeConverter(game.time);
    	$('#display').html(converted);
    	$('#reset').hide();
    	$('#resultSection').empty();
    	$('#resultSection').hide();
    	$('#questionSection').show();
    	$('#start').show();
  	},
  	stop: function(){
   		clearInterval(counter);
  	},
  	
  	start: function(){
  		$('#questionSection').show();
  		counter = setInterval(game.begin, 1000);
  		$('#start').hide();
  		console.log(game.questionNum);
  		var question = game.nextQuestion(game.questionNum);
  		$('#questionSection').html(question);

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
			game.nextResponse(check);
			
		});		//end of onclick for answer option buttons
	},          // end of nextQuestion -- creates and adds all things pertaining to question into question Section.

	nextResponse: function(c){
		console.log(c);
		$('#questionSection').empty();
		if (c == true) {
			var responseHTML = "Thats correct!!"
			game.correctCount++;
			$('#responseSection').html(responseHTML);
		} else {
			var responseHTML = "Sorry, that was not correct."
			$('#responseSection').html(responseHTML);
		}
		game.questionNum++
		console.log(game.questionNum);
		question = game.nextQuestion(game.questionNum);
  		$('#questionSection').html(question);
  		$('#responseSection').empty();
  		$('#resultSection').empty();
	},


	showResults: function(){
		game.stop();
    	$('#reset').show();
    	$('#questionSection').empty();
    	$('#responseSection').empty();
     	$('#resultSection').show();
     	var resultsHTML = '<h1>There were ' + game.questionNum + ' total questions asked.</h1>' + 
     		'<h1>You answered ' + game.correctCount	+ 'correctly.</h1>'
		$('#resultSection').html(resultsHTML);
	}

};

