import React, { Component } from 'react';
import './index.css';

class description extends Component {
  constructor(props){
    super(props);

    this.state = {
    }
  }

  playNow(){
    this.props.playNow();
  }

  render() {
    return (
      <div className="App padding">
        <h1>Description</h1>
        <br/>
        <h3>Hello my dear friend. Today I'm going to show you my first computer game and explain the rules of it.</h3>
        <pre>
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
          Good luck!!!
        </pre>
        <br/>
        <br/>
        <pre><button onClick={() => this.playNow()} className="btn btn-success">Play now</button>  OR  <button onClick={() => this.props.menu()} className="btn btn-primary">Return back</button></pre>
      </div>

    );
  }
}

export default description;
