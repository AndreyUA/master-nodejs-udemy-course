const http = require("http");

const reqListener = (req, res) => {
  console.log("req >> ", req);

  // process.exit(); to stop node.js code execution manually
};

const server = http.createServer(reqListener);

server.listen(3000);
