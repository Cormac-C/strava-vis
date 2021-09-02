export async function getToken(userCode, setToken, setUserName) {
  const beUrl = "https://fast-sands-44797.herokuapp.com/strava/";
  try {
    await fetch(beUrl + "token/" + userCode, {
      method: "GET",
      headers: {
        Connection: "close",
        Accept: "application/json",
        "Accept-Encoding": "gzip, deflate, br",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setToken(response);
      });
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getAthleteStats(athleteId, authToken, setAthleteStats) {
  console.log("Getting stats for athlete: ", athleteId);
  const beUrl = "https://fast-sands-44797.herokuapp.com/strava/";
  const auth = "Bearer " + authToken;
  try {
    await fetch(beUrl + "stats/" + athleteId, {
      method: "GET",
      headers: {
        Connection: "close",
        Accept: "application/json",
        "Accept-Encoding": "gzip, deflate, br",
        "Content-Type": "application/json",
        Authorization: auth,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        //console.log(response);
        setAthleteStats(response);
      });
  } catch (error) {
    //console.log(error);
    return error;
  }
}

export function getAthlete(userCode) {
  try {
    let token, counter;
    do {
      token = getToken(userCode);
      console.log("Token:", token);
      counter++;
    } while (token.error && counter < 5);
    const stats = getAthleteStats(token.athlete.id, token.access_token);
    console.log("Stats", stats);
    return stats;
  } catch (error) {
    console.log(error);
    return error;
  }
}
