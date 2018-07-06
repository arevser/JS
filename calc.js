// function Calculator(){
// 	this.read = function(){
// 		this.firstNumber = +prompt("First Number", "");
// 		this.secondNumber = +prompt("Second Number", "");
// 	}
// 	this.sum = function(){
// 		return this.firstNumber + this.secondNumber;
// 	}
// 	this.mul = function(){
// 		return this.firstNumber * this.secondNumber;
// 	}
// }
// var calculator = new Calculator();
// calculator.read();
// alert( "Сумма=" + calculator.sum() );
// alert( "Произведение=" + calculator.mul() );


// function Accumulator(startingValue){
// 	this.value = startingValue;
// 	this.read = function(){
// 		this.value += +prompt("Add number", "");
// 	}
// }
// var accumulator = new Accumulator(1); // начальное значение 1
// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению
// alert( accumulator.value ); // выведет текущее значение


// function Hamster() {}
// Hamster.prototype.food = []; // пустой "живот"
// Hamster.prototype.found = function(something) {
//   this.food.push(something);
// };
// var speedy = new Hamster();
// var lazy = new Hamster();
// speedy.found("яблоко");
// speedy.found("орех");
// alert( speedy.food.length ); // 2
// alert( lazy.food.length ); // 2 (!??)
