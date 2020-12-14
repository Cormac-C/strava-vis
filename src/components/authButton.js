import React, {Component} from 'react'
import {authSignIn} from '../utils/strava'

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