const express = require('express');
const router = express.Router();

const user = require("../controllers/user");
const auth = require("../controllers/auth");

router.get("/userList", user.userList);


module.exports = router;
