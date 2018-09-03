import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import logo from '../logo.svg';
import './App.css';
import Info from '../containers/Info'
import { showInfo } from '../actions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={this.props.onClick}>Show info</button>
        <Info></Info>
      </div>
    );
  }
}

App.propTypes = {
  onClick: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(showInfo("template app"))
})

const mapStateToProps = (state, ownProps) => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
