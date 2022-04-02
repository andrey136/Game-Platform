import React, {Component} from 'react';
// Functions
import {_handleKeyDownLogIn} from "../Functions/App_js_Functions/Register_Form_js_functions";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputTextEmail: '',
      inputTextPassword: '',
      warning: false,
      password: '',
    }
  }

  changeInputEmail(value) {
    this.setState({
      inputTextEmail: value,
    });
  }

  changeInputPassword(value){
    this.setState({
      inputTextPassword: value,
    });
  }

  _handleKeyDownEmail(e) {
    if (e.key === 'Enter') {
      this.state.inputText === '' ?
        this.setState({warning: true}) :
        this.refs.password.focus();
    }
  }

  _handleKeyDownPassword(e) {
    if (e.key === 'Enter') {
      this.state.inputText === '' ?
        this.setState({warning: true}) :
        this.refs.log_in.focus();
    }
  }

  authorize() {
    // localStorage.setItem('user', JSON.stringify({name: this.state.inputTextEmail, status: "user", login: this.state.inputTextPassword}));
    this.props.render();
  }

  render() {
    return (
      <div>
        <div className="register-form">
          <h1>Register</h1>
          <input type="text" placeholder="*name" ref="email" onChange={(e) => this.changeInputEmail(e.target.value)}
                 onKeyDown={(e) => this._handleKeyDownEmail(e)} value={this.state.inputTextEmail}/>
          <input type="text" placeholder="*login" ref="password" onChange={(e) => this.changeInputPassword(e.target.value)} onKeyDown={(e) => this._handleKeyDownPassword(e)}
                 value={this.state.inputTextPassword} className="password"/>
          <div className="flex-center">
            <button className="btn btn-warning" ref="log_in" onKeyDown={(e) => _handleKeyDownLogIn(e)} onClick={() => this.authorize()}>Log in
            </button>
          </div>
        </div>
        { this.state.warning &&
        <div className="warning">
          <h2>Warning</h2>
          <p>You should fill all the labels with *</p>
        </div>
        }
      </div>
    );
  }
}

export default Register;