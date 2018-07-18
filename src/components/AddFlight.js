import React, { Component } from 'react';
import {
  Text
} from 'react-native';

import { Button, Card, CardSection, Input } from './common';

type Props = {};

class AddFlight extends Component<Props> {

  state = { title: '',
  orginAirportCity: '',
  destinationAirportCity: '',
  orginDateTime: '',
  destinationDateTime: '',
  airline: '',
  error: '' };

	onButtonPress() {
    console.log(`Form Added is :${this.state.title}`);
	}


	render() {
		return (
			<Card>
				<CardSection >
					<Input
						placeholder="Title"
						label="Title"
						value={this.state.title}
						onChangeText={title => this.setState({ title })}
					/>
				</CardSection>
				<CardSection>
					<Input
						placeholder="Origin Aiport/City"
						label="Origin Aiport/City"
						value={this.state.orginAirportCity}
						onChangeText={orginAirportCity => this.setState({ orginAirportCity })}
					/>
				</CardSection>
        <CardSection>
					<Input
						placeholder="Destination Aiport/City"
						label="Destination Aiport/City"
						value={this.state.destinationAirportCity}
						onChangeText={destinationAirportCity => this.setState({ destinationAirportCity })}
					/>
				</CardSection>
        <CardSection>
					<Input
						placeholder="Origin Date-Time"
						label="Origin Date-Time"
						value={this.state.orginDateTime}
						onChangeText={orginDateTime => this.setState({ orginDateTime })}
					/>
				</CardSection>
        <CardSection>
					<Input
						placeholder="Destination Date-Time"
						label="Destination Date-Time"
						value={this.state.destinationDateTime}
						onChangeText={destinationDateTime => this.setState({ destinationDateTime })}
					/>
				</CardSection>
        <CardSection>
					<Input
						placeholder="Airline"
						label="Airline"
						value={this.state.airline}
						onChangeText={airline => this.setState({ airline })}
					/>
				</CardSection>
				<Text style={styles.errorTextStyle}>
					{this.state.error}
				</Text>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Add A Flight
          </Button>
        </CardSection>
		</Card>
  );
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
};

export default AddFlight;
