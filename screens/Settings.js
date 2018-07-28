import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import * as actions from '../actions';

class Settings extends Component {
  clear = () => {
    this.props.clearJobs();
    this.props.navigation.navigate('map');
  };

  render() {
    return (
      <View style={{ marginTop: 25 }}>
        <Button
          title="Clear Saved Jobs"
          large
          icon={{ name: 'delete-forever' }}
          backgroundColor="#F44336"
          onPress={this.clear}
        />
      </View>
    );
  }
};

export default connect(null, actions)(Settings);
