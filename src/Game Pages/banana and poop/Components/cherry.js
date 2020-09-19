import React, {Component} from 'react';
import '../../../index.css';
// Pictures
import cherry from '../../../Pictures/banana-photos/cherry.jpeg'

class Cherry extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="cherry">
          <img src={cherry} onClick={() => this.props.game4(0)}
               alt=""/>
          <img src={cherry} onClick={() => this.props.game4(1)}
               alt=""/>
          <img src={cherry} onClick={() => this.props.game4(2)}
               alt=""/>
          <img src={cherry} onClick={() => this.props.game4(3)}
               alt=""/>
          <img src={cherry} onClick={() => this.props.game4(4)}
               alt=""/>
        </div>
    );
  }
}

export default Cherry;
