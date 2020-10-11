import React, { Component } from 'react';
import Routing from './router';
import { connect } from 'react-redux';

class App extends Component {

  render() {
    const { loading } = this.props;
    return !loading && <Routing />;
  }
}

const mapStateToProps = ({ loading }) => {
  return {
    loading,
  };
};

export default connect(mapStateToProps)(App);
