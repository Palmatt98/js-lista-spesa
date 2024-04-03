const shoppingList = ["latte", "biscotti", "formaggio", "mele", "uva", "uova"];
// console.log("lista della spesa: ", shoppingList);

let i = 0;
let listaElem = document.querySelector(".shopping-list");
console.log(listaElem);
while (i <= shoppingList.length - 1) {
	const listaCorrente = shoppingList[i];
	listaElem.innerHTML += `<li>${listaCorrente}</li>`;
	// console.log(listaCorrente);
	i++;
}
