var express = require('express');
var router = express.Router();
const {
  getAllSuggestions,
  getSingleSuggestion,
  createSuggestion,
  updateSuggestion,
  deleteSuggestion,
} = require("./controller/suggestionController");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// get all suggestions
router.get("/all-suggestions", getAllSuggestions);

//get single suggestion
router.get("/single-suggestion/:id", getSingleSuggestion)

// create a suggestion
router.post("/create-suggestion", createSuggestion);

//update a suggestion

router.put("/update-suggestion/:id", updateSuggestion)

//delete a suggestion
router.delete("/delete-suggestion/:id", deleteSuggestion);

module.exports = router;
