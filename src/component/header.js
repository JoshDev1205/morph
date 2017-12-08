import React from 'react';
import RouterMain from '../router/main';
import { BrowserRouter as Router, NavLink, Link } from 'react-router-dom';

export default class Header extends React.Component {

  render() {
    return (
      <Router>
        <div>
        <RouterMain />
        <header className="fixed">
          <div className="action icon menu_black left"></div>
          {/*
          <ul className="menu left">
              <li>
              <a href="">Button</a>
            </li>
          </ul>*/}
          <div className="brand">
            <Link to="/">
                {this.props.appname}
            </Link>
          </div>
          <NavLink to="/component/button"
            className="option left"
            activeClassName="selected">
              Boton
          </NavLink>
          <NavLink to="/component/input"
            className="option left"
            activeClassName="selected">
              Caja de texto
          </NavLink>
          <NavLink to="/component/grid"
            className="option left"
            activeClassName="selected">
              Grilla
          </NavLink>
        </header>
        </div>
      </Router>
    )
  }
}
