const { input } = require('./utils/input');

async function main() {
    const ordenamientos = ['Primero', 'Segundo', 'Tercero', 'Cuarto'];
    let sumaDeNotas = 0;
    for (const ord of ordenamientos) {
        const value = await input(ord + ' nota: ');
        
        sumaDeNotas += parseFloat(value);
    }
    console.log('Promedio =' + sumaDeNotas/4);
}

main();
