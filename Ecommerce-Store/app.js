const path = require('path');

const express = require('express');
const bodyParser = require('body-parser')
const expressHbs = require('express-handlebars')
const server = express('express-handlebars');
const errorControllers = require('./controllers/404.js');
//Handlebars setup
// server.engine(
//     'hbs', 
//     expressHbs({ 
//         layoutsDir: 'views/layouts/', 
//         defaultLayout: 'main-layouts',
//         extname: 'hbs' //needs to be set to hbs for layout
//     })
// ); 

server.set('view engine', 'ejs');
server.set('views', 'views') 


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

server.use(bodyParser.urlencoded({ extended: false }))
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public'))) //used to join static pages like the css page

server.use('/admin', adminRoutes)
server.use(shopRoutes)

// server.use(errorControllers.get404)
server.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found!'});
})

server.listen(8734, () => console.log('server running on port 8734'));