let money,
name,
time,
price

function start() {
	while (isNaN(money) || money == null || money == "") {
		money = prompt("Ваш бюджет!");
	}

	name = prompt("Название Вашего магазина?").toUpperCase();
	time = 19;
}

//start();

let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false
}

function chooseGoods() {
	for (let i = 0; i < 3; i++) {
		let a = prompt("Какой тип товаров будем продавать?");
		if ((typeof(a)) === "string" && (typeof(a)) !== null && a.length < 50 && a != ""){
			console.log("OK!");
			mainList.shopGoods[i] = a;
		}
		else{
			i = i - 1;
		}
	}
}

//chooseGoods();

function workTime(time) {
	if (time < 0){
		console.log("Такого не может быть!");
	} else if (time > 8 && time < 20) {
		console.log("Время работать!");
	} else if (time < 24){
		console.log("Уже слишком поздно");
	} else {
		console.log("В сутках только 24 часа!");
	}
}

workTime(18);

console.log(mainList.budget / 30);

console.log(mainList);

// let i = 0;
// while (i < 3) {
// 	i++;
// 	let a = prompt("Какой тип товаров будем продавать?");
// 	if ((typeof(a)) === "string" && (typeof(a)) !== null && a.length < 50 && a != ""){
// 		console.log("OK!");
// 		mainList.shopGoods[i] = a;
// 	}
// 	else{
// 		console.log("Введите правильные данные!");
// 	}
// }

// do {
// 	i++;
// 	let a = prompt("Какой тип товаров будем продавать?");
// 	if ((typeof(a)) === "string" && (typeof(a)) !== null && a.length < 50 && a != ""){
// 		console.log("OK!");
// 		mainList.shopGoods[i] = a;
// 	}
// 	else{
// 		console.log("Введите правильные данные!");
// 	}
// }
// while (i < 3);



