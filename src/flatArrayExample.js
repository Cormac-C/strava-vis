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

class DropdownSettings extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: ''
    }
    this._onSelect = this._onSelect.bind(this)
    this.options = props.options;
  }

  _onSelect (option) {
    console.log('You selected ', option.label)
    this.setState({selected: option})
  }

  render () {
    const defaultOption = this.state.selected
    const placeHolderValue = typeof this.state.selected === 'string' ? this.state.selected : this.state.selected.label
    let optionSet = activityOptions;
    switch(this.options){
      case 'activity':
        optionSet = activityOptions;
        break;
      case 'metric':
        optionSet = metricOptions;
        break;
      case 'distanceConstant':
        optionSet = distanceConstantOptions;
        break;
    }


    return (
      <section>
        <Dropdown options={optionSet} onChange={this._onSelect} value={defaultOption} placeholder={optionSet[0]} />
      </section>
    )
  }
}

export default DropdownSettings
