let money,
	name,
	time

function start() {
	money = prompt("Ваш бюджет!");

	name = prompt("Название Вашего магазина?");
	time = 19;
}

start();

let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false
}

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

if (time < 0){
	console.log("Такого не может быть!");
} else if (time > 8 && time < 20) {
	console.log("Время работать!");
} else if (time < 24){
	console.log("Уже слишком поздно");
} else {
	console.log("В сутках только 24 часа!");
}

console.log(mainList.budget / 30);

console.log(mainList);

