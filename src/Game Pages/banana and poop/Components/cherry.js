import React, {Component} from 'react';
// Pictures
import cherry from '../../../Pictures/banana-photos/cherry.jpeg';
// Functions
import {range} from '../../../Functions/App_js_Functions/functions';

class Cherry extends Component {
  render() {
    const cherries = range(5);
    return (
        <div className="cherry">
             { cherries.map(el => <img src={cherry} onClick={() => this.props.game4(+el)} alt=""/>) }
        </div>
    );
  }
}

export default Cherry;
