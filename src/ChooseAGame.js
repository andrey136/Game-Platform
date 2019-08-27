import React, { Component } from 'react';
import './index.css';

class ChooseAGame extends Component {
  constructor(props){
    super(props);

    this.state = {
    }
  }

  render() {
    return (
      <div className="banana">
        <div className="shadow">
          <img src="https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Ffortunedotcom.files.wordpress.com%2F2018%2F01%2Fbrb-02-18-bananas.jpg&w=900&h=446&c=sc&poi=face&q=85" alt=""/>
        </div>
          <h2>Bananas and Shit</h2>
          <button className="btn btn-success" onClick={() => this.props.chosenGame('BananasAndShit')}><b>Try it</b></button>
      </div>
    );
  }
}

export default ChooseAGame;
