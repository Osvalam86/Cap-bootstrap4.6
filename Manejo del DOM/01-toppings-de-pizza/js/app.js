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

// **** ESTILOS
const primerTopping = document.querySelector(".topping");
console.log(primerTopping);
console.log(primerTopping.style);

primerTopping.style.backgroundColor = "blue";
// primerTopping.style.backgroundColor = "#6dff00";
primerTopping.style.textTransform = "uppercase";

// **** TEXTO
const listaDeToppings = document.getElementById("list-toppings");
console.log(listaDeToppings);
console.log("> innerText");
console.log(listaDeToppings.innerText);
console.log("> textContent");
console.log(listaDeToppings.textContent);
console.log("> innerHTML");
console.log(listaDeToppings.innerHTML);

// ? Modificar texto
const myTitle = document.getElementById("title");
console.log(myTitle);
console.log(myTitle.innerText);

// myTitle.innerText = "Mis Toppings favoritos";

// ****** ATRIBUTO
const link = document.getElementsByTagName("a");
console.log(link);
console.log(link[0]);
console.log(link[0].getAttribute("id"));
console.log(link[0].getAttribute("href"));

// ? Remover atributo
// link[0].removeAttribute("href");

// ? Modificar atributo
link[0].setAttribute("href", "https://www.youtube.com/");

// ? Agregando un atributo
link[0].setAttribute("title", "Prueba de nuevo atributo");

// ***** CLASES
const myFirstTopping = document.querySelector(".topping");
console.log(myFirstTopping);
console.log(myFirstTopping.classList);
console.log(myFirstTopping.classList.value);
console.log(myFirstTopping.className);

// ? Agregar una clase
myFirstTopping.classList.add("green-text");
console.log(myFirstTopping);

// ? Verificar si una clase existe
console.log(myFirstTopping.classList.contains("green-text"));

// if (myFirstTopping.classList.contains("green-text")) {
//   console.log("La clase existe");
// } else {
//   console.log("La clase NO existe");
// }

// ? Eliminar una clase
myFirstTopping.classList.remove("green-text");

// ***** CREAR ELEMENTOS
// ? Referencia donde se va crear
const listOriginalToppings = document.getElementById("list-toppings");
console.log(listOriginalToppings);

// ? Crear nuevo elemento
const newTopping = document.createElement("li");

// ? Agregando estilos CSS
newTopping.classList.add("topping", "bg-brown");

// ? Agregar contenido - Texto
newTopping.innerText = "Queso Extra";

// ? Agregar el elemento
// listOriginalToppings.append(newTopping);
listOriginalToppings.appendChild(newTopping);
// listOriginalToppings.append("texto de prueba");

const newChild = document.createElement("span");
newChild.innerText = "Soy un hijo";

newTopping.append(newChild);

// ? Remover elemento
newChild.remove();

// **** RECORRIENDO EL DOM
// ? Nodo padre

console.log(listOriginalToppings.parentElement);
// console.log(listOriginalToppings.parentNode);
console.log(listOriginalToppings.parentElement.parentElement);

// ? Elementos hijos
console.log(listOriginalToppings.children);

// ? Primer hijo
console.log(listOriginalToppings.firstChild);
console.log(listOriginalToppings.children[0]);
console.log(listOriginalToppings.firstElementChild);

// ? Ultimo hijo
console.log(listOriginalToppings.lastChild);
console.log(listOriginalToppings.lastElementChild);

// ? Elementos hermanos
// * Nodos
console.log(listOriginalToppings.previousSibling);
// * Elementos
console.log(listOriginalToppings.previousElementSibling);

// * Nodos
console.log(listOriginalToppings.nextSibling);
// * Elementos
console.log(listOriginalToppings.nextElementSibling);
console.log(listOriginalToppings.nextElementSibling.nextElementSibling);

// **** EVENTOS
function mostrarClic() {
  console.log("Hiciste clic");
}

// ? valor personalizado
function mostrarClicPersonalizado(topping = "un Elemento X") {
  console.log("Hiciste clic en", topping);
}

// ** addEventListener
const albahaca = document.getElementById("albahaca");

function mostrarClicJS(event) {
  console.log("Hiciste clic desde JS");
  console.log(event);
  console.log(event.target);
  console.log(event.target.innerText);
}

albahaca.addEventListener("click", mostrarClicJS);

const toppinsEvent = document.getElementsByClassName("topping");
console.log(toppinsEvent);
// console.log(toppinsEvent[0]);

for (const topping of toppinsEvent) {
  // console.log(topping);
  // topping.addEventListener("click", mostrarClicJS);
  topping.addEventListener("click", (e) => {
    console.log(e.target.innerText);
  });
}
