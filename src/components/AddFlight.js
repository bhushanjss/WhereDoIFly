import React, { Component } from 'react';
import {
  Text
} from 'react-native';

import { Button, Card, CardSection, Input, Spinner } from './common';

type Props = {};

class AddFlight extends Component<Props> {

  state = { title:'', orginAirportCity: '', destinationAirportCity: '', orginDateTime: '',
   destinationDateTime: '', error: ''};

	onButtonPress() {
    console.log("Form Added");
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

				<Text style={styles.errorTextStyle}>
					{this.state.error}
				</Text>
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
