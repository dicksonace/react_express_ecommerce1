const express = require("express");
const router = express.Router();

const itemsController = require("../controllers/itemsControllers");

router.get("/", itemsController.getItems);
router.post("/add_new_product", itemsController.AddNewItem);

module.exports = router;
