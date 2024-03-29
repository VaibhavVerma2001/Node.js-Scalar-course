// import module using require()

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Height, width, borders and backgrounds </title>
      <style>
          #firstPara{
              background-color: red;
              height: 100px;
              width:455px;
              border: 4px solid green;
              /* border-width: 4px;
              border-color: green;
              border-style: solid;  */
              border-radius: 11px;
          }
  
          #secondPara{
              background-color: rgb(58, 243, 98);
              height: 100px;
              width:455px; 
              border-top: 2px solid rgb(231, 22, 231);
              border-right: 2px solid rgb(18, 10, 133);
              border-bottom: 2px solid rgba(9, 144, 27, 0.774);
              border-left: 2px solid rgb(156, 42, 13);
              border-top-left-radius: 4px;
              border-top-right-radius: 14px;
              border-bottom-left-radius: 8px;
              border-bottom-right-radius: 24px;
          }
      </style>
  </head>
  <body>
      <h3>This is heading</h3>
      <p id="firstPara">This is a paragraph</p>
  
      <h3>This is second heading</h3>
      <p id="secondPara">This is my second paragraph</p>
  
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
