import React, { Component } from 'react';

class Statistics extends Component {
  render() {
    const last2letters = {
      '0': 'st',
      '1': 'nd',
      '2': 'rd'
    };
    const wins = this.props.howManyTimesYouWon;
    return (
      <div className="app_statistics">
        <h4>Statistics:</h4>
        <p>Chance is {5 - this.props.level}/5</p>
        <p>Possible gain is {this.props.counter}$</p>
        <p>It's the {wins + 1}{ wins < 3 ? last2letters[wins] : 'th' } trial</p>
        <p>Your bet is {this.props.bet}$</p>
      </div>
    );
  }
}

export default Statistics;
