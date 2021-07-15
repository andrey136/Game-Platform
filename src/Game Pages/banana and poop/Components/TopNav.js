import React, {Component} from 'react';

class TopNav extends Component {
    render() {
        return (
          <div className="topNav">
              <button className="stopPlaying returnBack" onClick={() => this.props.back()}>Back</button>
              <p><button className="addMoney" onClick={() => this.props.addMoney()} href="">+</button>Account {this.props.money}$</p>
          </div>
        );
    }
}

export default TopNav;
