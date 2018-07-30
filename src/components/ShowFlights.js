import React, { Component } from 'react';
import _ from 'lodash';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { FlatList, View, Text, ListView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import FlightItem from './FlightItem';
import { CardSection } from './common';
import { loadFlights } from '../actions';

class ShowFlights extends Component {

  componentWillMount() {
    this.props.loadFlights();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ flights }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(flights);
    console.log(this.props);
  }

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
      keyExtractor={flight => flight.uid}
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

const mapStateToProps = state => {
const flights = _.map(state.flights.values, (val, uid) => ({ ...val, uid }));
console.log(flights);
return {
  flights,
  loading: state.flights.loading,
  error: state.flights.error,
  showList: (flights.length > 0)
 };
};

export default connect(mapStateToProps, { loadFlights })(ShowFlights);
