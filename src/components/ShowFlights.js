import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import FlightItem from './FlightItem';

class ShowFlights extends Component {
  renderItem(flight) {
    console.log(flight);
    return <FlightItem flight={flight.item} />;
  }

  render() {
    return (
      <FlatList
      data={this.props.flights}
      renderItem={this.renderItem}
      keyExtractor={flight => flight.id}
      />
    );
  }
}

const mapStateToProps = state => ({ flights: state.flights });

export default connect(mapStateToProps)(ShowFlights);
