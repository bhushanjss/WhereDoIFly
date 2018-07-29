import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';


import { titleChange, originAirportCityChange, destinationAirportCityChange,
  originDateTimeChange, destinationDateTimeChange, airlineChange, addFlight
} from '../actions';
import { Button, Card, CardSection, Input } from './common';


class AddFlight extends Component {

  onButtonPress() {
    const { title, originAirportCity, destinationAirportCity, originDateTime,
      destinationDateTime, airline } = this.props;
      this.props.addFlight({ title,
      originAirportCity,
      destinationAirportCity,
      originDateTime,
      destinationDateTime,
      airline });
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
    const { title, originAirportCity, destinationAirportCity, originDateTime,
      destinationDateTime, airline } = this.props;
		return (
			<Card>
				<CardSection >
					<Input
						placeholder="Title"
						label="Title"
						onChangeText={this.titleChange.bind(this)}
            value={title}
					/>
				</CardSection>
				<CardSection>
					<Input
						placeholder="Origin Aiport/City"
						label="Origin Aiport/City"
						onChangeText={this.originAirportCityChange.bind(this)}
            value={originAirportCity}
					/>
				</CardSection>
        <CardSection>
					<Input
						placeholder="Destination Aiport/City"
						label="Destination Aiport/City"
						onChangeText={this.destinationAirportCity.bind(this)}
            value={destinationAirportCity}
					/>
				</CardSection>
        <CardSection>
					<Input
						placeholder="Origin Date-Time"
						label="Origin Date-Time"
						onChangeText={this.originDateTimeChange.bind(this)}
            value={originDateTime}
					/>
				</CardSection>
        <CardSection>
					<Input
						placeholder="Destination Date-Time"
						label="Destination Date-Time"
						onChangeText={this.destinationDateTime.bind(this)}
            value={destinationDateTime}
					/>
				</CardSection>
        <CardSection>
					<Input
						placeholder="Airline"
						label="Airline"
						onChangeText={this.airlineChange.bind(this)}
            value={airline}
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
    error: state.addFlightForm.error,
    originAirportCity: state.addFlightForm.originAirportCity,
    destinationAirportCity: state.addFlightForm.destinationAirportCity,
    originDateTime: state.addFlightForm.originDateTime,
    destinationDateTime: state.addFlightForm.destinationDateTime,
    airline: state.addFlightForm.airline,
    loading: state.addFlightForm.loading
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
airlineChange,
addFlight })(AddFlight);
