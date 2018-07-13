/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Header } from './components/common';
import AddFlight  from './components/AddFlight';

export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <Header headerText="Where Do I Fly?"/>
        <View style={styles.container}>
          <AddFlight />
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    height: 100
  }
});
