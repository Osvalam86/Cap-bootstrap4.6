// Referencia de nuestros elementos del DOM
// ? Inputs
const redInput = document.getElementById("red"),
  greenInput = document.getElementById("green"),
  blueInput = document.getElementById("blue");

// ? Textos
const redText = document.getElementById("redText"),
  greenText = document.getElementById("greenText"),
  blueText = document.getElementById("blueText");

// ? Obtener valores de los inputs y asignar a unas nuevas variables
let red = redInput.value,
  green = greenInput.value,
  blue = blueInput.value;

// ? Vamos a colocar dentro de los parrafos, el valor de las variables anteriores
redText.innerText = red;
greenText.innerText = green;
blueText.innerText = blue;

// ? Creamos la funcion para actualizar color
function actualizarColor(red, green, blue) {
  const colorRGB = `rgba(${red}, ${green}, ${blue})`;
  document.body.style.backgroundColor = colorRGB;
}

// ? Es momento de asociar nuestro evento con nuestra funcion
// * Actualizar red
redInput.addEventListener("change", (e) => {
  red = e.target.value;
  redText.innerText = red;
  actualizarColor(red, green, blue);
});

// * Actualizar green
greenInput.addEventListener("change", (e) => {
  green = e.target.value;
  greenText.innerText = green;
  actualizarColor(red, green, blue);
});

// * Actualizar blue
blueInput.addEventListener("change", (e) => {
  blue = e.target.value;
  blueText.innerText = blue;
  actualizarColor(red, green, blue);
});
