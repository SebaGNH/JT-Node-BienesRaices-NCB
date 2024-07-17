const express  = require('express');

const app = express(); // a app le vamos a agregar las configuraciones
const port = 3000;  // <-- definimos el puerto

// routing <-- definimos los diferentes endpoint
app.get('/', (req, res) => { // <-- lo vemos en "http://localhost:3000/"
    res.send('hola mundo en express');
})
app.get('/about', (req, res) => { // <-- lo vemos en "http://localhost:3000/about"
    res.send('Ruta about');
})

app.listen(port, () => {
    console.log(`corriendo en el puerto ${port}`);
})