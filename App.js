import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import Auth from './screens/Auth';
import Welcome from './screens/Welcome';
import Map from './screens/Map';
import Deck from './screens/Deck';
import Settings from './screens/Settings';
import Review from './screens/Review';

export default class App extends Component {
  render() {
    const MainNavigator = createBottomTabNavigator({
      welcome: Welcome,
      auth: Auth,
      main: createBottomTabNavigator({
        map: Map,
        deck: Deck,
        review: createStackNavigator({
          review: Review,
          settings: Settings
        })
      })
    });

    return (
      <View style={styles.container}>
        <MainNavigator />
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
