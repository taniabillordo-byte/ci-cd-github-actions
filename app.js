// Importa el framework Express para poder usarlo en el proyecto
const express = require("express");

// Crea una instancia de la aplicación Express
const app = express();

// Define una ruta GET para la raíz ("/") del sitio
app.get("/", (req, res) => {
    // Envía una respuesta con estado 200 (OK) y un objeto JSON con el mensaje
    res.status(200).json({ message: "API Funcionando" });
});

// Define 
app.get("/", (req, res) => {
    // Envía una respuesta con estado 200 (OK) y un objeto JSON con el mensaje
    res.status(200).json({ message: "Ok", clients: [C1, C2] });
});

// Exporta la instancia de 'app' para que pueda ser utilizada en otros archivos (como server.js)
module.exports = app;