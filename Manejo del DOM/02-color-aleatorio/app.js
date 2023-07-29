// * Seleccionar los elementos del DOM
const button = document.querySelector("#color-button");
const color = document.getElementById("color");

// console.log(button, color);

// * Creamos nuestro handler --- funcion
const generarColorHexAleatorio = () => {
  // ? Son 16 posibles opciones para los digitos del color
  let digitos = "0123456789ABCDEF";
  let colorHex = "#";

  for (let i = 0; i < 6; i++) {
    // ? con random obtenemos un número random
    // ? con floor obtenemos un número entero (redondea el número)
    let indiceAleatorio = Math.floor(Math.random() * 16);
    colorHex += digitos[indiceAleatorio];
    // console.log(colorHex);
  }

  return colorHex;
};

const funcionFinal = () => {
  // ? Obtenemos nuestro color aleatorio
  let colorAleatorio = generarColorHexAleatorio();

  // ? Actualizar texto del parrafo
  color.innerText = colorAleatorio;

  // ? Actualizar el color del fondo
  document.body.style.backgroundColor = colorAleatorio;
};

// ? Asociamos el elemento con el hanlder
button.addEventListener("click", funcionFinal);
