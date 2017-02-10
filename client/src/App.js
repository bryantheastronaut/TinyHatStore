import React, { Component } from 'react';
import styled from 'styled-components';
import {Header} from './Header';
import {Footer} from './Footer';
import 'whatwg-fetch';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    fetch('/api/items')
      .then(res => res.json())
      .then(data => this.setState({items: data}));
  }
  render() {
    const childrenWithProps = React.Children.map(this.props.children, child => (
      React.cloneElement(child, {items: this.state.items})
    ));
    return (
      <div style={{backgroundColor: '#e1e1e1', height: '100vh'}}>
        <Header />
        {childrenWithProps}
        <Footer />
      </div>
    );
  }
}
