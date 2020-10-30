const User = require("../models").User;
const { toData } = require("./jwt");

const authorization = async (req, res, next) => {
  // 1. Check for authorization header and split it.
  const auth =
    req.headers.authorization && req.headers.authorization.split(" ");
  // 2. If authorization header exists, the auth type is "Bearer" and we have an auth key at auth[1]
  // we proceed to check the token
  if (auth && auth[0] === "Bearer" && auth[1]) {
    try {
      // 3. We use the toData function to translate the token key to userData. Then we use the userId to as user by key findByPk.
      const data = toData(auth[1]);
      const user = await User.findByPk(data.userId);

      // 4. If the user is not found we set the status to 404.
      if (!user) {
        return res.status(404).send("No user found.");
      }

      // 5. If the user is found, set it to `req.user = user` and call next();
      req.user = user;

      next();
    } catch (e) {
      res.status(400).send(`Invalid JWT Token.`);
    }
  } else {
    res.status(401).send({ message: "Please provide valid credentials" });
  }
};

module.exports = authorization;
