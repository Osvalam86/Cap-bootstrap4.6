// ? Referencias
const input = document.getElementById("enterTask");
const button = document.querySelector("button");
const listTask = document.querySelector("#listTask");

// ? Function para agregar tareas
const addTask = () => {
  // ? Validar que existe algun valor en nuestro input
  if (input.value) {
    // ? Comenzar a crear y agregar elementos
    let newTask = document.createElement("div");
    newTask.classList.add("task");

    // ? Texto que ingreso el usuario
    let text = document.createElement("p");
    text.innerText = input.value;
    // ? Le agregamos el texto a nuestra nueva tarea
    newTask.appendChild(text);

    // ? Crear y agregar contenedor de iconos
    let icons = document.createElement("div");
    icons.classList.add("icons");
    newTask.appendChild(icons);

    // ? iconos
    let iconComplete = document.createElement("i");
    iconComplete.classList.add("bi", "bi-check-circle-fill", "complete-icon");
    iconComplete.addEventListener("click", completeTask);

    let iconDelete = document.createElement("i");
    iconDelete.classList.add("bi", "bi-trash3-fill", "delete-icon");
    iconDelete.addEventListener("click", deleteTask);

    // ? Agregamos los iconos dentro del contenedor de iconos
    icons.append(iconComplete, iconDelete);

    // ? Agregamos las tarea al contenedor de tareas.
    listTask.appendChild(newTask);

    // ? Limpiamos el input
    input.value = "";
  } else {
    alert("Por favor ingresa una tarea");
  }
};

// ? Funcion para tarea completada
const completeTask = (e) => {
  // ? Subimos en el arbol de nodos hasta llegar a la tarea completa
  let task = e.target.parentNode.parentNode;

  //? Toggle Nos permite alternar una clase, nos ahorramos el condicional
  task.classList.toggle("complete");
};

// ? Funcion para elimiar tarea
const deleteTask = (e) => {
  let task = e.target.parentNode.parentNode;
  task.remove();
};

// ? Creamos escuchador
button.addEventListener("click", addTask);
input.addEventListener("keydown", (e) => {
  let key = e.key.toUpperCase();
  if (key === "ENTER") {
    addTask();
  }
});
