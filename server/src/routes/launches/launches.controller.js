const {
    getAllLaunches,
    addNewLaunch,
} = require("../../models/launches.model");
async function httpGetAllLaunches(req, res) {
    return res.status(200).json(getAllLaunches());
    // its good to return res.status
    // to assure that we only call it once
    // we cannot set response multiple times
}
function httpAddNewLaunch(req, res) {
    const launch = req.body;
    const { isOk, missing } = validate(launch);
    if (!isOk) {
        return res.status(400).json(
            { error: `Missing required launch property: ${missing}!` }
        );
    }    
    launch.launchDate = new Date(launch.launchDate);
    addNewLaunch(launch);
    return res.status(201).json(launch);
}
function validate(launch) {
    const hasMissingProperty = !launch.mission
        || !launch.rocket
        || !launch.launchDate
        || !launch.destination;
    let missing;
    if (hasMissingProperty) {
        missing = !launch.mission
            ? "mission"
            : !launch.rocket
                ? "rocket"
                : !launch.launchDate
                    ? "launchDate"
                    : "destination";
    }    
    return { isOk: !hasMissingProperty, missing };
}

module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch,
}