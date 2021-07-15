import React, {Component} from 'react';

class Level extends Component {
    levelNum(){
        if(this.props.afterWards){
            return this.props.level;
        } else if([4, 7, 9].includes(this.props.howManyTimesYouWon)){
            return this.props.level - 1;
        } else {
            return this.props.level
        }
    }

    render() {
        return (
          <div>
              <h2>Level
                  № {this.levelNum()}</h2>
              <br/>
              <h3>Counter: {this.props.counter}</h3>
              <br/>
          </div>
        );
    }
}

export default Level;
