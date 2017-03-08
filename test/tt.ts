var randomNumber = getRandom(2,9);

console.log('Your Random number:', randomNumber);

function getRandom(min, max){
	return Math.floor((Math.random()* (max-min)) + min);
}