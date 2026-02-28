//adddedd express js o the project definen as app
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

let users = [
  { id: 1, username: "memes", age: 15 },
  { id: 2, username: "alice", age: 22 },
  { id: 3, username: "bob", age: 30 },
  { id: 4, username: "charlie", age: 27 },
  { id: 5, username: "dana", age: 19 },
  { id: 6, username: "eve", age: 24 },
  { id: 7, username: "frank", age: 33 },
  { id: 8, username: "grace", age: 28 },
  { id: 9, username: "heidi", age: 21 },
  { id: 10, username: "ivan", age: 35 },
];

// set the view engine to ejs whaich allows the server to display html code
app.set("view engine", "ejs");

// thuis gets a value from the page and uses request and eresponse parameters to process values and return if needed
app.get("/", (req, res) => {
  console.log("here");
  res.render("index", { text: "world" });
  res.send("hello world");
});

//these are the variues routes defined that can be used when this url is accessed
app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).send("invalid ID entered");

  const findUser = users.find((user) => user.id === id);
  if (!findUser) return res.sendStatus(404);
  return res.send(findUser);
});

app.get("/users/:id/name", (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).send("invalid ID entered");

  const findUser = users.find((user) => user.id === id);
  if (!findUser) return res.sendStatus(404);
  return res.send(findUser.username);
});

app.get("/users/new", (req, res) => {
  res.send("User New Form");
});

app.post("/users/newUser", (req, res) => {
  res.send("Create User");
});

//this shows us the port the server is supposed to listen on
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
