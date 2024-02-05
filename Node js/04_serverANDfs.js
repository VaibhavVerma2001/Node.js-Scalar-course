const http = require('http');
const fs = require('fs');

const fileContent = fs.readFileSync('07_flex_box.html');

const hostname = '127.0.0.1';
const port = 80;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.write(fileContent); 
    res.end();
    // res.end(fileContent); ////we can use this too
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


//note if we write port 80 then we can run using 127.0.0.1 only
//else we need to write 127.0.0.1:port
