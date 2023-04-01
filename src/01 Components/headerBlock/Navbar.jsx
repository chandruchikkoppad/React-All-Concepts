import React, { Component } from 'react';
import Logo from './Logo';
import Menu from './Menu';


class Navbar extends React.Component {
    render() {
        return (
          <section id="navbar">
            <article >
              <Logo />
              <Menu />
            </article>
          </section>
        );
    }
}

export default Navbar;