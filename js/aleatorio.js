// Función para generar un arreglo aleatorio
export function generarArregloAleatorio(cantidad) {
    const numeros = [1, 2, 3, 4];
    const resultado = [];

    while (resultado.length < cantidad) {
        const secuencia = [...numeros];
        for (let i = secuencia.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [secuencia[i], secuencia[j]] = [secuencia[j], secuencia[i]];
        }
        resultado.push(...secuencia);
    }

    return resultado.slice(0, cantidad);
}