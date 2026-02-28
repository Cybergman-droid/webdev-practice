//adddedd express js o the project definen as app
const express = require("express");
const app = express();

// set the view engine to ejs whaich allows the server to display html code
app.set("view engine", "ejs");

// thuis gets a value from the page and uses request and eresponse parameters to process values and return if needed
app.get("/", (req, res) => {
  console.log("here");
  res.render("index", { text: "world" });
});

// the router is used to execute code when a specific url is visited what is shown below is a more abstract version of this which allows a seprate file containing the routes for a feature to be refrenced and used
const userRouter = require("./routes/users");
app.use("/users", userRouter); // this ades th estartu=ing url so that it doesn't have to be repated every time

//this shows us the port the server is supposed to listen on
app.listen(3000);
