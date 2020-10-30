const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
// const bcrypt = require("bcrypt");
const User = require("../models/").User;

const router = new Router();

router.post("/", async (req, res, next) => {
  const { email } = req.body;
  try {
    if (!email) {
      return res.status(400).send("Please provide a valid email.");
    }
    const matchingUser = await User.findOne({ where: { email: email } });
    if (!matchingUser) {
      return res.status(404).send(`no user found with email ${email}`);
    }
    res.send({
      jwt: toJWT({
        userId: matchingUser.dataValues.id,
        isAdmin: matchingUser.dataValues.isAdmin,
      }),
    });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
