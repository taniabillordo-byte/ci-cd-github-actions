// Importa el módulo 'app' desde el archivo local ./app.js
const app = require("./app");

// Define el puerto: intenta obtenerlo de las variables de entorno del sistema (process.env.PORT)
// Si no existe, utiliza el puerto 3000 como valor predeterminado
const PORT = process.env.PORT || 3000;

// Inicia el servidor para que escuche las peticiones en el puerto definido
app.listen(PORT, () => {
    // Imprime un mensaje en la consola confirmando que el servidor está activo y en qué puerto
    console.log(`Servidor escuchando en puerto ${PORT}`);
});