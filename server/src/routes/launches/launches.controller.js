const {getAllLaunches: launchesArray} = require("../../models/launches.model");
async function getAllLaunches(req, res) {
    return res.status(200).json(launchesArray);
    // its good to return res.status
    // to assure that we only call it once
    // we cannot set response multiple times
}

module.exports = {
    getAllLaunches,
}