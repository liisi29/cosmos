const fs = require("fs");
const path = require("path");
const { parse } = require("csv-parse");


const habitablePlanets = [];

function isHabitablePlanet(planet) {
    return planet["koi_disposition"] === "CONFIRMED"
        && planet["koi_insol"] > 0.36 && planet["koi_insol"] < 1.11
        && planet["koi_prad"] < 1.6;
}

function loadPlanetsData() {
    return new Promise((resolve, reject) => {
        fs.createReadStream(path.join(__dirname, "..", "..", "data", "kepler_data.csv" ))
        .pipe(parse({ // csv parser package
            comment: "#",
            columns: true,
        }))
        .on("data", (onePlanet) => {
            if (isHabitablePlanet(onePlanet)) {
                habitablePlanets.push(onePlanet);
            }        
        })
        .on("error", (err) => {
            console.error(err);
            reject(err);
        })
        .on("end", () => {
            console.log(`${habitablePlanets.length} habitable planets found!`)
            resolve();
        })
    })    
}




module.exports = {
    planets: habitablePlanets,
    loadPlanetsData,
};