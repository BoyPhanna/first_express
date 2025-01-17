const { Router } = require("express");
const { makeInvoker } = require("awilix-express");

const router = Router();

const api = makeInvoker(({ userService }) => ({
  getUsers: async (req, res) => {
    const users = await userService.getAllUsers();
    res.json(users);
  },
}));

router.get("/", api("getUsers"));

module.exports = router;
