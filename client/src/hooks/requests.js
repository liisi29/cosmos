const API_URL = "http://localhost:8000";
  
  
  // Load planets and return as JSON.
async function httpGetPlanets() {
  const response = await fetch(`${API_URL}/planets`);
  const data = await response.json();
  return data; 
}

  // Load launches, sort by flight number, and return as JSON.
async function httpGetLaunches() {
  const response = await fetch(`${API_URL}/launches`);
  const fetchedLaunches = await response.json();
  return fetchedLaunches.sort((a, b) => {
    return a.flightNumber - b.flightNumber;
  })
}

  // Submit given launch data to launch system.
async function httpSubmitLaunch(launch) {
  console.log(launch)
 
  try {
    return await fetch(`${API_URL}/launches`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(launch),
    }) 
  } catch (e) {
    console.error(e);
    return { ok: false };
  }
}

  // Delete launch with given ID.
async function httpAbortLaunch(id) {
  console.log("httpAbortLaunch", id)
 
  try {
    console.log("going in 2")
    return await fetch(`${API_URL}/launches/${id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    }) 
  } catch (e) {
    console.error(e);
    return { ok: false };
  }
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};