const fs = require('fs');
const path = require('path');


const carpeta1 = path.join(__dirname, 'carpeta');
const archivo1 = path.join(carpeta1, 'ejercicio1.txt');

if (!fs.existsSync(carpeta1)) {
    
    fs.mkdirSync(carpeta1, { recursive: true });
    console.log('Carpeta creada');
} else {
    console.log('La carpeta ya existe');
}

if (!fs.existsSync(carpeta1)) {
   
    fs.writeFileSync(archivo1, '', 'utf8');
    console.log('Archivo creado');
} else {
    console.log('El archivo ya existe');
}

try {
    const data = fs.readFileSync(archivo1, 'utf8');
    console.log('Contenido del archivo:', data);
} catch (err) {
    console.error('Error al leer el archivo:', err);
}

const texto = 'Después de mucho pude realizar el ejercicio :| :)';

try {
    fs.writeFileSync(archivo1, texto, 'utf8');
    console.log('Texto escrito con éxito');
} catch (err) {
    console.error('Error al escribir en el archivo:', err);
}




