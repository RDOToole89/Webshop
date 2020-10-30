const express = require("express");
const app = express();
const PORT = 4000;
app.set("json spaces", 2);

const loginRouter = require("./routers/loginRouter");
// const userRouter = require("./routers/userRouter");
const productRouter = require("./routers/productRouter");
const orderRouter = require("./routers/orderRouter");
const authMiddleware = require("./auth/authMiddleware");

app.use(express.json());

// app.use("/users", userRouter);
app.use("/login", loginRouter);
app.use("/products", authMiddleware, productRouter);
app.use("/orders", authMiddleware, orderRouter);
// app.use("/auth", authRouter);
app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => console.log(`App listening on port: ${PORT}`));

/*
As a customer I want to see the products belonging to a specific category, so I can find what I am looking for
GET /categories/:categoryId/products

As a new customer I want to be able to sign up & log in so I can start making an order
Signup: POST /users Login: POST /auth/login

As a customer I want to create a new empty order, so I can start purchasing products
POST /orders (get the userId from the token)

As a customer I add a product to my order, so I can purchase a product
POST /orders/:orderId/products/:productId

As a customer I want to see which products are part of my order, so I know what I am paying for
GET /orders/:orderId -> include Products GET /orders/:orderId/products

As an admin I want to be able to add a new product to the shop
POST /products POST /categories/:categoryId/products
*/
