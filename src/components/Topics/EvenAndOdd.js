import React, { Component } from 'react';

class EvenAndOdd extends Component {
  constructor() {
    super()

    this.state = {
      evensArray: [],
      oddArray: [],
      userInput: ""
    }
  }

  handleChange(val) {
    this.setState({userInput: val})
  }

  assignEvensAndOdds(userInput) {
    var arr = userInput.split(',');
    var evens = [];
    var odds = [];

    for( var i = 0; i < arr.length; i++){
      if(arr[i] % 2 === 0) {
        evens.push( parseInt(arr[i], 10) );
      } else {
        odds.push( parseInt(arr[i], 10) );
      }
    }
    this.setState({evensArray: evens, oddArray: odds})
  }

  render() {
    return(
      <div className='puzzleBox evenAndOddPB'>
        <h4> Evens and Odds </h4>
          <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)}/>
          <button className='confirmationButton' onClick={ (e) => {this.assignEvensAndOdds(this.state.userInput)} }> Split </button>
          <span className='resultsBox'> Evens: { JSON.stringify(this.state.evensArray) }</span>
          <span className='resultsBox'> Odd: {JSON.stringify(this.state.oddArray)}</span>
      </div>
    )
  }
}

export default EvenAndOdd;
        