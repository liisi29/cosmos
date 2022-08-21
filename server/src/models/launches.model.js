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

// get array from map
function getAllLaunches() {
    return Array.from(launches.values());
}

module.exports = {
    getAllLaunches,
};