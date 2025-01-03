// import { reproducirSonido } from "./sonidos.js";
// import { generarArregloAleatorio } from "./aleatorio.js";

// function elegirNivel() {
//     // Seleccionamos los botones dentro del contenedor con ID "nivel"
//     const botones = document.querySelectorAll("#nivel button");

//     botones.forEach((boton) => {
//         boton.addEventListener("click", (event) => {
//             // Obtenemos el nivel seleccionado
//             const nivel = event.target.dataset.value;

//             // Definimos la cantidad según el nivel
//             let cantidad;
//             switch (nivel) {
//                 case "INICIAL":
//                     cantidad = 5;
//                     break;
//                 case "EXPERTO":
//                     cantidad = 10;
//                     break;
//                 case "SAMURAI":
//                     cantidad = 15;
//                     break;
//                 default:
//                     cantidad = 5; // Valor por defecto
//             }

//             // Generamos el arreglo
//             const arreglo = generarArregloAleatorio(cantidad);

//             // Mostramos el resultado en la consola
//             console.log(`Nivel seleccionado: ${nivel}`);
//             console.log(`Arreglo generado:`, arreglo);

//             // Aquí podrías actualizar la interfaz con el resultado generado
//             const resultadoDiv = document.getElementById("resultado");
//             if (resultadoDiv) {
//                 resultadoDiv.innerText = `Nivel: ${nivel}, Arreglo: [${arreglo.join(", ")}]`;
//             }
//         });
//     });
// }

// // Inicializamos los eventos
// elegirNivel();

// let secuencia = [];
// let indiceActual = 0;

// // Generar secuencia al hacer clic en "Generar Secuencia"
// document.getElementById("generate-sequence").addEventListener("click", () => {
//   secuencia = generarArregloAleatorio();
//   console.log("Secuencia generada:", secuencia);
// });

// // Comenzar el juego al hacer clic en "Comenzar"
// document.getElementById("start-game").addEventListener("click", () => {
//   if (secuencia.length > 0) {
//     reproducirSonido("inicio"); // Sonido de inicio
//     indiceActual = 0;
//     mostrarSecuencia();
//   }
// });

// function mostrarSecuencia() {
//   let i = 0;
//   const intervalo = setInterval(() => {
//     resaltarBoton(secuencia[i]);
//     i++;
//     if (i >= indiceActual + 1) {
//       clearInterval(intervalo);
//       esperarClicUsuario();
//     }
//   }, 1000);
// }

// function resaltarBoton(valor) {
//   const boton = document.getElementById(`boton-${valor}`);
//   boton.classList.add("boton-resaltado");
//   setTimeout(() => boton.classList.remove("boton-resaltado"), 500);
// }

// function esperarClicUsuario() {
//   let clicsUsuario = 0;
//   const botones = document.querySelectorAll("#botones-juego button");

//   botones.forEach((boton) => {
//     boton.onclick = (event) => {
//       const valor = parseInt(event.target.dataset.value);
//       reproducirSonido("click"); // Sonido de clic

//       if (valor === secuencia[clicsUsuario]) {
//         clicsUsuario++;
//         if (clicsUsuario > indiceActual) {
//           indiceActual++;
//           if (indiceActual === secuencia.length) {
//             ganarJuego();
//           } else {
//             mostrarSecuencia();
//           }
//         }
//       } else {
//         fallarJuego();
//         botones.forEach((boton) => (boton.onclick = null));
//       }
//     };
//   });
// }

// function ganarJuego() {
//   reproducirSonido("ganar");
//   Swal.fire({
//     title: "Bravo!",
//     text: "Completaste con exito la secuencia",
//     imageUrl: "./img/genio.jpeg",
//     imageWidth: 400,
//     imageHeight: 200,
//     imageAlt: "Custom image",
//   });
//   reiniciarJuego();
// }

// function fallarJuego() {
//   reproducirSonido("error");

//   Swal.fire({
//     title: "Fallaste!",
//     text: "Volve a intentarlo!!",
//     imageUrl: "./img/animals.png",
//     imageWidth: 400,
//     imageHeight: 200,
//     imageAlt: "Custom image",
//   });
//   reiniciarJuego();
// }

// function reiniciarJuego() {
//   secuencia = [];
//   indiceActual = 0;
// }
import { reproducirSonido } from "./sonidos.js";
import { generarArregloAleatorio } from "./aleatorio.js";

// Variables globales
let secuencia = [];
let indiceActual = 0;

// Función para elegir el nivel y generar la secuencia
function elegirNivel() {
  // Seleccionamos los botones dentro del contenedor con ID "nivel"
  const botones = document.querySelectorAll("#nivel button");

  botones.forEach((boton) => {
    boton.addEventListener("click", (event) => {
      // Obtenemos el nivel seleccionado
      const nivel = event.target.dataset.value;

      // Definimos la cantidad según el nivel
      let cantidad;
      switch (nivel) {
        case "KARATEKA":
          cantidad = 5;
          break;
        case "NINJA":
          cantidad = 10;
          break;
        case "SAMURAI":
          cantidad = 15;
          break;
        case "EMPERADOR":
          cantidad = 20;
          break;
        default:
          cantidad = 5; // Valor por defecto
      }

      // Generamos el arreglo
      secuencia = generarArregloAleatorio(cantidad);

      // Mostramos el resultado en la consola
      console.log(`Nivel seleccionado: ${nivel}`);
      console.log(`Secuencia generada:`, secuencia);

      // Aquí podrías actualizar la interfaz con el resultado generado
      const resultadoDiv = document.getElementById("resultado");
      if (resultadoDiv) {
        resultadoDiv.innerText = `Nivel: ${nivel}, Secuencia: [${secuencia.join(
          ", "
        )}]`;
      }
    });
  });
}

// Función para iniciar el juego
function iniciarJuego() {
  document.getElementById("start-game").addEventListener("click", () => {
    if (secuencia.length > 0) {
      reproducirSonido("inicio"); // Sonido de inicio
      indiceActual = 0;
      mostrarSecuencia();
    }
  });
}

// Función para mostrar la secuencia
function mostrarSecuencia() {
  let i = 0;
  const intervalo = setInterval(() => {
    resaltarBoton(secuencia[i]);
    i++;
    if (i >= indiceActual + 1) {
      clearInterval(intervalo);
      esperarClicUsuario();
    }
  }, 1000);
}

// Función para resaltar un botón
function resaltarBoton(valor) {
  const boton = document.getElementById(`boton-${valor}`);
  boton.classList.add("boton-resaltado");
  setTimeout(() => boton.classList.remove("boton-resaltado"), 500);
}

// Función para esperar los clics del usuario
function esperarClicUsuario() {
  let clicsUsuario = 0;
  const botones = document.querySelectorAll("#botones-juego button");

  botones.forEach((boton) => {
    boton.onclick = (event) => {
      const valor = parseInt(event.target.dataset.value);
      reproducirSonido("click"); // Sonido de clic

      if (valor === secuencia[clicsUsuario]) {
        clicsUsuario++;
        if (clicsUsuario > indiceActual) {
          indiceActual++;
          if (indiceActual === secuencia.length) {
            ganarJuego();
          } else {
            botones.forEach((b) => (b.onclick = null)); // Limpiar eventos
            mostrarSecuencia();
          }
        }
      } else {
        fallarJuego();
        botones.forEach((b) => (b.onclick = null)); // Limpiar eventos
      }
    };
  });
}

// Función para manejar el caso de victoria
function ganarJuego() {
  reproducirSonido("ganar");
  Swal.fire({
    title: "Bravo!",
    text: "Completaste con éxito la secuencia",
    imageUrl: "./img/genio.jpeg",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
  }).then(() => {
    reiniciarJuego();
  });
}

// Función para manejar el caso de fallo
function fallarJuego() {
  reproducirSonido("error");
  Swal.fire({
    title: "Fallaste!",
    text: "¡Vuelve a intentarlo!",
    imageUrl: "./img/animals.png",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
  }).then(() => {
    reiniciarJuego();
  });
}

// Función para reiniciar el juego
function reiniciarJuego() {
  secuencia = [];
  indiceActual = 0;

  // Reiniciar botones
  const botones = document.querySelectorAll("#botones-juego button");
  botones.forEach((boton) => (boton.onclick = null)); // Limpiar eventos
}

// Inicializamos los eventos
elegirNivel();
iniciarJuego();
