const fs = require('fs');
const path = require('path');


const carpeta1 = path.join(__dirname, 'carpeta');
const archivo1 = path.join(carpeta1, 'ejercicio1.txt');


try {
    if (fs.existsSync(archivo1)) {
        fs.unlinkSync(archivo1);
        console.log('Archivo eliminado');
    }
} catch (err) {
    console.error('Error al eliminar el archivo:', err);
}

try {
    if (fs.existsSync(carpeta1)) {

        fs.readdirSync(carpeta1).forEach(file => {
            const curPath = path.join(carpeta1, file);
            if (fs.lstatSync(curPath).isFile()) {
                fs.unlinkSync(curPath);
            }
        });
        
        
        fs.rmdirSync(folderPath);
        console.log('Carpeta eliminada');
    }
} catch (err) {
    console.error('Error al eliminar la carpeta:', err);
}
