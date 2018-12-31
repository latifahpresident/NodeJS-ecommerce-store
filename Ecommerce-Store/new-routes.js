const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url
    const method = req.method
    if(url === '/') {
        res.write('<html>');
        res.write('<head><title>My second node app</title></head>');
        res.write('<body>');
        res.write('<h1>Greeting Please Add User</h1>');
        res.write('<form action="/create-user" method="POST"><input type="text" name="username"/><button type= "submit">Enter</button></form>')
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    else if(url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk)
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1])
        })

        res.statusCode = 302;
        res.setHeader('Location', '/')
        return res.end();
    }

    else if(url === '/users') {
        res.write('<html>');
        res.write('<head><title>My second node app</title></head>');
        res.write('<body>');
        res.write('<ul><li>User 1</li><li>User 2</li><li>User 3</li></ul>')
        res.write('</body>')
        res.write('</html>')
        return res.end()
    }
    res.setHeader('Content-Type', 'text/html');
      res.write('<html>');
      res.write('<head><title>My First Page</title><head>');
      res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
      res.write('</html>');
      res.end();
}

exports.handler = requestHandler