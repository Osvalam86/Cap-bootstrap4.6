// ? Referencias
const buttonStartPause = document.querySelector("#buttonStartPause"),
  buttonRestart = document.querySelector("#buttonRestart"),
  chronometer = document.querySelector("#chronometer");

// ? Creamos 3 variables, definidas dentro de un arreglo
let [hours, minutes, seconds] = [0, 0, 0];

// ? Variables para el intervalo de tiempo y el estado del cronometro
let timeInterval,
  chronometerStatus = "paused";

// *** Lógica
function updateChronometer() {
  // ? Aumentamos el valor de seconds
  seconds++;

  // ?  Si ya transcurrieron 60 segundos, significa que los segundos se reinician a 0 porque inicia un minuto nuevo
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;

    // ? Si el resultado es 1 significa que ya debemos reiniciar minutos y inicia una 1hora nueva
    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  // ? Vamos a dar formato a nuestros elementos
  const secondsWithFormart = formatting(seconds),
    minutesWithFormart = formatting(minutes),
    hoursWithFormat = formatting(hours);

  chronometer.innerText = `${hoursWithFormat}:${minutesWithFormart}:${secondsWithFormart}`;
}

// ? funcion para dar formato a nuestros elementos
function formatting(timeUnit) {
  // ? Si es menor a 10, vamos a concatenerle un 0 a la izquierda
  return timeUnit < 10 ? `0${timeUnit}` : timeUnit;
}

// ? Escuchador de eventos
buttonStartPause.addEventListener("click", function () {
  if (chronometerStatus === "paused") {
    // * Vamos a actualizar nuestro intervalo cada segundo... el 1000 son milisegundos, por lo que ponemos 1 segundo... esto actualizara el cronometro cada segundo
    timeInterval = window.setInterval(updateChronometer, 1000);
    // ? Vamos a reemplazar nuestro icono de play por uno de PaymentRequestUpdateEvent
    buttonStartPause.innerHTML = '<i class="bi bi-pause-fill"></i>';
    // ? Remover el atributo disabled
    buttonRestart.removeAttribute("disabled");
    // ? Remover y agregar clases
    buttonStartPause.classList.remove("start");
    buttonStartPause.classList.add("pause");
    // ? Cambiar el estado del cronometro
    chronometerStatus = "started";
  } else {
    // ? En este caso eliminamos el intervalo, que creamos
    window.clearInterval(timeInterval);
    // ? Colocamos el icono de play
    buttonStartPause.innerHTML = '<i class="bi bi-play-fill"></i>';
    // ? Agregar y remover clases
    buttonStartPause.classList.remove("pause");
    buttonStartPause.classList.add("start");
    // ? Cambiar el estado del cronometro
    chronometerStatus = "paused";
  }
});

buttonRestart.addEventListener("click", function () {
  // ? Eliminar el intervalo de tiempo creado
  window.clearInterval(timeInterval);
  // ? Reiniciar los valores
  (hours = 0), (minutes = 0), (seconds = 0);
  // ? Actualizar el texto por el inicial
  chronometer.innerText = "00:00:00";
  // ? Actuliazamos el icono de play
  buttonStartPause.innerHTML = '<i class="bi bi-play-fill"></i>';
  // ? Agregar el atributo de disabled
  buttonRestart.setAttribute("disabled", "");
  // ? Agregar y quitar clases
  buttonStartPause.classList.remove("pause");
  buttonStartPause.classList.add("start");
  // ? Cambiar el estado del cronometro
  chronometerStatus = "paused";
});
