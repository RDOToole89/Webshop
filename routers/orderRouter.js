const { Router } = require("express");
const router = new Router();
const { Order, OrderProduct } = require("../models");

router.post("/", async (req, res, next) => {
  userId = req.user.dataValues.id;
  try {
    const newOrder = await Order.create({ UserId: userId });
    res.send(newOrder);
  } catch (e) {
    next(e);
  }
});

// As a customer I want to create a new empty order, so I can start purchasing products
// POST /orders (get the userId from the token)

router.post("/:orderId/products/:productId", async (req, res, next) => {
  const { quantity } = req.body;
  const { orderId, productId } = req.params;

  if (!quantity) {
    return res.status(400).send("Please provide a quantity.");
  }

  try {
    const newProductOrder = await OrderProduct.create({
      OrderId: orderId,
      ProductId: productId,
      quantity,
    });

    res.json({ newProductOrder });
  } catch (e) {
    next(e);
  }
});

// {
//   orderId: DataTypes.INTEGER,
//   productId: DataTypes.INTEGER,
//   quantity: DataTypes.INTEGER,
// },

module.exports = router;
// As a customer I add a product to my order, so I can purchase a product
// POST /orders/:orderId/products/:productId

// As a customer I want to see which products are part of my order, so I know what I am paying for
// GET /orders/:orderId -> include Products GET /orders/:orderId/products
