import React, {Component} from 'react';
import '../../index.css';
import Xs from '../../Pictures/X_and_O-photos/Xs.png';
import Os from '../../Pictures/X_and_O-photos/Os.png';

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
      let count = this.state.count;
      let chosenItems_X = this.state.chosenItems_X;
      let chosenItems_O = this.state.chosenItems_O;
      if (count % 2) {
        chosenItems_O.push(id);
      } else {
        chosenItems_X.push(id);
      }
      this.setState({
        count: ++count,
      });
      count > 4 && this.finish();
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
      console.log(trueOrFalse);
      if (trueOrFalse.includes(true)) {
        console.log('Player 1 wins');
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
      console.log("THE LAST");
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

  again() {
    this.setState({
      str: '',
      count: 0,
      chosenItems_X: [],
      chosenItems_O: [],
      winIndexs: [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]],
      trueOrFalse: [],
      _end: false,
    });
  }

  back() {
    this.props.menu('Xs_and_Os');
    this.props.account(this.props.money);
  }

  render() {
    return (
      <div>
        <div className="topNav">
          <button className="stopPlaying returnBack" onClick={() => this.back()}>Back</button>
          <p>Account {this.props.money}$</p>
        </div>
        <section id="game">
          <h1>Game Xs and Os
            <br/>
            2 players only!
          </h1>
          <div className="container">
            <div onClick={() => this.chosen(0)}>
              {this.state.chosenItems_O.includes(0) && <img src={Os} alt=""/>}
              {this.state.chosenItems_X.includes(0) && <img src={Xs} alt=""/>}
            </div>
            <div onClick={() => this.chosen(1)}>
              {this.state.chosenItems_O.includes(1) && <img src={Os} alt=""/>}
              {this.state.chosenItems_X.includes(1) && <img src={Xs} alt=""/>}
            </div>
            <div onClick={() => this.chosen(2)}>
              {this.state.chosenItems_O.includes(2) && <img src={Os} alt=""/>}
              {this.state.chosenItems_X.includes(2) && <img src={Xs} alt=""/>}
            </div>
            <div onClick={() => this.chosen(3)}>
              {this.state.chosenItems_O.includes(3) && <img src={Os} alt=""/>}
              {this.state.chosenItems_X.includes(3) && <img src={Xs} alt=""/>}
            </div>
            <div onClick={() => this.chosen(4)}>
              {this.state.chosenItems_O.includes(4) && <img src={Os} alt=""/>}
              {this.state.chosenItems_X.includes(4) && <img src={Xs} alt=""/>}
            </div>
            <div onClick={() => this.chosen(5)}>
              {this.state.chosenItems_O.includes(5) && <img src={Os} alt=""/>}
              {this.state.chosenItems_X.includes(5) && <img src={Xs} alt=""/>}
            </div>
            <div onClick={() => this.chosen(6)}>
              {this.state.chosenItems_O.includes(6) && <img src={Os} alt=""/>}
              {this.state.chosenItems_X.includes(6) && <img src={Xs} alt=""/>}
            </div>
            <div onClick={() => this.chosen(7)}>
              {this.state.chosenItems_O.includes(7) && <img src={Os} alt=""/>}
              {this.state.chosenItems_X.includes(7) && <img src={Xs} alt=""/>}
            </div>
            <div onClick={() => this.chosen(8)}>
              {this.state.chosenItems_O.includes(8) && <img src={Os} alt=""/>}
              {this.state.chosenItems_X.includes(8) && <img src={Xs} alt=""/>}
            </div>
          </div>
          {this.state._end && <h2>{this.state.str}</h2>}
          {this.state._end && <div class="flex-center">
            <button className="btn btn-primary" onClick={() => this.again()}>Play Again</button>
          </div>}
        </section>
      </div>
    );
  }
}

export default game;