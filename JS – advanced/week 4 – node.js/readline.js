const readline = require('readline');
 
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	prompt: ''
});
 
rl.prompt();
rl.on('line', (input) => {
	let arrNums = input.split(' ');
	console.log(Number(arrNums[0]) + Number(arrNums[1]));
	rl.close();
});