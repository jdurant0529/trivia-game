

window.onload = function(){
 $('#start').on('click', game.start);
 $('#reset').on('click', game.reset);
 $('#reset').hide();
 $('#questionSection').hide();
 $('#responseSection').hide();
 $('#resultSection').show();
 

};

var game = {

	time:60,
	questionNum : 0,
	correctCount: 0,
	responseTime: 3,
	questionCount:0,


	trivia : [
	{id:1, image:"<img src='assets/images/Arizona_Cardinals.jpg'>", Options: ['Pittsburgh Steelers','Buffalo Bills','Arizona Cardinals','Indianapolis Colts'], answer: 'Arizona Cardinals'},
	{id: 2, image:"<img src='assets/images/Atlanta_Falcons.jpg'>", Options: ['Atlanta Falcons','Detroit Lions','Baltimore Ravens','Miami Dolphins'], answer: 'Atlanta Falcons'},
	{id: 3, image:"<img src='assets/images/Baltimore_Ravens.jpg'>", Options: ['Baltimore Ravens','St Louis Rams','Philadelphia Eagles','Oakland Raiders'], answer: 'Baltimore Ravens'},
	{id: 4, image:"<img src='assets/images/Buffalo_Bills.jpg'>", Options: ['Pittsburgh Steelers','Los Angeles Rams','Baltimore Ravens','Buffalo Bills'], answer: 'Buffalo Bills'},
	{id: 5, image:"<img src='assets/images/Carolina_Panthers.jpg'>", Options: ['Tennessee Titans','Carolina Panthers','New York Jets','Jacksonville Jaguars'], answer: 'Carolina Panthers'},
	{id: 6, image:"<img src='assets/images/Chicago_Bears.jpg'>", Options: ['Tampa Bay Buccaneers','Dallas Cowboys','Chicago Bears','Minnesota Vikings'], answer: 'Chicago Bears'},
	{id: 7, image:"<img src='assets/images/Cincinnati_Bengals.jpg'>", Options: ['Cincinnati Bengals','Baltimore Ravens','Houston Texans','Seattle Seahawks'], answer: 'Cincinnati Bengals'},
	{id: 8, image:"<img src='assets/images/Cleveland_Browns.jpg'>", Options: ['Cleveland Browns','Oakland Raiders','Philadelphia Eagles','Tampa Bay Buccaneers'], answer: 'Cleveland Browns'},
	{id: 9, image:"<img src='assets/images/Dallas_Cowboys.jpg'>", Options: ['Carolina Panthers','Philadelphia Eagles','Dallas Cowboys','Green Bay Packers'], answer: 'Dallas Cowboys'},
	{id: 10, image:"<img src='assets/images/Denver_Broncos.jpg'>", Options: ['Denver Broncos','Houston Texans','San Diego Chargers','New York Jets'], answer: 'Denver Broncos'},
	{id: 11, image:"<img src='assets/images/Detroit_Lions.jpg'>", Options: ['Detroit Lions','New Orleans Saints','San Diego Chargers','Baltimore Ravens'], answer: 'Detroit Lions'},
	{id: 12, image:"<img src='assets/images/Green_Bay_Packers.jpg'>", Options: ['Houston Texans','Green Bay Packers','Carolina Panthers','New York Giants'], answer: 'Green Bay Packers'},
	{id: 13, image:"<img src='assets/images/Houston_Texans.jpg'>", Options: ['Indianapolis Colts','Houston Texans','Chicago Bears','New York Jets'], answer: 'Houston Texans'},
	{id: 14, image:"<img src='assets/images/Indianapolis_Colts.jpg'>", Options: ['Jacksonville Jaguars','Denver Broncos','Indianapolis Colts','Oakland Raiders'], answer: 'Indianapolis Colts'},
	{id: 15, image:"<img src='assets/images/Jacksonville_Jaguars.jpg'>", Options: ['Jacksonville Jaguars','Detroit Lions','Cleveland Browns','Philadelphia Eagles'], answer: 'Jacksonville Jaguars'},
	{id: 16, image:"<img src='assets/images/Kansas_City_Chiefs.jpg'>", Options: ['Los Angeles Rams','Green Bay Packers','Kansas City Chiefs','Pittsburgh Steelers'], answer: 'Kansas City Chiefs'},
	{id: 17, image:"<img src='assets/images/Los_Angeles_Rams.jpg'>", Options: ['Los Angeles Rams','Houston Texans','Denver Broncos','San Diego Chargers'], answer: 'Los Angeles Rams'},
	{id: 18,image:"<img src='assets/images/Miami_Dolphins.jpg'>", Options: ['Minnesota Vikings','Miami Dolphins','Detroit Lions','San Francisco 49ers'], answer: 'Miami Dolphins'},
	{id: 19,image:"<img src='assets/images/Minnesota_Vikings.jpg'>", Options: ['Arizona Cardinals','Detroit Lions','Minnesota Vikings','Miami Dolphins'], answer: 'Minnesota Vikings'},
	{id: 20,image:"<img src='assets/images/New_England_Patriots.jpg'>", Options: ['Atlanta Falcons','New England Patriots','Houston Texans','Minnesota Vikings'], answer: 'New England Patriots'},
	{id: 21,image:"<img src='assets/images/New_Orleans_Saints.jpg'>", Options: ['New Orleans Saints','Houston Texans','Indianapolis Colts','New England Patriots'], answer: 'New Orleans Saints'},
	{id: 22,image:"<img src='assets/images/New_York_Giants.jpg'>", Options: ['Buffalo Bills','New York Giants','Jacksonville Jaguars','New Orleans Saints'], answer: 'New York Giants'},
	{id: 23,image:"<img src='assets/images/New_York_Jets.jpg'>", Options: ['Carolina Panthers','Jacksonville Jaguars','New York Jets','New York Giants'], answer: 'New York Jets'},
	{id: 24,image:"<img src='assets/images/Oakland_Raiders.jpg'>", Options: ['Oakland Raiders','Arizona Cardinals','Detroit Lions','Green Bay Packers'], answer: 'Oakland Raiders'},
	{id: 25,image:"<img src='assets/images/Philadelphia_Eagles.jpg'>", Options: ['Washington Redskins','New Orleans Saints','Miami Dolphins','Philadelphia Eagles'], answer: 'Philadelphia Eagles'},
	{id: 26,image:"<img src='assets/images/Pittsburgh_Steelers.jpg'>", Options: ['Arizona Cardinals','Tampa Bay Buccaneers','Pittsburgh Steelers','Dallas Cowboys'], answer: 'Pittsburgh Steelers'},
	{id: 27,image:"<img src='assets/images/San_Diego_Chargers.jpg'>", Options: ['Los Angeles Rams','San Diego Chargers','Indianapolis Colts','New York Jets'], answer: 'San Diego Chargers'},
	{id: 28,image:"<img src='assets/images/San_Francisco_49ers.jpg'>", Options: ['New York Giants','Detroit Lions','San Francisco 49ers','Philadelphia Eagles'], answer: 'San Francisco 49ers'},
	{id: 29,image:"<img src='assets/images/Seattle_Seahawks.jpg'>", Options: ['Baltimore Ravens','Seattle Seahawks','Kansas City Chiefs','San Francisco 49ers'], answer: 'Seattle Seahawks'},
	{id: 30,image:"<img src='assets/images/St_Louis_Rams.jpg'>", Options: ['Detroit Lions','St Louis Rams','Jacksonville Jaguars','Philadelphia Eagles'], answer: 'St Louis Rams'},
	{id: 31,image:"<img src='assets/images/Tampa_Bay_Buccaneers.jpg'>", Options: ['Tampa Bay Buccaneers','Green Bay Packers','New York Jets','New England Patriots'], answer: 'Tampa Bay Buccaneers'},
	{id: 32,image:"<img src='assets/images/Tennessee_Titans.jpg'>", Options: ['Minnesota Vikings','Tennessee Titans','Dallas Cowboys','Minnesota Vikings'], answer: 'Tennessee Titans'},
	{id: 33,image:"<img src='assets/images/Washington_Redskins.jpg'>", Options: ['Washington Redskins','Pittsburgh Steelers','Atlanta Falcons','Miami Dolphins'], answer: 'Washington Redskins'},
 	],
	
	begin: function(){
	    game.time--;
		var converted = game.timeConverter(game.time);
    	$('#display').html(converted);
    	if (game.time == 0) {
	    	game.showResults();	    	
	    }
	    questionNum = Math.floor(Math.random()*game.trivia.length);
  	},

  	reset: function(){
	    game.time = 60;
	    game.correctCount = 0;
	    game.questionCount = 0;
	    converted = game.timeConverter(game.time);
    	$('#display').html(converted);
    	$('#reset').hide();
    	$('#resultSection').empty();
    	$('buttonSection').show();
    	$('#start').show();
  	},

  	stop: function(){
   		clearInterval(counter);
  	},
 	
  	start: function(){
  		$('#questions').show();
  		$('#questionSection').show();
  		$('#buttonSection').show();
  		$('#start-button').hide();
  		counter = setInterval(game.begin, 1000);
  		$('#start').hide();
  		game.questionNum = Math.floor(Math.random()*game.trivia.length);

  		game.nextQuestion(game.questionNum);
  		$('#responseSection').empty();
  		$('#resultSection').empty();
  		$('#resultSection').hide();
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
		$('#responseSection').hide();
		$('#questions').show();
		$('#buttonSection').show();
		$('#questionSection').show();
		$('#questionSection').html('<h2>Name this team!</h2>' + game.trivia[q].image + '<div>');
			for (var i = 0; i < game.trivia[q].Options.length; i++) {    // start for loop to create anwer option buttons
			    var b = $('<button>');
			    b.addClass("btn btn-primary");
			    b.addClass('option ' + game.trivia[q].id);
			    b.attr('data-option', game.trivia[q].Options[i]);
			    b.attr('data-answer', game.trivia[q].answer);
			    b.attr('data-num', i);
			    b.text(game.trivia[q].Options[i]);
			    b.attr('id',game.trivia[q].id);
			    $("#buttonSection").append(b); 
			}                                    // end of for loop creating anwser option buttons
		$('#buttonSection').append('</div>');  // end new div to seperate team image from anwer option buttons
		var check = false;

		$('.option').on('click',function(){  // start of onclick for answer option buttons		
			check = ($(this).data('option') == $(this).data('answer'))
			game.questionCount++;
			if (game.questionCount > 32) {
				game.showResults();
			}else{
				game.nextResponse(check);
			}
		});		//end of onclick for answer option buttons
	},          // end of nextQuestion -- creates and adds all things pertaining to question into question Section.

	nextResponse: function(c){
		console.log(c);
		$('#responseSection').show();
		$('#questions').hide();
		$('#buttonSection').hide();
		$('#questionSection').hide();
		
		clearInterval(counter);
		if (c == true) {
			var responseHTML = "Congratulations!!  Thats correct!!"
			game.correctCount++;
			$('#responseSection').html('<h3>' + responseHTML + '</h3>');

		} else {
			var responseHTML = "Sorry, that was not correct." 
			$('#responseSection').html('<h3>' + responseHTML + '</h3>');
		}
		$('#questionSection').empty();
		$('#buttonSection').empty();
		game.questionNum++
		if (game.questionNum > 32) {
			game.questionNum = game.questionNum -33;
		}
		
		setTimeout(function(){
			counter = setInterval(game.begin, 1000);
			game.nextQuestion(game.questionNum)
	  		$('#responseSection').empty();
	  		$('#resultSection').empty();
		}, 1000);	
	},  //  end of nextResponse Section


	showResults: function(){
		game.stop();
    	$('#reset').show();
    	$('#start-button').show();
    	$('#questionSection').empty();
    	$('#buttonSection').empty();
    	$('#responseSection').empty();
    	$('#questionSection').hide();
    	$('#buttonSection').hide();
    	$('#responseSection').hide();
     	$('#resultSection').show();
     	var resultsHTML = '<h2>There were ' + game.questionCount + ' total questions asked.</h2>' + 
     		'<h2>You answered ' + game.correctCount	+ ' correctly.</h2>'
		$('#resultSection').html(resultsHTML);
	}

};

