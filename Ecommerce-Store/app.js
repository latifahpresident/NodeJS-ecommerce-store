const http = require('http');
const express = require('express');

const server = express()

server.use('/add-product', (req, res, next) => {
    res.send('<h1>Hello from express</h1>')
})

server.use((req, res, next) => {
    res.send('<h1>Hello from express</h1>')
})
server.listen(9000);

