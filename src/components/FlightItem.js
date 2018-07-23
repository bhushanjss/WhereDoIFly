import React, { Component } from 'react';

import { Text, View } from 'react-native';
import { Card, CardSection, Header } from './common';

class FlightItem extends Component {

render() {
  const { title, originAirportCity, destinationAirportCity, originDateTime,
    destinationDateTime, airline } = this.props.flight;

  return (
    <View>
    <Card>
      <Header headerText={title} />
      <CardSection>
        <Text>{airline}</Text>
        <Text>{originAirportCity} to {destinationAirportCity}</Text>
      </CardSection>
      <CardSection>
        <View>
          <Text>Departed {originAirportCity}</Text>
          <Text>{originDateTime}</Text>
        </View>
        <View>
          <Text>Arrived {originAirportCity}</Text>
          <Text>{destinationDateTime}</Text>
        </View>
      </CardSection>
    </Card>
  </View>
  );
}
}

export default FlightItem;
