import React, { Component } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { Card, CardSection } from './common';

class FlightItem extends Component {

render() {
  const { title, originAirportCity, destinationAirportCity, originDateTime,
    originTime, destinationDateTime, destinationTime, airline, notes } = this.props.flight;

  return (
    <View>
    <Card>
      <View style={styles.titleView}>
        <Text>{title}</Text>
      </View>
      <CardSection>
        <Text>{airline}</Text>
      </CardSection>
      <CardSection>
        <Text>{originAirportCity} to {destinationAirportCity}</Text>
      </CardSection>
      <CardSection>
      <View style={styles.flightsView}>
        <View>
          <Text>Departed {originAirportCity}</Text>
          <Text>{originDateTime} {originTime}</Text>
        </View>
        <View>
          <Text>Arrived {destinationAirportCity}</Text>
          <Text>{destinationDateTime} {destinationTime}</Text>
        </View>
      </View>
      </CardSection>
    </Card>
  </View>
  );
}
}

export default FlightItem;

const styles = StyleSheet.create({
  titleView: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    flex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  flightsView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
