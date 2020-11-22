export default function authSignIn(){
    console.log('Redirect to Strava login');
    window.open("https://www.strava.com/oauth/authorize?client_id=53919&response_type=code&redirect_uri=http://localhost:3000/&approval_prompt=force&scope=read", "_self");
}