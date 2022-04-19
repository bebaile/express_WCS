const express = require("express");
const port = 8080;
const app = express();

const users = [
  { id: 1, name: "bob" },
  { id: 2, name: "patrick" },
  { id: 3, name: "carlos" },
];

app.get("/", (req, resp) => {
  resp.sendStatus(400);
});

app.get("/users", (req, resp) => {
  resp.send(users);
});

app.get("/user/:id", (req, res) => {
  console.log(req.params);
  res.send(`tu as demandé l'utilisateur avec l'id = ${req.params.id}`);
  res.send(`${users[parseInt(req.params.id) - 1].name}`);
});

app.listen(port, (err) => {
  if (err) {
    console.error("something bad happened");
  } else {
    console.log(`listening on port ${port}`);
  }
});
