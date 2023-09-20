const express = require("express");
const app = express();
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

// Express will automatically parse JSON request bodies
app.use(express.json());

//Handle GET requests to /todos with or without a query
app.get("/todos", (req, res) => {
  const limit = parseInt(req.query.n, 10);
  if (!isNaN(limit) && limit > 0) {
    const limitedTodoList = todoList.slice(0, limit);
    res.json(limitedTodoList);//show the requested items in query
  } else {
    res.json(todoList);//show everything
  }
});

//Handle POST requests to /todos
app.post("/todos", (req, res) => {
  const addToDo = req.body.name;
  todoList.push(addToDo);
  res.send(todoList);
  res.status(201).end();
})

//Handle DELETE requests to /todos
app.delete("/todos", (req, res) => {
  let removeToDo = req.body.name;
  console.log(removeToDo);
  for(let i = 0; i < todoList.length; i++) {
    if(todoList[i] === removeToDo) {
      todoList.splice(i, 1);
      res.status(204).end();
    }
  }
})

//Handle PATCH requests to /todos
app.all('/todos', (req, res) => {
  res.status(501).send('Not Implemented');
})

//If we want to handle all other routes and send 404
// app.all('*', (req, res) => {
//   res.status(404).send({ message: "Not Found" });
// })

// Redirect from /todos to the new endpoint /user/todos with a 302 status code
// app.get("/todos", (req, res) => {
//   res.redirect(302, "/user/todos");
// });

//Start express server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})