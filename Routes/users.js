const { Router } = require("express");
const route = Router();


//Table instance
const { User } = require("../Models/modelEntry");

// Base path till this http://localhost:3000/api/users/

route.get("/getAll", async (req, res) => {
  const users = await User.findAll();
  if (!users) {
    res.status(404).send("Resource not found");
  }
  res.json(users);
});

//Find one by URL parameter as integer
route.get("/:userId", async (req, res) => {
  const user = await User.findByPk(req.params.userId);
  res.json(user);
});


// Create single or Bulk 
route.post("/", async (req, res) => {
  const tempUser = req.body.user;
  if (Array.isArray(tempUser)) {
    try {
      await User.bulkCreate(tempUser);
      res.sendStatus(200);
    } catch (error) {
      res.status(500).send(error.message);
    }
  } else {
    try {
      await User.create(tempUser);
      res.sendStatus(201);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
});

module.exports = route;
