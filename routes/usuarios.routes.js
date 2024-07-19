import express from 'express';
export const usuariosRouter = express.Router();

//const express  = require('express'); // CommonJS <-- Manera antigua para importar paquetes desde el package.json "dependencies"


// routing <-- definimos los diferentes endpoint
// .get solo busca la ruta exacta
usuariosRouter.get('/', (req, res) => { // <-- lo vemos en "http://localhost:3000/"
    res.send('hola mundo en express'); //<-- send muestra información
})
usuariosRouter.get('/about', (req, res) => { // <-- lo vemos en "http://localhost:3000/about"
    res.send('Ruta about');
})
usuariosRouter.get('/json', (req, res) => { // <-- lo vemos en "http://localhost:3000/json"
    res.json({ id: 1, ok: true, msg: 'Objeto json GET' });
})
usuariosRouter.post('/json', (req, res) => { // <-- lo vemos en POSTMAN "http://localhost:3000/json"
    res.json({ id: 1, ok: true, msg: 'Objeto json POST' });
})


// Englobamos Rutas
usuariosRouter.route('/jsonroute') // "http://localhost:3000/jsonroute"
    .get((req, res) => {
        res.json({ id: 1, ok: true, msg: 'Objeto json GET JSONROUTE' })
    })
    .post((req, res) => {
        res.json({ id: 1, ok: true, msg: 'Objeto json POST JSONROUTE' });
    })


usuariosRouter.get('/login', (req, res) => { // "http://localhost:3000/login"
    res.render('auth/login'); // views > auth > login.pug
})

// export default router;