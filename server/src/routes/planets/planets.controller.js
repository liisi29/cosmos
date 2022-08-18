const {planets} = require("../../models/planets.model");
async function getAllPlanets(req, res) {
    return res.status(200).json(planets);
    // its good to return res.status
    // to assure that we only call it once
    // we cannot set response multiple times
}

module.exports = {
    getAllPlanets,
}