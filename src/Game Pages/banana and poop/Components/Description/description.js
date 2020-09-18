import React, {Component} from 'react';
import '../../../../index.css';
// Components
import TopNav from "../TopNav";
import Description_Article from "./Description_Article";
import Description_Input from "./Description_Input";

class description extends Component {

  render() {
    return (
      <div>
        <TopNav money={this.props.money} back={() => this.props.menu()} addMoney={() => this.props.addMoney()}/>
        <Description_Article/>
        <br/>
        <Description_Input btnContinue={this.props.btnContinue} money={this.props.money}
                           inputChange={() => this.inputChange()} playNow={(bet) => this.props.playNow(bet)}/>
      </div>
    );
  }
}

export default description;
