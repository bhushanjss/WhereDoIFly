import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { FlatList, View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import FlightItem from './FlightItem';
import { CardSection } from './common';

class ShowFlights extends Component {

  navigateAddFlight() {
    Actions.addFlight();
  }

  renderItem(flight) {
    return <FlightItem flight={flight.item} />;
  }

  renderList() {
    if (!this.props.showList) {
      const noFlightMsg = 'No Flights Selected. Please Add One';
      return (
        <View>
        <CardSection>
        <View style={{ alignItems: 'center', flex: 1 }}>
          <Text>{ noFlightMsg }</Text>
        </View>
        </CardSection>
        <Button
          title='Add A Flight'
          buttonStyle={{
          height: 45,
          borderWidth: 0,
          borderRadius: 5,
          alignSelf: 'stretch',
          marginTop: 20,
          marginBottom: 20
          }}
          containerStyle={{ marginTop: 20 }}
          onPress={this.navigateAddFlight.bind(this)}
        />
        </View>
      );
    }

    return (<View>
      <FlatList
      data={this.props.flights}
      renderItem={this.renderItem}
      keyExtractor={flight => flight.id}
      />
      <Button
        title='Add'
        buttonStyle={{
        width: 100,
        height: 45,
        position: 'absolute',
        bottom: 20,
        right: 10,
        borderColor: 'transparent',
        borderWidth: 0,
        borderRadius: 5
        }}
        containerStyle={{ marginTop: 20 }}
        onPress={this.navigateAddFlight.bind(this)}
      />
      </View>);
  }

  render() {
    return (
      <View>
        {this.renderList()}
      </View>
    );
  }
}

const mapStateToProps = state => ({ flights: state.flights, showList: (state.flights.length > 0) });

export default connect(mapStateToProps)(ShowFlights);
