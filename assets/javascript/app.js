window.onload = function(){
 $('#start').on('click', game.start);
 $('#reset').on('click', game.reset);
 $('#reset').hide();
};

var game = {

	time:15,
	questionNum : 0,


	trivia : [
    	{id: 1, Question: 'Question 1?', Options: ['option1', 'Arizona Cardinals', 'option3', 'option4' ], answer: 'Arizona Cardinals', image: "<img src='assets/images/Arizona_Cardinals.jpg'>"},
    	{id: 2, Question: 'Question 2?', Options: ['option1', 'option2', 'option3', 'option4' ], answer: 'option2'},
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
		console.log('game.trivia[q].Question = ' + game.trivia[q].Question);
		console.log('q = ' + q);
		$('#questionSection').html('<h1>Name this team!</h1>' + game.trivia[q].image + '<div>');

			for (var i = 0; i < game.trivia[q].Options.length; i++) {    
			    var b = $('<button>');
			    b.addClass('option ' + game.trivia[q].id);
			    b.attr('data-Option1', game.trivia[q].Options[i]); 
			    // b.attr('data-HP', characters[i].HP);
			    // b.attr('data-AP', characters[i].AP);
			    // b.attr('data-CP', characters[i].CP);
			    b.attr('data-num', i);
			    b.text(game.trivia[q].Options[i]);
			    b.attr('id',game.trivia[q].id);
			    //b.html(game.trivia[q].image);


			    $("#questionSection").append(b); 
			    //alert('watch this');
			}
		$('#questionSection').append('</div>')
		//return displayHTML;
	},

	nextresult: function (success){
		console.log();
	},

	// $('#button').on('click',function(){
	// 	console.log('I am here');
	// });
};

