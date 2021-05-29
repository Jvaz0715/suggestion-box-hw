var express = require('express');
var router = express.Router();
const {
  getAllSuggestions,
  // getSingleSuggestion,
  createSuggestion,
  // updateSuggestion,
  // deleteSuggestion,
} = require("./controller/suggestionController");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// get all suggestions
router.get("/all-suggestions", getAllSuggestions);

//get single suggestion

// create a suggestion
router.post("/create-suggestion", createSuggestion);

module.exports = router;
