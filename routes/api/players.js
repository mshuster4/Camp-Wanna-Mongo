const router = require("express").Router();
const playersController = require("../../controllers/playersController");

// Matches with "/api/players"
router.route("/")
  .get(playersController.findAll)
  .post(playersController.create);

module.exports = router;
