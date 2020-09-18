import React, {Component} from 'react';
import '../index.css';
// Functions
import {logout} from "../Functions/App_js_Functions/functions";


class Header extends Component {

    render() {
        return (
              <header>
                  <nav>
                      {JSON.parse(localStorage.getItem('user')).status !== 'stranger' &&
                      <a href="" onClick={() => logout()}>Log out</a>}
                      <h1>Game Platform</h1>
                  </nav>
              </header>
        );
    }
}

export default Header;
