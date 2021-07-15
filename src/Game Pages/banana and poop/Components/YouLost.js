import React, {Component} from 'react';

class YouLost extends Component {
    render() {
        return (
          <div>
              <h4 color='blue'>You Lost :(</h4>
              <div className="options">
                  <button className="btn btn-primary" onClick={this.props.bet <= this.props.money ? () => this.props.newGame() : () => this.props.stopPlaying()}>
                      {this.props.bet <= this.props.money ? "New game" : "Come Back"}</button>
              </div>
          </div>
        );
    }
}

export default YouLost;
