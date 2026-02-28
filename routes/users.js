// express js defib=ned and required
const express = require("express");
const router = Router();

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

//these are the variues routes defined that can be used when this url is accessed
router.get("/", (req, res) => {
  res.send(users);
});

router.get("/new", (req, res) => {
  res.send("User New Form");
});

router.post("/", (req, res) => {
  res.send("Create User");
});

// passing a dymanic value through the URL
router // using also allows us to chain the routes as long as they have the same intial start on the URL
  .route("/:id")
  .get((req, res) => {
    let id = req.params.id;
    res.send(`get user with id ${req.params.id}`).send(users[id]);
  })
  .put((req, res) => {
    req.params.id;
    res.send(`Update user with id ${req.params.id}`);
  })
  .delete((req, res) => {
    req.params.id;
    res.send(`delete user with id ${req.params.id}`);
  });

router.param("id", (req, res, next, id) => {
  req.user = users[id];
  console.log(req.user);
  next();
});

export default router; // this exports the route so that it can be acessed
