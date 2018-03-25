import React, { Component } from 'react'

class FilterObject extends Component {
  constructor() {
    super()

    this.state={
      employees: [
        {
          name: 'Jimmy Joe',
          title: 'Hack0r',
          age: 12,
        },
        {
          name: 'Jeremy Schrader',
          age: 24,
          hairColor: 'brown'
        },
        {
          name: 'Carly Armstrong',
          title: 'CEO',
        }
      ],
      userInput: '',
      filteredArray: []
    }
  }

  handleChange(e) {
    this.setState({
      userInput: e
    });
  }

  filterEmployees(e) {
    var employees = this.state.employees;
    var filteredEmployees = [];

    for ( var i = 0; i < employees.length; i++) {
      if (employees[i].hasOwnProperty(e) ) {
        filteredEmployees.push(employees[i]);
      }
    }
    this.setState({
      filteredEmployees: filteredEmployees
    });
  }


  render() {
    return(
      <div className='puzzleBox filterObjectPB'>
        <h4> Filter Object </h4>
        <span className='puzzleText'> Original: { JSON.stringify(this.state.employees, null, 10) } </span>
        <input className='inputLine' onChange={(e) => this.handleChange(e.target.value) }></input>
        <button className='confirmationButton' onClick={() => this.filterEmployees(this.state.userInput) }> Filter </button>
        <span className='resultsBox filterObjectRB'> Filtered: { JSON.stringify(this.state.filteredEmployees, null, 10) } </span>
      </div>
    )
  }
}

export default FilterObject;