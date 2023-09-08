const { Router } = require("express");
const trackOneRouter = require("./trackOneRoutes");
const router = Router();

router.use("/api/v1/getdata", trackOneRouter);

module.exports = router;
