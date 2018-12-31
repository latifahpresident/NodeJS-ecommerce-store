const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const server = express();

server.use(bodyParser.urlencoded({extended: false}));
server.use(express.static(path.join(__dirname, 'public'))) //used to join static pages like the css page

server.use('/admin', adminData.routes)
server.use(shopRoutes)

server.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

server.listen(9000);