// ? getElementById
const container = document.getElementById("container");
console.log(container);
console.log(container.innerHTML);
console.log(container.innerText);
console.log(container.tagName);
console.log(typeof container);

// ? getElementByClassName
const toppings = document.getElementsByClassName("topping");
console.log(toppings);
console.log(toppings.length);
console.log(toppings[0]);
console.log(toppings[0].id);

// ? getElementsByTagName
const misToppings = document.getElementsByTagName("li");
console.log(misToppings);

// ? querySelector
const aceituna = document.querySelector("#aceitunas");
console.log(aceituna);

const primerElemento = document.querySelector(".topping");
console.log(primerElemento);
console.log(typeof primerElemento);

const dosClases = document.querySelector(".topping.bg-orange");
console.log(dosClases);

const combinadores = document.querySelector("ul li.bg-orange");
console.log(combinadores);

const excluirElemento = document.querySelector("ul li:not(.bg-brown)");
console.log(excluirElemento);

// ? querySelectorAll
const toppingsNaranja = document.querySelectorAll(".topping.bg-orange");
console.log(toppingsNaranja);
console.log(toppingsNaranja.length);
console.log(toppingsNaranja[0]);
