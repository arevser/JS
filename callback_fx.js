function learnJS(learn, callback){
	console.log("Я учу " + learn);
	callback();
}

learnJS("JavaScript", done);

function done(){
	console.log("Я прошел 3й урок!");
}


// function learnJS(learn, callback){
// 	console.log("Я учу " + learn);
// 	callback();
// }

// learnJS("JavaScript", function(){
// 	console.log("Я прошел 3й урок!");
// });

// function first(){
// 	setTimeout( function(){
// 		console.log(1);
// 	}, 500 );
// }
// function second(){
// 	console.log(2);
// }
// first();
// second();