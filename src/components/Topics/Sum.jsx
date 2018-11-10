import React, { Component } from 'react';

export default class Sum extends Component {
  constructor() {
    super();

    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    }
  }

  update1 (value) {
    this.setState({
      number1: +value
    })
  }

  update2 (value) {
    this.setState({
      number2: +value
    })
  }

  add() {
    this.setState({
      sum: +this.state.number1 + this.state.number2
    })
  }

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input type="text" className='inputLine' onChange={e => this.update1(e.target.value)}/>
        <input type="text" className='inputLine' onChange={e => this.update2(e.target.value)}/>
        <button className='confirmationButton' onClick={(() => this.add())}></button>
        <span className='resultsBox'>{this.state.sum}</span>
      </div>
    )
  }
}
