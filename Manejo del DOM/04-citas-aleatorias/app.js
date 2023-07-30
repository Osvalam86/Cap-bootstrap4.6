// ? Referencias de los elementos
let button = document.getElementById("changeQuote"),
  itemQuoute = document.getElementById("quoute"),
  authorQuoute = document.getElementById("author");

// *** Vamos con la lógica
const generateRandomInteger = (min, max) => {
  //*  Math.random() 👉 Número entre el cero y el 1
  // * (max - min) 👉 Diferencia entre el maximo y el minimo
  // * Math.floor() 👉 Convierte el número decimal a entero
  return Math.floor(Math.random() * (max - min) + min);
};

const changeQuoute = () => {
  // ? Creamos un indice aleatorio
  let randomIndex = generateRandomInteger(0, quoute.length);
  itemQuoute.innerText = `${quoute[randomIndex].texto}`;
  authorQuoute.innerText = quoute[randomIndex].autor;
};

changeQuoute();

// ? Asociar la funcion con el evento
button.addEventListener("click", changeQuoute);
