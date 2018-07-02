var yourBudjet = 500;
var nameStore;
var shopGoods = [];
var emploers = {
	manager: "Jonh",
	sellerOne: "Eugene",
	sellerTwo: "Rassell"
}

for (var i = 0; i <= 3; i++) {
	i = prompt("Какой тип товаров будем продавать?", "");
	shopGoods.push(i);
	console.log(i);
	alert(shopGoods);
}
