const http = require("http");

const reqListener = (req, res) => {
  //   console.log("req >> ", req);
  console.log("req >> ", req.url, req.headers);

  // process.exit(); to stop node.js code execution manually
};

const server = http.createServer(reqListener);

server.listen(3000);
