import React, { Component } from 'react';
import Cherry from './cherry';
import Fruits from './Fruits';
import './index.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      counter: 0,
      notYet: true,
      fruits: [],
      didYouWin : false
    }
  }

  plus(){
    this.setState({
      counter : this.state.counter + 100
    })
  }

  minus(){
    this.setState({
      counter : this.state.counter - 1
    })
  }

  game4(x){
    let didYouWin = false;
    let counter = this.state.counter;
    let isItCrap = false;
    let c = +Math.floor(Math.random() * 5);
    let arr = [];
    for(let i = 0; i < 5; i++){
      i === c ? arr.push('shit') : arr.push('banana');
    }
    let arr1 = [...arr].map(el => el === 'banana' ? el = 1 : el = 0);
    console.log(arr.join('   '));
    console.log(arr[x] === 'banana' ? 'WINNER!!!' : 'LOSER!!!');
    console.log(arr1);
    if(arr[x] === 'shit'){
      counter -= 10;
    } else {
      counter += 20;
      didYouWin = true;
    }
    this.setState({
      notYet : false,
      fruits : arr1,
      isItCrap : isItCrap,
      counter : counter,
      didYouWin: didYouWin,
    })
  }

  render() {
    return (
      <div className="App">
        Counter: {this.state.counter}
        <button className="btn btn-success" onClick={() => this.plus()}>Add money</button>
        <br/>
        {this.state.notYet ? <Cherry game4={(index) => this.game4(index)}/> : <Fruits fruits={this.state.fruits}/>}
        <br/>
        {this.state.didYouWin ? <h1>You Won!!!</h1> : !this.state.notYet ? <h1 color='blue'>You Lost :(</h1> : ''}
      </div>
    );
  }
}

export default App;
