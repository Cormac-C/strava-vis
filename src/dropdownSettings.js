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
      this.metric = findMetric(option.label)
      this.props.updateMetric(this.metric)
    }
  }

  render () {
    const newOptionSet = findOptionSet(this.props.options, this.props.metric)
    const defaultOption = newOptionSet[0]
    return (
      <section>
        <Dropdown options={newOptionSet} onChange={this._onSelect} value={defaultOption} placeholder={newOptionSet[0] } />
      </section>
    )
  }
}

function findOptionSet(options, newMetric){
  let newOptionSet = activityOptions;
  switch(options){
    case 'activity':
      newOptionSet = activityOptions;
      break;
    case 'metric':
      newOptionSet = metricOptions;
      break;
    case 'constant':
      newOptionSet = distanceConstantOptions;
      switch (newMetric) {
        case 'distance':
          newOptionSet = distanceConstantOptions;
          break;
        case 'height':
          newOptionSet = heightConstantOptions;
          break;
        case 'time':
          newOptionSet = timeConstantOptions;
          break;
        default:
      }
      break;  
    default:    
  }
  return newOptionSet
}

function findMetric(label){
  let newMetric;
  switch(label){
    case 'as far as':
      newMetric = 'distance';
      break;
    case 'as high as':
      newMetric = 'height';
      break;
    case 'as long as':
      newMetric = 'time';
      break;
    default:
  }
  return newMetric;
}

export default DropdownSettings
