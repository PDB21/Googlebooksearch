const router = require("express").Router();

const { searchByParam } = require("../controllers/api");

router.get("/", searchByParam);

module.exports = router;
