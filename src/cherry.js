import React, { Component } from 'react';
import './App.css';
import Statistics from './statistics for banana and shit';

class Cherry extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="App">
        <img src=".../100x100" onClick={() => this.props.game4(0)} src="data:image/jpeg;base64,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" alt=""/>
        <img onClick={() => this.props.game4(1)} src="data:image/jpeg;base64,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" alt=""/>
        <img onClick={() => this.props.game4(2)} src="data:image/jpeg;base64,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" alt=""/>
        <img onClick={() => this.props.game4(3)} src="data:image/jpeg;base64,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" alt=""/>
        <img onClick={() => this.props.game4(4)} src="data:image/jpeg;base64,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" alt=""/>
        <Statistics bet={this.props.bet} howManyTimesYouWon={this.props.howManyTimesYouWon} level={this.props.level} counter={this.props.counter}/>
      </div>
    );
  }
}

export default Cherry;
