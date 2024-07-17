//const express  = require('express'); // CommonJS <-- Manera antigua para importar paquetes desde el package.json "dependencies"

import express from 'express';  // <--- agregamos "type": "module" en package.json

const app = express(); // a app le vamos a agregar las configuraciones
const port = 3000;  // <-- definimos el puerto

// routing <-- definimos los diferentes endpoint
app.get('/', (req, res) => { // <-- lo vemos en "http://localhost:3000/"
    res.send('hola mundo en express'); //<-- send muestra información
})
app.get('/about', (req, res) => { // <-- lo vemos en "http://localhost:3000/about"
    res.send('Ruta about');
})
app.get('/json', (req, res) => { // <-- lo vemos en "http://localhost:3000/json"
    res.json({ id: 1, ok: true, msg: 'Objeto json' });
})

app.listen(port, () => {
    console.log(`corriendo en el puerto ${port}`);
})