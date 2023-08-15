const express = require("express");
const menuRouter = express.Router();

const pizzaController = require("../controllers/pizza");
const menuController = require("../controllers/menu");
const drinksController = require("../controllers/drinks");

menuRouter.get("/", menuController.getAll);

menuRouter.get("/pizza", pizzaController.getAll);
menuRouter.put("/pizza", pizzaController.put);
menuRouter.delete("/pizza/:id", pizzaController.deleteById);
menuRouter.patch("/pizza/:id/price", pizzaController.updatePriceById);
menuRouter.delete("/pizza/title/:title", pizzaController.deleteByTitle);

menuRouter.get("/drinks", drinksController.getAll);
menuRouter.put("/drinks", drinksController.put);
menuRouter.delete("/drinks/:id", drinksController.deleteById);
menuRouter.patch("/drinks/:id/price", drinksController.updatePriceById);
menuRouter.delete("/drinks/title/:title", drinksController.deleteByTitle);

module.exports = menuRouter;
