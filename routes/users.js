// express js defib=ned and required
const express = require("express");
const router = express.Router();

//these are the variues routes defined that can be used when this url is accessed
router.get("/", (req, res) => {
  res.send("user List");
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
    req.params.id;
    res.send(`get user with id ${req.params.id}`);
  })
  .put((req, res) => {
    req.params.id;
    res.send(`Update user with id ${req.params.id}`);
  })
  .delete((req, res) => {
    req.params.id;
    res.send(`delete user with id ${req.params.id}`);
  });

let users = [{ name: "Jack" }, { name: "memes" }];

router.param("id", (req, res, next, id) => {
  req.user = users[id];
  console.log(req.user);
  next();
});

module.exports = router; // this exports the route so that it can be acessed
