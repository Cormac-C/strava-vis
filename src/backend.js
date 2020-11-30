export function getToken(userCode){
    console.log('Getting auth token from backend')
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
        })
    }catch(error){
        console.log(error);
    }
}