import React, {Component} from 'react';
import '../../../index.css';

class Level extends Component {

    render() {
        return (
          <div>
              <h2>Level
                  № {this.props.afterWards ? this.props.level :
                    this.props.howManyTimesYouWon === 4 || this.props.howManyTimesYouWon === 7 ||
                    this.props.howManyTimesYouWon === 9 ? this.props.level - 1 : this.props.level}</h2>
              <br/>
              <h3>Counter: {this.props.counter}</h3>
              <br/>
          </div>
        );
    }
}

export default Level;
