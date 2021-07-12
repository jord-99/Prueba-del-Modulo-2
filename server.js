const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'dist', 'Prueba-del-Modulo-2')))

app.all("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'Prueba-del-Modulo-2', 'index.html'))
})

app.listen(process.env.PORT || 3000)