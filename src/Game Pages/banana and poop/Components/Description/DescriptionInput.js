import React, {Component} from 'react';
// Functions
import {inputChange} from '../../../../Functions/App_js_Functions/Banana_and_Poop_functions';

class DescriptionInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputText: '0$',
        }
    }

    playNow(bet) {
        this.props.playNow(bet);
    }

    inputChange(value) {
        this.setState({
            inputText: inputChange(value, this.state.inputText)
        });
    }

    buttonOptions(){
        if(this.props.btnContinue){
            return <button className="btn btn-primary" onClick={() => this.playNow('continue')}>Continue</button>
        } else if(this.state.inputText === '0$' || +this.state.inputText.slice(0, -1) > this.props.money){
            return <button className="btn btn-outline-secondary disabled" type="button" id="button-addon2">Play</button>
        } else {
            return <button className="btn btn-outline-secondary"
                              onClick={() => this.playNow(+this.state.inputText.slice(0, -1))} type="button"
                              id="button-addon2">Play</button>
        }                   
    }

    render() {
        return (
          <div className="input-group mb-3 ssize">
              <input type="text" className="form-control input" placeholder="Your bet"
                     onChange={(e) => this.inputChange(e.target.value)}
                     aria-label="Recipient's username" aria-describedby="button-addon2" value={this.props.btnContinue ? "You can't bet. Continue playing" : this.state.inputText} disabled={this.props.btnContinue}/>
              <div className="input-group-append">
                {this.buttonOptions()}
              </div>
          </div>
        );
    }
}

export default DescriptionInput;
