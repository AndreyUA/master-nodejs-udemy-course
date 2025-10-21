const http = require("http");

const reqListener = (req, res) => {
  //   console.log("req >> ", req);
  console.log("req >> ", req.url, req.headers);

  // process.exit(); to stop node.js code execution manually

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My first page</title></head>");
  res.write("<body><h1>Hello from node.js!</h1></body>");
  res.write("</html>");
  res.end();
};

const server = http.createServer(reqListener);

server.listen(3000);
