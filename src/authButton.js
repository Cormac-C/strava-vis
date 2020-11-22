import React, {Component} from 'react'
import authSignIn from './strava'

export default class AuthButton extends Component {
    render(){
        return(
            <div>
                <button onClick={()=>authSignIn()}>
                        Log in to Strava
                </button>
            </div>
        )
    }
}