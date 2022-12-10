const express = require("express");
const router = express.Router();

const intemController = require('../controllers/itemController')
const orderController = require('../controllers/orderController');




router.get("/item",intemController.getItem);



router.post('/order', orderController.createOder);
router.get("/order/", orderController.getOrder)
router.delete("/order/:orderId", orderController.deleteOrderById)

module.exports = router;