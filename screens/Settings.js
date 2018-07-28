import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import * as actions from '../actions';

class Settings extends Component {
  render() {
    return (
      <View style={{ marginTop: 25 }}>
        <Button
          title="Clear Saved Jobs"
          large
          icon={{ name: 'delete-forever' }}
          backgroundColor="#F44336"
          onPress={this.props.clearJobs}
        />
      </View>
    );
  }
};

export default connect(null, actions)(Settings);
