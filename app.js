const http = require('http');

const port = 3000;

const requestHandler = (request, response) => {
  response.end('Hello Bro, DevOps Pipeline Working Successfully! 🚀');
};

const server = http.createServer(requestHandler);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
