const express = require("express");
const router = express.Router();

const { authCheck } = require("../middlewares/auth");
// import
const { create0rUpdateUser } = require("../controllers/auth");

router.post("/create-or-update-user", authCheck , create0rUpdateUser);



module.exports = router;
