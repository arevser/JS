let money = prompt("Ваш бюджет!");
let name = prompt("Название Вашего магазина?")

let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false
}

for (let i = 0; i < 4; i++) {
	let a = prompt("Какой тип товаров будем продавать?");
	mainList.shopGoods[i] = a;
}

console.log(mainList.budget / 30);

console.log(mainList);

