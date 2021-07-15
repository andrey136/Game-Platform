import React, {Component} from 'react';
// Components
import TopNav from "../TopNav";
import DescriptionArticle from "./DescriptionArticle";
import DescriptionInput from "./DescriptionInput";

class description extends Component {

  render() {
    return (
      <div>
        <TopNav money={this.props.money} back={() => this.props.menu()} addMoney={() => this.props.addMoney()}/>
        <DescriptionArticle/>
        <br/>
        <DescriptionInput btnContinue={this.props.btnContinue} money={this.props.money}
                           inputChange={() => this.inputChange()} playNow={(bet) => this.props.playNow(bet)}/>
      </div>
    );
  }
}

export default description;
