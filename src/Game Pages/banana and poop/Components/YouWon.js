import React, {Component} from 'react';
import '../../../index.css';

class YouWon extends Component {

    render() {
        return (
          <div>
              <h4>You Won!!!</h4>
              <div className="options">
                  <button className="btn btn-primary" onClick={() => this.props.tryAgain()}>Try again</button>
                  <button className="btn btn-danger" onClick={() => this.props.takeMoney()}>Take Money</button>
              </div>
          </div>
        );
    }
}

export default YouWon;
