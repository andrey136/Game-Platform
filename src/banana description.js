import React, { Component } from 'react';
import './index.css';

class description extends Component {
  constructor(props){
    super(props);

    this.state = {
      inputText : '0$',
    }
  }

  playNow(bet){
    this.props.playNow(bet);
  }

  inputChange(value) {
    let del = !value.includes('$');
    value = value.split('').filter(el => ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].includes(el)).join('') + '$';
    if (value[0] === '0' && value.length !== 2) value = value.slice(1);
    console.log(value);
    if (this.state.inputText === '0$') {
      this.setState({
        inputText: value,
      });
    } else if(this.state.inputText === value && value.length !== 2 && del){
      this.setState({
        inputText: value.slice(0, -2) + '$',
      });
    } else if (value.length === 2) {
      this.setState({
        inputText: '0$'
      });
    } else {
      this.setState({
        inputText: value.split('$').join('') + '$',
      });
    }
  }


  render() {
    return (
      <div className="App">
        <div className="topNav">
            <button className="stopPlaying returnBack"  onClick={() => this.props.menu()}>Return back</button>
            <p>Account {this.props.money}$</p>
        </div>
        <article>
          <h1 className="padding">Description</h1>
          <h3>Hello my dear friend. Today I'm going to show you my first computer game and explain the rules of it.</h3>
          <p>
          1. There are 4 levels.
          <br/>
          2. You choose one of the five cherries.
          <br/>
          3. After that you will be shown what exactly you have chosen. Was it shit or a banana?
          <br/>
          4. Then you will be offered a choice. You can take money and finish the game or continue it for a greater gain.
          <br/>
          5. If you've got crap you can't go on playing.
          <br/>
          6. The greater level you have, the more crap is hidden beside the cherries.
          <br/>
          7. Your bet can't be lower 10$.
          <br/>
          Good luck!!!
        </p>
        </article>
        <br/>
        <div className="input-group mb-3 size">
          <input type="text" className="form-control" placeholder="Your bet" onChange={(e) => this.inputChange(e.target.value)}
                 aria-label="Recipient's username" aria-describedby="button-addon2" value={this.state.inputText}/>
            <div className="input-group-append">
              {(this.state.inputText === '0$' || +this.state.inputText.slice(0,-1) > this.props.money) ?
                <button className="btn btn-outline-secondary disabled" type="button" id="button-addon2">Play</button> :
                <button className="btn btn-outline-secondary" onClick={() => this.playNow(+this.state.inputText.slice(0,-1))} type="button" id="button-addon2">Play</button>
              }
            </div>
        </div>
      </div>

    );
  }
}

export default description;
