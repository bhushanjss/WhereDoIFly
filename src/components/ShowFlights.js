import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { FlatList, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import FlightItem from './FlightItem';

class ShowFlights extends Component {

  navigateAddFlight() {
    Actions.addFlight();
  }

  renderItem(flight) {
    return <FlightItem flight={flight.item} />;
  }

  render() {
    return (
      <View>
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
      </View>
    );
  }
}

const mapStateToProps = state => ({ flights: state.flights });

export default connect(mapStateToProps)(ShowFlights);
