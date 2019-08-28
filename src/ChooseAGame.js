import React, { Component } from 'react';
import './index.css';
import image from'./image.jpeg';

class ChooseAGame extends Component {
  constructor(props){
    super(props);

    this.state = {
    }
  }

  render() {
    /*<div className="X-and-O">
            <div className="shadow">
              <img src="" alt=""/>
            </div>
          </div>*/
    return (
        <div>
          <div className="banana">
            <div className="shadow">
              <img src={image} alt=""/>
            </div>
            <h2>Bananas and Shit</h2>
            <button className="btn btn-success" onClick={() => this.props.chosenGame('BananasAndShit')}><b>Try it</b></button>
          </div>

        </div>
          );
  }
}

export default ChooseAGame;
