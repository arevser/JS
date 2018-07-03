let money = promp("Ваш бюджет!");
let name = promp("Название Вашего магазина?")

let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false
}

mainList.shopGoods[0] = promp("Какой тип товаров будем продавать?");
mainList.shopGoods[1] = promp("Какой тип товаров будем продавать?");
mainList.shopGoods[2] = promp("Какой тип товаров будем продавать?");

console.log(mainList.budget / 30);

console.log(mainList);

// var yourBudjet = 500;
// var nameStore;
// var shopGoods = [];
// var emploers = {
// 	manager: "Jonh",
// 	sellerOne: "Eugene",
// 	sellerTwo: "Rassell"
// }

// for (var i = 0; i <= 3; i++) {
// 	i = prompt("Какой тип товаров будем продавать?", "");
// 	shopGoods.push(i);
// 	console.log(i);
// 	alert(shopGoods);
// }
