import React, { Component } from 'react';
import styled from 'styled-components';
import {Header} from './Header';
import {Footer} from './Footer';


export default class App extends Component {
  render() {
    return (
      <div style={{backgroundColor: '#e1e1e1', height: '100vh'}}>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
