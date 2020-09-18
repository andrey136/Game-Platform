import React, {Component} from 'react';
import '../../../index.css';


class TopNav extends Component {

    render() {
        return (
          <div className="topNav">
              <button className="stopPlaying returnBack"  onClick={() => this.props.back()}>Back</button>
              <p><a href="">+</a>Account {this.props.money}$</p>
          </div>
        );
    }
}

export default TopNav;
