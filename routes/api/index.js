const router = require("express").Router();
const padsRoutes = require("./pads");

// User routes
router.use("/pads", padsRoutes);

module.exports = router;
