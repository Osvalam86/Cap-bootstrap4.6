// *** Declaracion de variables
// ? Algunos desarrolladores al declarar variables para guardar un elemento del DOMException, la declaran anteponiendo un $, con la finalidad de identificar las variables que hacen referencia a una etiqueta html
const $test = document.querySelector("#test");
const $itemTwo = document.querySelector(".item-two");
const $linkItem = document.querySelector(".item-three a");

// *** Recorrer el DOM
console.log($linkItem.parentElement.parentElement.parentElement);
// ? Con .closest, podemos obtener el ancestro más cercano que cumpla con el selector indicado
console.log($linkItem.closest("main.principal-container"));

// *** ATRIBUTOS
// ? Podemos validar si un elemento tiene o no un atributo
console.log($itemTwo.hasAttribute("id"));

// *** Estilos
// ? Otra manera de cambiar estilos en el DOM... podemos hacer uso del método setProperty
$linkItem.style.setProperty("text-decoration", "none");
$linkItem.style.setProperty("display", "block");
$linkItem.style.setProperty("text-align", "center");
$linkItem.style.backgroundColor = "green";
