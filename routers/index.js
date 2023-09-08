const { Router } = require("express");
const trackOneRouter = require("./trackOneRoutes");
const router = Router();

router.use("/api", trackOneRouter);

module.exports = router;
