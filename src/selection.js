import React, { Component } from 'react'
import DropdownSettings from './dropdownSettings';

export default class Selection extends Component {
    constructor (props){
        super(props)
        this.state = {
            //metric: 'distance'
        }
        this.updateMetric = this.updateMetric
    }

    updateMetric = (metric) => {
        // console.log('Update metric to ', metric)
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
                                updateMetric = {this.updateMetric}
                                metric = {this.state.metric}
                            />
                        </div>
                        <div className = "col-med">
                            <DropdownSettings 
                                options = 'metric' 
                                updateMetric = {this.updateMetric}
                                metric = {this.state.metric}
                            />
                        </div>
                        <div className = "col-med">
                            <DropdownSettings
                                options = 'constant'
                                updateMetric = {this.updateMetric}
                                metric = {this.state.metric} 
                            /> 
                        </div>
                    </div>
                </div>
            </div>    
        )
    }
}