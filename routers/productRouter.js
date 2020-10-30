const { Router } = require("express");
const router = new Router();
const Product = require("../models").Product;

router.get("/", async (req, res, next) => {
  try {
    const products = await Product.findAll();
    if (!Product) {
      return res.status(404).send("Products not found");
    }
    res.json(products);
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  const { name, description, price, imgUrl } = req.body;
  user = req.user;
  // console.log("WHAT IS REQ.USER", user);
  // console.log("WHAT IS IN REQ.BODY", req.body);

  if (user.isAdmin) {
    try {
      const newProduct = await Product.create({
        name,
        description,
        price,
        imgUrl,
      });
      res.send(newProduct);
    } catch (e) {
      next(e);
    }
  } else {
    res.status(400).send("You do not have admin privileges.");
  }
});

module.exports = router;
