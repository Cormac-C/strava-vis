import React, { Component } from 'react'
import DropdownSettings from './dropdownSettings';

export default class Selection extends Component {
    constructor (props){
        super(props)
        this.state = {
            activity: '',
            metric: ''
        }
    }

    updateActivity = (activity) => {
        this.setState(state => ({activity}))
    };

    updateMetric = (metric) => {
        this.setState(state => ({metric}))
    };

    render(){
        return(
            <div>
                <div id = "selection">
                    <div className = "row">
                        <div className = "col-med">
                            <DropdownSettings 
                                options = 'activity' 
                                updateActivity = {this.updateActivity}
                                updateMetric = {this.updateMetric}
                                activity = {this.state.activity}
                                metric = {this.state.metric}
                            />
                        </div>
                        <div className = "col-med">
                            <DropdownSettings 
                                options = 'metric' 
                                updateActivity = {this.updateActivity}
                                updateMetric = {this.updateMetric}
                                activity = {this.state.activity}
                                metric = {this.state.metric}
                            />
                        </div>
                        <div className = "col-med">
                            <DropdownSettings
                                options = 'constant'
                                updateActivity = {this.updateActivity}
                                updateMetric = {this.updateMetric}
                                activity = {this.state.activity}
                                metric = {this.state.metric} 
                            /> 
                        </div>
                    </div>
                </div>
            </div>    
        )
    }
}