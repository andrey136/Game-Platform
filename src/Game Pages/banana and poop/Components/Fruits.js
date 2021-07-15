import React, {Component} from 'react';
// Pictures
import shit from '../../../Pictures/banana-photos/poop.jpeg';
import banana from '../../../Pictures/banana-photos/banana.png';
// Functions
import {range} from '../../../Functions/App_js_Functions/functions';

class Fruits extends Component {
  linksOfPhotos(index) {
    let fruits = this.props.fruits.map(fruit => !fruit ? fruit = shit : fruit = banana);
    return fruits[index];
  }

  render() {
    const fruits = range(5);
    return (
      <div className="cherry">
        { fruits.map(fruit => <img src={this.linksOfPhotos(fruit)} alt=""/>) }
      </div>
    );
  }
}

export default Fruits;
