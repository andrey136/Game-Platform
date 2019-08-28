import React, { Component } from 'react';
import './index.css';
import image from './photos/banana-photos/image.jpeg';
import xo from './photos/X_and_O-photos/xo.png';

class ChooseAGame extends Component {
  constructor(props){
    super(props);

    this.state = {
    }
  }

  render() {
    /**/
    return (
        <div>
          <div className="banana">
            <div className="shadow">
              <img src={image} alt=""/>
            </div>
            <h2>Bananas and Shit</h2>
            <button className="btn btn-success" onClick={() => this.props.chosenGame('BananasAndShit')}><b>Try it</b></button>
          </div>
          <div className="X-and-O">
            <div className="shadow">
              <img src={xo} alt=""/>
            </div>
            <h2>Xs and Os</h2>
            <button className="btn btn-success" onClick={() => this.props.chosenGame('X-and-O')}><b>Try it</b></button>
          </div>
        </div>
          );
  }
}

export default ChooseAGame;
