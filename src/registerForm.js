// import React, {Component} from 'react';
// import './index.css';
//
// class Register extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       inputTextEmail: '',
//       inputTextPassword: '',
//       warning: false,
//       password: '',
//     }
//   }
//
//   changeInputEmail(value) {
//     this.setState({
//       inputTextEmail: value,
//     });
//     console.log(this.state.inputText, this.title);
//   }
//
//   changeInputPassword(value){
//     this.setState({
//       inputTextPassword: value,
//     });
//     console.log(this.state.inputText, this.title);
//   }
//
//   _handleKeyDownEmail(e) {
//     if (e.key === 'Enter') {
//       this.state.inputText === '' ?
//         this.setState({warning: true}) :
//         this.refs.password.focus();
//     }
//   }
//
//   _handleKeyDownPassword(e) {
//     if (e.key === 'Enter') {
//       this.state.inputText === '' ?
//         this.setState({warning: true}) :
//         this.refs.log_in.focus();
//     }
//   }
//
//   _handleKeyDownLogIn(e) {
//     if (e.key === 'Enter') {
//       e.target.blur();
//       this.authorize();
//     }
//   }
//
//   authorize() {
//     localStorage.setItem('user', JSON.stringify({name: this.state.inputTextEmail, status: "user", login: this.state.inputTextPassword}));
//     this.props.render();
//   }
//
//   render() {
//     return (
//       <div>
//         <div className="register-form">
//           <h1>Register</h1>
//           <input type="text" placeholder="*name" ref="email" onChange={(e) => this.changeInputEmail(e.target.value)}
//                  onKeyDown={(e) => this._handleKeyDownEmail(e)} value={this.state.inputTextEmail}/>
//           <input type="text" placeholder="*login" ref="password" onChange={(e) => this.changeInputPassword(e.target.value)} onKeyDown={(e) => this._handleKeyDownPassword(e)}
//                  value={this.state.inputTextPassword} className="password"/>
//           <div className="flex-center">
//             <button className="btn btn-warning" ref="log_in" onKeyDown={(e) => this._handleKeyDownLogIn(e)} onClick={() => this.authorize()}>Log in
//             </button>
//           </div>
//         </div>
//         { this.state.warning &&
//         <div className="warning">
//           <h2>Warning</h2>
//           <p>You should fill all the labels with *</p>
//         </div>
//         }
//       </div>
//     );
//   }
// }
//
// export default Register;

import React, {Component} from 'react';
import axios from 'axios';
import './index.css';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputTextName: '',
      inputTextLogin: '',
      inputTextPassword: '',
      inputTextAge: '',
      password: '',
      login: true,
      wrongLoginOrPassword: false,
      fillInputErr: false,
    }
  }

  changeInputLogin(value) {
    value = value.replace(/ /g, '');
    if (value[value.length - 1] !== ' ') {
      this.setState({
        inputTextLogin: value,
      });
      console.log(value);
    }
  }

  changeInputPassword(value) {
    value = value.replace(/ /g, '');
    let password = this.state.password;
    if (value !== '') {
      console.log(!value.split('').includes('*'));
      if (value.replace(/\*/g, '').length > 1) {
        password += value.replace(/\*/g, '');
      } else {
        if (value.length !== this.state.password.length) {
          value.length < password.length ? password = password.slice(0, value.length) : password = password + value[value.length - 1];
        }
      }
      value = Array.from(Array(value.length), x => '*').join('');
    } else {
      password = '';
    }
    this.setState({
      inputTextPassword: value,
      password: password,
    });
    console.log(password);
  }

  changeInputName(value) {
    if (value[value.length - 1] !== ' ') {
      this.setState({
        inputTextName: value,
      });
      console.log(value);
    }
  }

  changeInputAge(value) {
    const arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ""];
    console.log(value[value.length]);
    if ((arr.includes(value[value.length - 1]) || value === '') && value.length < 3) {
      this.setState({
        inputTextAge: value,
      });
      console.log(value);
    }
  }

  _handleKeyDown(e, curInp, nextInp) {
    console.log(curInp, this.state[`inputText${curInp}`]);
    if (e.key === 'Enter') {
      this.refs[nextInp].focus();
    }
  }

  authorize() {
    console.log(`${this.state.inputTextLogin},${this.state.password}`);
    if (this.state.inputTextLogin !== '' && this.state.inputTextPassword !== '') {
      this.setState({fillInputErr: false});
      axios.post('http://localhost:5000/api/authorization/',
        {
          login: this.state.inputTextLogin,
          password: this.state.password
        })
        .then(res => {
          console.log(res.data.err);
          if (res.data.err !== undefined) {
            this.wrongLoginOrPassword();
            throw new Error(res.data.err);
          } else {
            localStorage.setItem("user", JSON.stringify(res.data));
            this.props.refresh(res.data);
          }
        })
        .catch(err => {
          console.log(`ERROR: ${err}`);
        })
    } else {
      this.setState({
        fillInputErr: true,
        wrongLoginOrPassword: false,
      })
    }
  }

  createANewUser() {
    if (this.state.inputTextName !== '' && this.state.inputTextAge !== '' && this.state.inputTextLogin !== '' && this.state.inputTextPassword !== '') {
      axios.post('http://localhost:5000/api/newUser',
        {
          login: this.state.inputTextLogin,
          password: this.state.password,
          name: this.state.inputTextName,
          age: this.state.inputTextAge,
        })
        .then(res => {
          console.log('RES.DATA', res.data);
          localStorage.setItem("user", JSON.stringify(res.data));
          this.props.refresh(res.data);
        })
        .catch(err => {
          console.log(`ERROR: ${err}`);
        })
    } else {
      this.setState({
        fillInputErr: true,
      })
    }

  }

  wrongLoginOrPassword() {
    console.log('HHHOOOO');
    this.setState({
      wrongLoginOrPassword: true,
      fillInputErr: false,
    });
  }

  login() {
    this.setState({
      login: !this.state.login,
      inputTextName: '',
      inputTextAge: '',
      inputTextLogin: '',
      inputTextPassword: '',
      wrongLoginOrPassword: false,
      fillInputErr: false,
    })
  }

  render() {
    return (
      <div>
        <div className="register-form">
          <h1>{this.state.login ? "Log in" : "Sing up"}</h1>
          {this.state.fillInputErr && <p className="error">Error: Fill all the fields</p>}
          {!this.state.login &&
          <input type="text" placeholder="*name" ref="name" onChange={(e) => this.changeInputName(e.target.value)}
                 onKeyDown={(e) => this._handleKeyDown(e, 'Name', 'age')} value={this.state.inputTextName}/>}
          {!this.state.login &&
          <input type="text" placeholder="*age" ref="age" onChange={(e) => this.changeInputAge(e.target.value)}
                 onKeyDown={(e) => this._handleKeyDown(e, 'Age', 'login')} value={this.state.inputTextAge}/>}
          {this.state.wrongLoginOrPassword && <p className="error">Error: Wrong Password or Login</p>}
          <input type="text" placeholder="*login" ref="login" onChange={(e) => this.changeInputLogin(e.target.value,)}
                 onKeyDown={(e) => this._handleKeyDown(e, 'Login', 'password')} value={this.state.inputTextLogin}/>
          <input type="text" placeholder="*password" ref="password"
                 onChange={(e) => this.changeInputPassword(e.target.value)}
                 onKeyDown={(e) => this._handleKeyDown(e, 'Password', 'log_in')}
                 value={this.state.inputTextPassword}
                 className="password"/>
          <div className="flex-center">
            <p className="singUp" onClick={() => this.login()}>{this.state.login ? (window.innerWidth > 500 ? "Create an account" : "Sing up") : "Log in"}</p>
            <button className="btn btn-warning" ref="log_in"
                    onClick={this.state.login ? () => this.authorize() : () => this.createANewUser()}>{this.state.login ? "Log in" : "Sing up"}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;