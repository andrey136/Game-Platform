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
      <div className="App">
        <header className="header">

          <nav>
            <ul>
              <h1>Game Platform</h1>
              <li><a href="">Home</a></li>
              <li><a href="">Description</a></li>
              <li><a href="">About us</a></li>
            </ul>
          </nav>
        </header>
        <main>
          <br/>
          <img src="https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Ffortunedotcom.files.wordpress.com%2F2018%2F01%2Fbrb-02-18-bananas.jpg&w=900&h=446&c=sc&poi=face&q=85" alt=""/>
          <br/>
          <button className="warning" onClick={() => this.props.chosenGame('BananasAndShit')}>Bananas and Shit</button>
        </main>
      </div>
    );
  }
}

export default ChooseAGame;
