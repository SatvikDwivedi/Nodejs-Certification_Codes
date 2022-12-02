const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res)=>{
    console.log(req.url)
    res.statusCodes = 200;
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>This is my code</h1> <p>its my way to rock the world!!!</p>');
})

server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
});