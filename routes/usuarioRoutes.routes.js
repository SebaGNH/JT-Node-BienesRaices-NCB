import express from 'express';
const router = express.Router();

// routing <-- definimos los diferentes endpoint
// .get solo busca la ruta exacta
router.get('/', (req, res) => { // <-- lo vemos en "http://localhost:3000/"
    res.send('hola mundo en express'); //<-- send muestra información
})
router.get('/about', (req, res) => { // <-- lo vemos en "http://localhost:3000/about"
    res.send('Ruta about');
})
router.get('/json', (req, res) => { // <-- lo vemos en "http://localhost:3000/json"
    res.json({ id: 1, ok: true, msg: 'Objeto json' });
})

export default router;