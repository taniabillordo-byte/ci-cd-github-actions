// Importa la librería 'supertest' para realizar peticiones HTTP simuladas a la app
const request = require("supertest");

// Importa la aplicación Express desde el archivo app.js (ubicado un nivel arriba)
const app = require("../app");

// Agrupa las pruebas relacionadas con la ruta "GET /"
describe("GET /", () => {
    
    // Define una prueba específica dentro del grupo
    it("debe responder con 200 y un mensaje", async () => {
        
        // Realiza una petición GET a la ruta "/" y espera a que termine (await)
        const res = await request(app).get("/");

        // Verifica que el código de estado de la respuesta sea 200
        expect(res.statusCode).toBe(200);

        // Verifica que el contenido del mensaje en el cuerpo sea el esperado
        expect(res.body.message).toBe("API Funcionando");
    });
});