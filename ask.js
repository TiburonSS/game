var argv = require('minimist')(process.argv.slice(2));
var file = argv['_'][0];
var colors = require('colors');
var ask = require('prompt-autocomplete');
var sugar = require('sugar');
var fs = require('fs');

if (file) {
		var states = fs.readFileSync(file).toString().lines().remove("");
		var col = states.count();
	}  else {
		var states = [
        	'Alabama',
        	'Alaska',
        	'Wisconsin',
        	'Wyoming'
    		];
     	var col = 4;
}

var comp = Math.round(Math.random()*(col - 1)); 
game();

function game(){
  ask("Погнали?",["Yes","No"],function (err, answer){
	if (answer == "Yes") {
		ask("Что задумал комп? ", states, function (err, answer) {
    	console.log("Вы выбрали - ".green + answer.green);
    	console.log("Комп выбрал - ".yellow + states[comp].yellow);
    	if (answer == states[comp]) 
    	 	console.log("Вы угадали. Крутяк!!!!".rainbow);
   		else {
    		console.log("Из Вас провидец как из мочи минералка!!!!!".red);
    	}

    });
	
	}
		else
			console.log("Bye!!!");
});

}

