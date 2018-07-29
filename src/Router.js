import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import AddFlight from './components/AddFlight';
import ShowFlights from './components/ShowFlights';

const RouterComponent = () => (
  <Router>
    <Scene key="root">
      <Scene key="login" component={LoginForm} title="Please Login" initial />
      <Scene key="showFlights" component={ShowFlights} title="Flights" />
      <Scene key="addFlight" component={AddFlight} title="Add Flight" />
    </Scene>
  </Router>
);

export default RouterComponent;
