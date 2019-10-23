import React, {Component} from 'react';
import '../App.css';
import Statistics from './statistics';
import shit from '../photos/banana-photos/poop.jpeg';
import banana from '../photos/banana-photos/banana.png';

class Fruits extends Component {
  constructor(props) {
    super(props);
  }

  linksOfPhotos(index) {
    let arr = this.props.fruits.map(el => !el ? el = shit : el = banana);
    console.log(this.props.fruits);
    return arr[index];
  }

  render() {
    return (
      <div className="cherry">
        <img src={this.linksOfPhotos(0)} alt=""/>
        <img src={this.linksOfPhotos(1)} alt=""/>
        <img src={this.linksOfPhotos(2)} alt=""/>
        <img src={this.linksOfPhotos(3)} alt=""/>
        <img src={this.linksOfPhotos(4)} alt=""/>
      </div>
    );
  }
}

export default Fruits;
