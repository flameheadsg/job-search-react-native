import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Auth extends Component {
  componentDidMount() {
    this.props.facebookLogin();
    this.onAuth(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.onAuth(nextProps);
  }

  onAuth({ token }) {
    if (token) {
      this.props.navigation.navigate('map');
    }
  }

  render() {
    return (
      <View />
    );
  }
};

function mapStateToProps({ auth }) {
  return { token: auth.token };
}

export default connect(mapStateToProps, actions)(Auth);
