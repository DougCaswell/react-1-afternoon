import React, { Component } from 'react';

export default class FilterObject extends Component {
  constructor() {
    super();
    this.state = {
      unFilteredArray: [{
        name: 'Fred',
        hairColor: 'Orange'
      }, {
        name: 'George',
        hairColor: 'Orange'
      }, {
        name: 'Harry',
        hairColor: 'Brown'
      }, {
        name: 'Herminie',
        hairColor: 'Blonde'
      }],
      userInput: '',
      filteredArray: []
    }
  }

  updateUserInput (value) {
    this.setState({
      userInput: value
    })
  }

  filterMethod () {
    this.setState({
      filteredArray: this.state.unFilteredArray.filter(e => e.hairColor === this.state.userInput)
    })
  }

  render() {
    return (
      <div className='puzzleBox filterObjectPB'>
        <h4>Filter Object</h4>
        <span className='puzzleText'>Unfiltered {this.state.unFilteredArray.map(e => JSON.stringify(e, null, 10))}</span>
        <input type="text" className='inputLine' onChange={event => this.updateUserInput(event.target.value)} />
        <button className='confirmationButton' onClick={() => this.filterMethod()}></button>
        <span className='resultsBox filterObjectPB'>Filtered {this.state.filteredArray.map(e => JSON.stringify(e, null, 10))}</span>
      </div>
    )
  }
}
