//const express  = require('express'); // CommonJS <-- Manera antigua para importar paquetes desde el package.json "dependencies"

import express from 'express';  // <--- agregamos "type": "module" en package.json
import usuarioRoutes from './routes/usuarioRoutes.routes.js';

const app = express(); // a app le vamos a agregar las configuraciones
const port = 3000;  // <-- definimos el puerto

// .use busca todas las rutas que incien con '/'
app.use('/', usuarioRoutes);

app.listen(port, () => {
    console.log(`corriendo en el puerto ${port}`);
})