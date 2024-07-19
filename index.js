import express from 'express';  // <--- agregamos "type": "module" en package.json
import { usuariosRouter } from './routes/usuarios.routes.js';


const app = express(); // a app le vamos a agregar las configuraciones

// Habilitamos Pug
app.set('view engine', 'pug'); // <-- quiero usar pug
app.set('views', './views'); // <-- donde estan los archivos


// routing <-- definimos los diferentes endpoint. - app.use busca todas las rutas que incien con '/'
app.use('/', usuariosRouter);

// Definimos puerto y arrancamos el servidor
const port = 3000;
app.listen(port, () => {
    console.log(`corriendo en el puerto ${port}`);
})