const http = require("http");
const url = require("url");
const port = 8081;

let todoList = [
  "Hit the gym",
  "Play cricket",
  "Study",
  "Sleep",
  "Read a book",
  "Watch a movie",
  "Organize the desk",
];

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (req.method === "GET" && parsedUrl.pathname === "/todos") {
    const limit = parseInt(parsedUrl.query.n, 10);
    if (!isNaN(limit) && limit > 0) {
      const limitedTodoList = todoList.slice(0, limit);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(limitedTodoList));
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(todoList));
    }
  } else if (req.method === "POST" && parsedUrl.pathname === "/todos") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      try {
        const data = JSON.parse(body);
        if (data.name) {
          todoList.push(data.name);
          res.writeHead(201, { "Content-Type": "text/plain" });
          res.end();
        } else {
          res.writeHead(400, { "Content-Type": "text/plain" });
          res.end("Bad Request: Missing name property in JSON body.");
        }
      } catch (error) {
        res.writeHead(400, { "Content-Type": "text/plain" });
        res.end("Bad Request: Invalid JSON body.");
      }
    });
  } else if (req.method === "DELETE" && parsedUrl.pathname === "/todos") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      try {
        const data = JSON.parse(body);
        if (data.name) {
          const index = todoList.indexOf(data.name);
          if (index !== -1) {
            todoList.splice(index, 1);
            res.writeHead(204, { "Content-Type": "text/plain" });
            res.end();
          } else {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("Not Found: Todo item not found.");
          }
        } else {
          res.writeHead(400, { "Content-Type": "text/plain" });
          res.end("Bad Request: Missing name property in JSON body.");
        }
      } catch (error) {
        res.writeHead(400, { "Content-Type": "text/plain" });
        res.end("Bad Request: Invalid JSON body.");
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
