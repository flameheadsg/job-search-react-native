import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Welcome to my Job App, just set your location and search for jobs near you today!', color: '#ff1485' },
  { text: 'Swipe right to save a job for later, or left if you are not interested.', color: '#009688' },
  { text: 'Ready to find a job near you?', color: '#03A9F4' }
];

export default class Welcome extends Component {
  onSlidesComplete() {
    this.props.navigation.navigate('auth');
  }

  render() {
    return (
      <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete.bind(this)}/>
    );
  }
};
