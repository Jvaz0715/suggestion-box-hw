const Suggestion = require('../model/Suggestion');

// - getAllSuggestions
async function getAllSuggestions(req, res) {
    try {
        let foundAllSuggestions = await Suggestion.find({});
        res.json({message: "success", foundAllSuggestions});
    } catch (e) {
        res.status(500).json({message: "failure", error: e.message });
    }
};

// - getSingleSuggestion - get one suggestion based on id using parameters
async function getSingleSuggestion(req, res) {
    try {
        let singleSuggestion = await Suggestion.findById(req.params.id);
        res.json({message: "success", singleSuggestion});
    } catch (e) {
        res.status(500).json({message: "failure", error: e.message });
    }
};

// - createSuggestion- does not need id or time from user
async function createSuggestion(req, res) {
    const { title, author, suggestion, likes, anonymous } = req.body;

    try {
        let newSuggestion = new Suggestion({
           title,
           author,
           suggestion,
           likes,
           anonymous, 
        });

        let savedSuggestion = await newSuggestion.save();

        res.json({ message: "Success", savedSuggestion });
    } catch (e) {
        console.log("e is below James")
        console.log(e)
        console.log("e.message is below James")
        console.log(e.message)
        res.status(500).json({message: "failure", error: e.message })
    }
};

// - updateSuggestion- user can only update title and suggestion

async function updateSuggestion(req, res) {
    try{
        
        let updatedSuggestion = await Suggestion.findByIdAndUpdate(req.params.id, req.body);

        res.json({message: "Success", updatedSuggestion});
    } catch (e) {
        res.status(500).json({message: "failure", error: e.message });
    }
}

// - deleteSuggestion - suggestion deletes based on id
async function deleteSuggestion(req, res) {
    try{
        let deletedSuggestion = await Suggestion.findByIdAndRemove(req.params.id);

        res.json({ message: "Success", deletedSuggestion});

    } catch (e) {
        res.status(500).json({message: "failure", error: e.message })
    };
}

module.exports = { 
    getAllSuggestions,
    getSingleSuggestion,
    createSuggestion,
    updateSuggestion,
    deleteSuggestion,
}