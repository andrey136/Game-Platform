import React, { Component } from 'react';
import './App.css';

class Statistics extends Component {
  constructor(props){
    super(props);
  }

  lastLettersOfTheNumber(){
    if(this.props.howManyTimesYouWon === 0) return 'st';
    if(this.props.howManyTimesYouWon === 1) return 'nd';
    if(this.props.howManyTimesYouWon === 2) return 'rd';
    return 'th';
  }

  render() {
    return (
      <div className="App statistics">

        <h4>Statistics:</h4>
        <pre>Chance is {5 - this.props.level}/5</pre>
        <pre>Possible gain is {this.props.counter}$</pre>
        <pre>It's the {this.props.howManyTimesYouWon + 1}{this.lastLettersOfTheNumber()} trial</pre>
        <pre>Your bet is {this.props.bet}$</pre>
      </div>
    );
  }
}

export default Statistics;
