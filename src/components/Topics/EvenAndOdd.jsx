{/* <b>The problem summary:</b> Given a string of numbers separated by commas, split the numbers into two different arrays. The first being an array of all the even numbers and the second being an array of all the odd numbers.

<b>The component outline:</b> One parent `div` element, one `h4` element, one `input` element, one `button` element, and two `span` elements. 

* Open `src/components/Topics/EvenAndOdd.js`.
* Remove the `<p>` element from the `return` of the `render` method.
* Add the component outline to the `return` of the `render` method.
* Add the following `className` props to the outline:
  * `div` - className="puzzleBox evenAndOddPB"
  * `input` - className="inputLine"
  * `button` - className="confirmationButton"
  * Both `span`s - className="resultsBox"
* Assign the `h4` element the value of `"Evens and Odds"`.
* Create a `constructor` method that creates an initial state:
  * `evenArray` - This should default to an empty array.
  * `oddArray` - This should default to an empty array.
  * `userInput` - This should default to an empty string.
* Create an `onChange` prop for the `input` element that updates the value of `userInput` on state.
* Create an `onClick` prop for the `button` element that calls a method on the class:
  * This method should solve the toy problem.
  * This method should update the value of `evenArray` and `oddArray` on state.
* Assign one `span` element to display the value of `evenArray`.
* Assign the other `span` element to display the value of `oddArray`. */}

import React, { Component } from 'react';

export default class EvenAndOdd extends Component {
  constructor() {
    super();
    this.state = {
      evenArray: '',
      oddArray: '',
      userInput: ''
    }
  }

  UpdateUserInput (value) {
    this.setState({
      userInput: value
    })
  }

  MakeArrays () {
    let value = this.state.userInput.split(",");
    console.log(value)
    let mappedValue = value.map(e => Number(e)) 
    console.log(mappedValue)
    let even = mappedValue.filter (e => e % 2 === 0);
    let odd = mappedValue.filter (e => e % 2 === 1);



    this.setState({
      evenArray: JSON.stringify(even),
      oddArray: JSON.stringify(odd)
    })
  }
  
  render() {
    return (
      <div className='puzzleBox evenAndOddPB'>
        <h4>Evens and Odds</h4>

        <input type="text" className='inputLine' 
          onChange={(event) => this.UpdateUserInput(event.target.value)}/>

        <button className='confirmationButton' onClick={() => this.MakeArrays()}></button>

        <span className='resultsBox'>{this.state.evenArray}</span>

        <span className='resultsBox'>{this.state.oddArray}</span>

      </div>
    )
  }
}
