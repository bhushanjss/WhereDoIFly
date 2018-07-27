import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';
import AddFlight from './components/AddFlight';
import ShowFlights from './components/ShowFlights';
import fireBaseKey from '../secretkey';

export default class App extends Component {
  componentWillMount() {
  firebase.initializeApp(fireBaseKey);

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
  });
}

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View>
          <Header headerText="Where Do I Fly?" />
          <AddFlight />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'powderblue'
  }
});
