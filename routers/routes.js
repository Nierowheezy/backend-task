const { Router } = require("express");
// const { getData } = require("../controllers/trackOneController");
const {
  getPersons,
  getPerson,
  createPerson,
  updatePerson,
  deletePerson,
} = require("../controllers/personController");

// const { validateDbId } = require("../middlewares");

const router = Router();

// router.get("/", getData);
router.get("/", getPersons);
router.get("/:id", getPerson);
router.post("/", createPerson);
router.put("/:id", updatePerson);
router.delete("/:id", deletePerson);

module.exports = router;
