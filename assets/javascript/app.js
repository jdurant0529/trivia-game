window.onload = function(){
 $('#start').on('click', game.start);
 $('#reset').on('click', game.reset);
 $('#reset').hide();
};

var game = {

	time:5,
	questionNum : 1,

	 trivia : [
	{id: 1, Question: 'Question 1?', Option1: 'Option 1', Option2: 'Option 2', Option3: 'Option 3', Option4: 'Option 4', Answer: 'Option 2'},
	{id: 2, Question: 'Question 1?', Option1: 'Option 1', Option2: 'Option 2',Option3: 'Option 3',Option4: 'Option 4',Answer: 'Option 2'},
	{id: 3, Question: 'Question 1?', Option1: 'Option 1', Option2: 'Option 2',Option3: 'Option 3',Option4: 'Option 4',Answer: 'Option 2'},
	{id: 4, Question: 'Question 1?', Option1: 'Option 1', Option2: 'Option 2',Option3: 'Option 3',Option4: 'Option 4',Answer: 'Option 2'},
	{id: 5, Question: 'Question 1?', Option1: 'Option 1', Option2: 'Option 2',Option3: 'Option 3',Option4: 'Option 4',Answer: 'Option 2'},
	],

	begin: function(){
	    game.time--;
		var converted = game.timeConverter(game.time);
    	$('#display').html(converted);
    	if (game.time == 0) {
	    	game.stop();
	    	$('#reset').show();
	    }
  	},
  	reset: function(){
	    game.time = 5;
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
						+ '<button id = ' + this.trivia[q].id + '>' + this.trivia[q].Option1 + '</button>';
		return displayHTML;
	},


};

