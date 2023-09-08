const { Router } = require("express");
const { getData } = require("../controllers/trackOneController");

const router = Router();

router.get("/", getData);

module.exports = router;
