var readline = require('readline');
var rl = readline.createInterface({
	input: process.stdin, // ввод из стандартного потока
	output: process.stdout // вывод в стандартный поток
});
var argv = require('minimist')(process.argv.slice(2));
var file = argv['_'][0];
var colors = require('colors');
var ask = require('prompt-autocomplete');
var sugar = require('sugar');
var fs = require('fs');
var ans = "";
var Sync = require('sync');

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
//game();
function checkWinner(fl){
	console.log("Вы выбрали - ".green + ans.green);
    console.log("Комп выбрал - ".yellow + states[comp].yellow);
    				
	if (ans == states[comp]){ 
    	console.log("Вы угадали. Крутяк!!!!".rainbow);
    }else {
    	console.log("Из Вас провидец как из мочи минералка!!!!!".red);
    }
    if (fl){
    	//rl.close();
        Sync(function(){game.sync();});
    }
}

function game(){
 	rl.question('Играем? Enter - да, любой символ - нет.', 
		function(cmd) {
			if (cmd != ""){
				//rl.close();
				process.exit(1);
			}
			else {
				//rl.close();
				ask("Что задумал комп? ", states,
					function (err, answer) {
    				ans = answer;
    				
    				});
				checkWinner(true);
    			}
		}
		);
		
		//rl.pause();
	
}
Sync(function(){
	game.sync();
});
