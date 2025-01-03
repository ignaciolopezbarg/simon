// sonidos.js
export function reproducirSonido(tipo) {
    const sonidos = {
        inicio: new Audio('./sounds/inicio.wav'),
        click: new Audio('./sounds/click.wav'),
        ganar: new Audio('./sounds/ganar.wav'),
        error: new Audio('./sounds/error.wav')
    };

    if (sonidos[tipo]) {
        sonidos[tipo].play();
    }
}

