import React, { Component } from 'react'
import DropdownSettings from './flatArrayExample';

export default class Selection extends Component {
    render(){
        return(
            <div>
                <div id = "selection">
                    <div className = "row">
                        <div class = "col-med">
                            <DropdownSettings options = 'activity'/>
                        </div>
                        <div className = "col-med">
                            <DropdownSettings options = 'metric'/>
                        </div>
                        <div className = "col-med">
                            <DropdownSettings options = 'distanceConstant'/>
                        </div>
                    </div>
                </div>
            </div>    
        )
    }
}