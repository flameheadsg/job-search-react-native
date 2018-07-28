import React, { Component } from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './store';

import Auth from './screens/Auth';
import Welcome from './screens/Welcome';
import Map from './screens/Map';
import Deck from './screens/Deck';
import Settings from './screens/Settings';
import Review from './screens/Review';

export default class App extends Component {
  componentWillMount() {
    AsyncStorage.removeItem('fb_token');
  }

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
      }, {
        tabBarOptions: {
            labelStyle: { fontSize: 15 }
          }
      })
    }, {
      navigationOptions: {
        tabBarVisible: false
      },
      lazy: true
    });

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      </Provider>
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
