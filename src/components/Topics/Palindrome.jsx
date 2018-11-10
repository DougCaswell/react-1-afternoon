import React, { Component } from 'react';

export default class Palindrome extends Component {
  constructor() {
    super();
    this.state={
      userInput: '',
      palindrome: ''
    }
  }

  updateUserInput(value) {
    this.setState({
      userInput: value
    })
  }

  isPalindrome() {
    let input = this.state.userInput;
    let forward = '';
    let backward = '';
    function loop (value) {
      for(let i = 0; i < value.length; i++) {
        forward = forward + value[i]
        backward = backward + value[value.length - 1 - i]
      }
      return forward, backward;
    }
    loop(input);
    let isTrue = forward === backward;
    this.setState({
      palindrome: isTrue
    })
  }

  render() {
    return (
      <div className='puzzleBox filterStringPB'>
        <h4>Palindrome</h4>
        <input type="text" className='inputLine' onChange={e => this.updateUserInput(e.target.value)} />
        <button className='confirmationButton' onClick={() => this.isPalindrome()}/>
        <span className='resultsBox'>{JSON.stringify(this.state.palindrome)}</span>
      </div>
    )
  }
}
