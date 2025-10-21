const http = require("http");

const reqListener = (req, res) => {
  console.log("req >> ", req);
};

const server = http.createServer(reqListener);

server.listen(3000);
