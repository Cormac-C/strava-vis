import React, { Component } from 'react'
import Dropdown from './dropdown'

const activityOptions = [
  'Run', 'Bike', 'Swim'
]

const metricOptions = [
  'as far as', 'as high as', 'as long as'
]

const distanceConstantOptions = [
  'equator', 'marathon'
]

const heightConstantOptions = [
  'everest', 'marianas trench'
]
const timeConstantOptions = [
  'day', 'week'
]

class DropdownSettings extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: '',
      optionSet: activityOptions
    }
    this.metric = this.props.metric
    this._onSelect = this._onSelect.bind(this)
  }

  _onSelect (option) {
    this.setState({selected: option})
    if (this.props.options === 'metric'){
      switch(option.label){
        case 'as far as':
          this.metric = 'distance';
          break;
        case 'as high as':
          this.metric = 'height';
          break;
        case 'as long as':
          this.metric = 'time';
          break;
      }
      this.props.updateMetric(this.metric)
      console.log("Select")
    }
  }

  render () {
    const defaultOption = this.state.selected
    let newMetric = this.props.metric
    //const placeHolderValue = typeof this.state.selected === 'string' ? this.state.selected : this.state.selected.label
    switch(this.props.options){
      case 'activity':
        this.state.optionSet = activityOptions;
        break;
      case 'metric':
        this.state.optionSet = metricOptions;
        break;
      case 'constant':
        console.log('constant metric', newMetric)
        this.state.optionSet = distanceConstantOptions;
        switch (newMetric) {
          case 'distance':
            console.log('check d')
            this.state.optionSet = distanceConstantOptions;
            break;
          case 'height':
            console.log('check h')
            this.state.optionSet = heightConstantOptions;
            break;
          case 'time':
            console.log('check t')
            this.state.optionSet = timeConstantOptions;
            break;
        }
        break;      
    }


    return (
      <section>
        <Dropdown options={this.state.optionSet} onChange={this._onSelect} value={defaultOption} placeholder={this.state.optionSet[0]} />
      </section>
    )
  }
}

export default DropdownSettings
