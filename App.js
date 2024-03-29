/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// 
// Color theme: dark-brown: #2B2118, light brown: #695645, yellow: #EFB905, very-light brown: #F9EBD7
// Card documentation: 
// navbar documentation: https://morioh.com/p/c472677920a1
// searchbar documentation: https://reactnativeelements.com/docs/components/searchbar#calling
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { Node } from 'react';
import React from 'react';
import { StyleSheet } from 'react-native';
import MainAppTabNavigation from './AppPages/MainAppTabNavigation';
import store from './store/store';
import { Provider } from 'react-redux'



const App: () => Node = () => {
  return (
    <Provider store={store}>
      <MainAppTabNavigation />
    </Provider>
  );
};

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
});

export default App;