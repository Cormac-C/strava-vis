export function getToken(userCode){
    //console.log('Getting auth token from backend')
    const beUrl = 'http://localhost:9000/strava/';
    try{
        fetch(beUrl + 'token/' + userCode,
            {"method": "GET",
            "headers": {
                'Connection': 'close',
                'Accept': 'application/json',
                'Accept-Encoding': 'gzip, deflate, br',
                'Content-Type': 'application/json',
            },
            }
        ).then(response => response.json())
        .then(response => {
            console.log(response);
            return response;
        })
    }catch(error){
        console.log(error);
        return error;
    }
}

export function getAthleteStats(athleteId, authToken){
    console.log('Getting stats for athlete: ', athleteId);
    const beUrl = 'http://localhost:9000/strava/';
    const auth = 'Bearer' + authToken;
    try{
        fetch(beUrl + 'stats/' + athleteId,
            {"method": "GET",
            "headers": {
                'Connection': 'close',
                'Accept': 'application/json',
                'Accept-Encoding': 'gzip, deflate, br',
                'Content-Type': 'application/json',
                'Authorization': auth,
            },
            }
        ).then(response => response.json())
        .then(response => {
            //console.log(response);
            return response;
        })
    }catch(error){
        //console.log(error);
        return error;
    }
}

export function getAthlete(userCode){
    try{
        let token, counter;
        do{
            token = getToken(userCode);
            console.log('Token:', token);
            counter ++;
        }while(token.error && counter < 5);
        const stats = getAthleteStats(token.athlete.id, token.access_token);
        console.log('Stats', stats)
        return stats;
    }catch(error){
        console.log(error);
        return error;
    }
}