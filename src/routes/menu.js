const express = require("express");
const menuRouter = express.Router();

const pizzaController = require("../controllers/pizza");

menuRouter.get("/pizza", pizzaController.getAll);
menuRouter.put("/pizza", pizzaController.put);
menuRouter.get("/test", pizzaController.test);
menuRouter.delete("/pizza/:id", pizzaController.deleteById);
menuRouter.delete("/pizza/title/:title", pizzaController.deleteByTitle);

module.exports = menuRouter;
