const express = require("express");
const router = express.Router();
// import
const { create0rUpdateUser } = require("../controllers/auth");
router.get("/create-or-update-user", create0rUpdateUser);

module.exports = router;
