export  function authSignIn(){
    console.log('Redirect to Strava login');
    window.open("https://www.strava.com/oauth/authorize?client_id=53919&response_type=code&redirect_uri=http://localhost:3000/&approval_prompt=force&scope=read", "_self");
}

export  function readCodeAndScope(){
    let response = {};
    response.error = getUrlParameter('error');
    if(!response.error){
        response.code = getUrlParameter('code');
        response.scope = getUrlParameter('scope');
    }
    console.log(response);
    return response;
}

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(window.location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};