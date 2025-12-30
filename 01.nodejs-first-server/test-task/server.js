const http = require("http");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Hello</title></head>");
    res.write("<body><h1>hello!<h1/></body>");
    res.write("</html>");

    return res.end();
  }

  if (url === "/users" && method === "GET") {
    res.write("<html>");
    res.write("<head><title>Hello</title></head>");
    res.write("<body><ul><li>user 1</li></ul></body>");
    res.write("</html>");

    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My first page</title></head>");
  res.write("<body><h1>Hello from node.js!</h1></body>");
  res.write("</html>");
  res.end();
};

const server = http.createServer(requestHandler);

server.listen(3000);
