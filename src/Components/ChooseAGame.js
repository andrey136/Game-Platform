import React, {Component} from 'react';
import '../index.css';
// Images
import image from '../Pictures/banana-photos/image.jpeg';
import xo from '../Pictures/X_and_O-photos/xo.png';
import todo from '../Pictures/ToDo/ToDoImage.jpeg';

class ChooseAGame extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <div>
        <div className="banana">
          <div className="shadow">
            <img src={image} alt=""/>
          </div>
          <h2>Bananas and Shit</h2>
          <div className="flex-center">
            <button className="btn btn-success" onClick={() => this.props.chosenGame('BananasAndShit')}><b>Try it</b>
            </button>
          </div>
        </div>
        <div className="X-and-O">
          <div className="shadow">
            <img src={xo} alt=""/>
          </div>
          <h2>Xs and Os</h2>
          <div className="flex-center">
            <button className="btn btn-success" onClick={() => this.props.chosenGame('X-and-O')}><b>Try it</b></button>
          </div>
        </div>
        <div className="ToDo">
          <div className="shadow">
            <img src={todo} alt=""/>
          </div>
          <h2>ToDo</h2>
          <div className="flex-center">
            <a href="https://andrey136.github.io/rt/"><b>Click here</b></a>
          </div>
        </div>
      </div>
    );
  }
}

export default ChooseAGame;
