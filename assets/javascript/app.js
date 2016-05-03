window.onload = function(){
 $('#start').on('click', game.start);
 $('#reset').on('click', game.reset);
 $('#reset').hide();
};

var game = {

	time:15,
	questionNum : 0,

	 trivia : [
	{id: 1, Question: 'Question 1?', Option1: 'Option 1', Option2: 'Option 2', Option3: 'Option 3', Option4: 'Option 4', Answer: 'Option 2'},
	{id: 2, Question: 'Question 1?', Option1: 'Option 1', Option2: 'Option 2', Option3: 'Option 3', Option4: 'Option 4', Answer: 'Option 1'},
	{id: 3, Question: 'Question 1?', Option1: 'Option 1', Option2: 'Option 2', Option3: 'Option 3', Option4: 'Option 4', Answer: 'Option 2'},
	{id: 4, Question: 'Question 1?', Option1: 'Option 1', Option2: 'Option 2', Option3: 'Option 3', Option4: 'Option 4', Answer: 'Option 4'},
	{id: 5, Question: 'Question 1?', Option1: 'Option 1', Option2: 'Option 2', Option3: 'Option 3', Option4: 'Option 4', Answer: 'Option 3'},
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
  		console.log(question);
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
		console.log('game.trivia[q].question = ' + game.trivia[q].Question);
		console.log('q = ' + q);
		var displayHTML = '<div class ="row"> <div class = col-xl-12>'+ this.trivia[q].Question + '</div></div>' 
		// $('questionSection').append(displayHTML);
		// for (var i = 0; i < game.trivia.length; i++) {    
		// 	var currbutton = 'option' + (i+1);
		// 	console.log(game.trivia[i].currbutton);
		//     var b = $('<button>');
		//      b.addClass('answer1 ' + game.trivia[i].id);
		//      b.attr('data-name', game.trivia[i].name);
		//      b.html(game.trivia[i].currbutton);
		//      $('#questionSection').append(b);
		// }
		
			displayHTML = displayHTML + '<button id = button>' + this.trivia[q].Option1 + '</button>';
			displayHTML = displayHTML + '<button id = button>' + this.trivia[q].Option2 + '</button>';
			displayHTML = displayHTML + '<button id = button>' + this.trivia[q].Option3 + '</button>';
			displayHTML = displayHTML + '<button id = button>' + this.trivia[q].Option4 + '</button>';

		return displayHTML;
	},

	nextresult: function (success){
		console.log();
	}

	// $('.button').on('click',function(){
	// 	console.log(this.Answer)
	// });
};

