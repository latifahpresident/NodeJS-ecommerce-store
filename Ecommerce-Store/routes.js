// const fs = require('fs');

// const requestHandler = (req, res) => {
//     const url = req.url;
//     const method = req.method;
//     if (url === '/') {
//         res.write('<html>');
//         res.write('<head><title>Enter Message</title><head>');
//         res.write('<body>');
//         res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>');
//         res.write('</body>')
//         res.write('</html>');
//         return res.end();
//       }
//       if (url === '/message' && method === 'POST') {
//         const body = [];
//         req.on('data', (chunk) => {
//           console.log(chunk);
//           body.push(chunk);
//         });
//         req.on('end', () => {
//           const parsedBody = Buffer.concat(body).toString();
//           const message = parsedBody.split('=')[1];
//           fs.writeFileSync('message.txt', message, (err) => {
//             res.statusCode = 302;
//             res.setHeader('Location', '/');
//             return res.end();
//           });
//         });
//       }
//       res.setHeader('Content-Type', 'text/html');
//       res.write('<html>');
//       res.write('<head><title>My First Page</title><head>');
//       res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
//       res.write('</html>');
//       res.end();
// };



//Ways to export
// module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     someText: 'hard coded text ans something else'
// }

exports.handler = requestHandler
exports.someText= 'more text again'

// server.use(express.static(path.join(__dirname, 'public'))); 

// const path = require('path');

// const express = require('express'); 

// const rootDir = ('../Utilities/path');

// const router = express.Router();

// router.get('/', (req, res, next) => {
//   res.sendFile(path.join(rootDir, 'views', 'home.html'))
// })

// router.get('/users', (req, res, next) => {
//   res.sendFile(path.join(rootDir, 'views', 'users.html'))
// })

// router.get('/post-users', (req, res, next) => {
//   res.sendFile(path.join(rootDir, 'views', 'post-user.html'))
// })

// router.post('/post-users', (req, res, next) => {
//   console.log(req.body)
//   res.redirect('/')
// })