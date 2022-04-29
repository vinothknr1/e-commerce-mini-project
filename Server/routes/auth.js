const express=require('express');
const { Router } = require('express');
const router=express.Router();
const app = express();
app.get("/create-or-update-user", (req, res) => {
    res.json({
      data: "hey you hit create-or-update-user api endpoint",
    });
  });
  const port = process.env.PORT || 8000;
  app.listen(port, () => console.log("Server is running on port ${port}"));
  module.exports=router;