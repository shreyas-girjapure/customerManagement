const express = require("express");
const app = express();


//DB instance
const { db } = require("./Models/modelEntry");

const port = 3000;

//Middleware used for PostBody
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Direct all /api routes to the route
app.use("/api", require("./Routes/routeEntry"));


//test route
app.get("/", (req, res) => {
  res.send("hello world");
});



//Sync models
db.sync()
  .then(
    app.listen(port, () => {
      console.log("server is now running");
      console.log(db.models);
    })
  )
  .catch((err) => {
    console.log(err);
  });
