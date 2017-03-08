
console.log('test-app-1', Math.floor(Math.random()*50));


console.log(number.value);

var random = getRandom(2,9);

console.log('Your Random number:', random);

document.getElementById('btn').onclick = function(){
	console.log('btn clicked');
}

function onClick(){
	console.log('btn clicked');
}

function getRandom(min, max){
	return Math.floor((Math.random()* (max-min)) + min);
}