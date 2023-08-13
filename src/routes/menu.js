const express = require("express");
const menuRouter = express.Router();

const pizzaController = require("../controllers/pizza");
const menuController = require("../controllers/menu");
const drinksController = require("../controllers/drinks");

menuRouter.get("/", menuController.getAll);

menuRouter.get("/pizza", pizzaController.getAll);
menuRouter.put("/pizza", pizzaController.put);
menuRouter.delete("/pizza/:id", pizzaController.deleteById);
menuRouter.delete("/pizza/title/:title", pizzaController.deleteByTitle);
menuRouter.patch("/pizza/:id/price", pizzaController.updatePriceById);

menuRouter.get("/drinks", drinksController.getAll);
menuRouter.put("/drinks", drinksController.put);
menuRouter.delete("/drinks/:id", drinksController.deleteById);
menuRouter.delete("/drinks/title/:title", drinksController.deleteByTitle);
menuRouter.patch("/drinks/:id/price", drinksController.updatePriceById);

module.exports = menuRouter;
