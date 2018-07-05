let money,
name,
time,
price = 200;

function start() {
	while (isNaN(money) || money == null || money == "") {
		money = prompt("Ваш бюджет!", "");
	}

	name = prompt("Название Вашего магазина?", "").toUpperCase();
	time = 19;
}

//start();

let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems: [],
	chooseGoods: function chooseGoods() {
		for (let i = 0; i < 3; i++) {
			let a = prompt("Какой тип товаров будем продавать?", "");
			if ((typeof(a)) === "string" && (typeof(a)) !== null && a.length < 50 && a != ""){
				console.log("OK!");
				mainList.shopGoods[i] = a;
			}
			else{
				i = i - 1;
			}
		}
	},
	workTime: function workTime(time) {
		if (time < 0){
			console.log("Такого не может быть!");
		} else if (time > 8 && time < 20) {
			console.log("Время работать!");
			mainList.open = true;
		} else if (time < 24){
			console.log("Уже слишком поздно");
		} else {
			console.log("В сутках только 24 часа!");
		}
	},
	dayBudget: function dayBudget(){
		console.log("Ежедневный бюджет" + mainList.budget / 30);
	},
	makeDiscount: function makeDiscount(){
		if (mainList.discount == true){
			price = (price/100) * 80;
		}
	},
	hireEmployer: function hireEmployer(){
		for (let i = 0; i < 4; i++){
			let name = prompt("Имя сотрудника", "");
			mainList.employers[i] = name;
		}
	},
	chooseShopItems: function chooseShopItems(){

		let items = prompt("Перечислите через запятую Ваши товары", "");

		if (typeof(items) == "string" && typeof(items) !== null && items != "")
		{
			mainList.shopItems = items.split(",");
			mainList.shopItems.push(prompt("Подождите. еще ", ""));
			mainList.shopItems.sort();
			// mainList.shopItems.forEach(function(items,i,shopItems){
			// 	console.log("У нас вы можете купить: " + items);
			// })
			for (key in mainList.shopItems){
				console.log("Наш магазин включает в себя: " + mainList.shopItems[key]);
			}
		} else {
			confirm("Введите товары!");
			mainList.chooseShopItems();
		}
	}
};

mainList.chooseShopItems();

//console.log(mainList);
//




