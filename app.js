const http = require('http');
const server  = http.createServer((req,res) =>{
    if(req.url == "/"){
        res.end("Welcome to mypage")
    }
    if(req.url == "/about"){
        res.end('Learning Node');
    }

    res.end(`
    <h1>404</h1>
    <p>We can't seem to find your page</p>
    `)
})

server.listen(5000);