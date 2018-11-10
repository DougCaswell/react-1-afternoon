import React, { Component } from 'react';

export default class FilterString extends Component {
  constructor() {
    super();

    this.state = {
      unFilteredArray: ['One ring to rule them all.', 'Two heads is better than one.', 'What is the answer to life, universe, and everything?', "Help!!! I'm stuck in a computer!!!"],
      userInput: '',
      filteredArray: [],

    }
  }

  updateUserInput (value) {
    this.setState({
      userInput: value
    })
    console.log(this.state.userInput)
  }

  filterStringArray() {
    this.setState({
      filteredArray: this.state.unFilteredArray.filter(e => e.includes(this.state.userInput))
    })
    console.log(this.state.filteredArray)
  }

  render() {
    return (
      <div className='puzzleBox filterstringPB'>
        <h4>Filter String</h4>
        <span className='puzzleText'>Unfiltered Array {JSON.stringify(this.state.unFilteredArray)}</span>
        <input type="text" className='inputLine' onChange={e => this.updateUserInput(e.target.value)} />
        <button className='confirmationButton' onClick={() => this.filterStringArray()} ></button>
        <span className='resultsBox filterStringPB'>Filtered Array {JSON.stringify(this.state.filteredArray)}</span>
      </div>
    )
  }
}
