import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';


import { titleChange, originAirportCityChange, destinationAirportCityChange,
originDateTimeChange, destinationDateTimeChange, airlineChange } from '../actions';
import { Button, Card, CardSection, Input } from './common';


class AddFlight extends Component {

  onButtonPress() {
    console.log(`Form Added is :${this.state.title}`);
	}

  titleChange(text) {
    this.props.titleChange(text);
  }

  originAirportCityChange(text) {
    this.props.originAirportCityChange(text);
  }

  destinationAirportCity(text) {
    this.props.destinationAirportCityChange(text);
  }

  originDateTimeChange(text) {
    this.props.originDateTimeChange(text);
  }

  destinationDateTime(text) {
    this.props.destinationDateTimeChange(text);
  }

  airlineChange(text) {
    this.props.airlineChange(text);
  }
	render() {
		return (
			<Card>
				<CardSection >
					<Input
						placeholder="Title"
						label="Title"
						onChangeText={this.titleChange.bind(this)}
					/>
				</CardSection>
				<CardSection>
					<Input
						placeholder="Origin Aiport/City"
						label="Origin Aiport/City"
						onChangeText={this.originAirportCityChange.bind(this)}
					/>
				</CardSection>
        <CardSection>
					<Input
						placeholder="Destination Aiport/City"
						label="Destination Aiport/City"
						onChangeText={this.destinationAirportCity.bind(this)}
					/>
				</CardSection>
        <CardSection>
					<Input
						placeholder="Origin Date-Time"
						label="Origin Date-Time"
						onChangeText={this.originDateTimeChange.bind(this)}
					/>
				</CardSection>
        <CardSection>
					<Input
						placeholder="Destination Date-Time"
						label="Destination Date-Time"
						onChangeText={this.destinationDateTime.bind(this)}
					/>
				</CardSection>
        <CardSection>
					<Input
						placeholder="Airline"
						label="Airline"
						onChangeText={this.airlineChange.bind(this)}
					/>
				</CardSection>
				<Text style={styles.errorTextStyle}>
          {this.title}
				</Text>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Add A Flight</Button>
        </CardSection>
		</Card>
  );
	}
}

const mapStateToProps = state => ({
    title: state.addFlightForm.title,
    error: state.addFlightForm.error
  });

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
};

export default connect(mapStateToProps, { titleChange,
originAirportCityChange,
destinationAirportCityChange,
originDateTimeChange,
destinationDateTimeChange,
airlineChange })(AddFlight);
