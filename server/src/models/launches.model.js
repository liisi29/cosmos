const launchesMap = new Map();

const launch = {
    flightNumber: 100,
    mission: "Kepler Expolration",
    rocket: "Explorer IS1",
    launcDate: new Date("27/12/2030"),
    destination: "Kepler-442 b",
    customers: ["ZTM", "Liisi"],
    upcoming: true,
    success: true,
}
launchesMap.set(launch.flightNumber, launch);
let latestFlightNumber = launch.flightNumber;
// get array from map
function existsLaunch(flightNumber) {
    return launchesMap.has(flightNumber);
}
// get array from map
function getAllLaunches() {
    return Array.from(launchesMap.values());
}
// get array from map
function addNewLaunch(launch) {
    launchesMap.set(
        latestFlightNumber,
        Object.assign(launch, {
            customers: ["ZTM", "Liisi"],
            flightNumber: latestFlightNumber,
            upcoming: true,
            success: true,
        }),
    );
    latestFlightNumber++;
}
// get array from map
function deleteLaunch(flightNumber) {
    const aborted = launchesMap.get(flightNumber);
    aborted.upcoming = false;
    aborted.success = false;
}

module.exports = {
    addNewLaunch,
    deleteLaunch,
    existsLaunch,
    getAllLaunches,
};