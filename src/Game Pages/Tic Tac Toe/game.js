import React, {Component} from 'react';
// Pictures
import Xs from '../../Pictures/X_and_O-photos/Xs.png';
import Os from '../../Pictures/X_and_O-photos/Os.png';
// Functions
import {again} from "../../Functions/App_js_Functions/Xs_and_Os_functions";
import {back} from "../../Functions/App_js_Functions/Xs_and_Os_functions";
import {add_index_of_X_or_O_to_the_state} from "../../Functions/App_js_Functions/Xs_and_Os_functions";
import {range} from '../../Functions/App_js_Functions/functions';

class game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      str: '',
      count: 0,
      chosenItems_X: [],
      chosenItems_O: [],
      winIndexs: [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]],
      _end: false,
    }
  }

  chosen(id) {
    if (!this.state.chosenItems_X.includes(id) && !this.state.chosenItems_O.includes(id) && !this.state._end) {
      let state = add_index_of_X_or_O_to_the_state(id, this.state.chosenItems_X, this.state.chosenItems_O, this.state.count);
      this.changeState(state);
      state['count'] > 4 && this.finish()
    }
  }

  finish() {
    let trueOrFalse = [];
    let str = '';
    let _end = false;
    if (trueOrFalse.length === 0) {
      this.state.winIndexs.map(el => {
        trueOrFalse.push(el.every(cur => this.state.chosenItems_X.indexOf(cur) > -1));
      });
      if (trueOrFalse.includes(true)) {
        str = 'Player 1 wins';
        _end = true;
      } else {
        trueOrFalse = [];
      }
    }
    if (trueOrFalse.length === 0 && !_end) {
      this.state.winIndexs.map(el => {
        trueOrFalse.push(el.every(cur => this.state.chosenItems_O.indexOf(cur) > -1));
      });
      if (trueOrFalse.includes(true)) {
        _end = true;
        str = 'Player 2 wins';
      } else {
        trueOrFalse = [];
      }
    }
    if (this.state.count === 8 && !_end && str === '') {
      _end = true;
      str = 'Draw) Nobody wins!';
    }
    // Changes
    this.setState({
      _end: _end,
      str: str,
      trueOrFalse: [],
    })
  }

  changeState(obj){
    this.setState(obj);
  }

  render() {
    const field = [3, 3];
    const rows = field[0];
    const cells = field[1];
    return (
      <div>
        <div className="topNav">
          <button className="stopPlaying returnBack" onClick={() => back(this.props.menu, this.props.account, this.props.money)}>Back</button>
        </div>
        <section id="game">
          <h1>Tic Tac Toe
            <br/>
            2 players only!
          </h1>
          <div className="container">
            {range(rows * cells).map(cellInd => 
              <div onClick={() => this.chosen(cellInd)}>
              {this.state.chosenItems_O.includes(cellInd) && <img src={Os} alt=""/>}
              {this.state.chosenItems_X.includes(cellInd) && <img src={Xs} alt=""/>}
            </div>
            )}
          </div>
          {this.state._end && <h2>{this.state.str}</h2>}
          {this.state._end && <div class="flex-center">
            <button className="btn btn-primary" onClick={() => this.changeState(again())}>Play Again</button>
          </div>}
        </section>
      </div>
    );
  }
}

export default game;