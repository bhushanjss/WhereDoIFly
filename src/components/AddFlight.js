import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';


import { titleChange, originAirportCityChange, destinationAirportCityChange,
  originDateTimeChange, originTimeChange, destinationDateTimeChange,
  destinationTimeChange, airlineChange, notesChange, addFlight
} from '../actions';
import { Card, CardSection, Input } from './common';


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

  destinationAirportCityChange(text) {
    this.props.destinationAirportCityChange(text);
  }

  originDateTimeChange(text) {
    this.props.originDateTimeChange(text);
  }

  originTimeChange(text) {
    this.props.originTimeChange(text);
  }

  destinationDateTimeChange(text) {
    this.props.destinationDateTimeChange(text);
  }

  destinationTimeChange(text) {
    this.props.destinationTimeChange(text);
  }

  airlineChange(text) {
    this.props.airlineChange(text);
  }

  notesChange(text) {
    this.props.notesChange(text);
  }

	render() {
    const { title, originAirportCity, destinationAirportCity, originDateTime,
      originTime, destinationDateTime, destinationTime, airline, notes } = this.props;
		return (
      <ScrollView>
			<Card>
				<CardSection >
					<Input
						placeholder="Title"
						label="Title"
						onChangeText={this.titleChange.bind(this)}
            value={title}
            editable={false}
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
						onChangeText={this.destinationAirportCityChange.bind(this)}
            value={destinationAirportCity}
					/>
				</CardSection>
        <CardSection>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={{ fontSize: 8, paddingLeft: 5, paddingBottom: 10 }}>Origin Date-Time</Text>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
            <DatePicker
            style={{ width: 200 }}
            date={originDateTime}
            mode="date"
            format="YYYY-MM-DD"
            maxDate={destinationDateTime}
            confirmBtnText="Ok"
            cancelBtnText="Cancel"
            customStyles={{ dateIcon: { position: 'absolute', left: 0, marginLeft: 0 },
              dateInput: { marginLeft: 100 } }}
            onDateChange={(date) => this.originDateTimeChange(date)}
            />
            <DatePicker
            style={{ width: 100 }}
            date={originTime}
            mode="time"
            format="HH:mm A"
            confirmBtnText="Ok"
            cancelBtnText="Cancel"
            customStyles={{ dateIcon: { display: 'none' },
            dateInput: { marginLeft: 20 } }}
            onDateChange={(time) => this.originTimeChange(time)}
            />
          </View>
        </View>
				</CardSection>
        <CardSection>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={{ fontSize: 8, paddingLeft: 5 }}>Destination Date-Time</Text>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
            <DatePicker
            style={{ width: 200 }}
            date={destinationDateTime}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate={originDateTime}
            confirmBtnText="Ok"
            cancelBtnText="Cancel"
            customStyles={{ dateIcon: { position: 'absolute', left: 0, marginLeft: 0 },
              dateInput: { marginLeft: 100 } }}
            onDateChange={(date) => this.destinationDateTimeChange(date)}
            />
            <DatePicker
            style={{ width: 100 }}
            date={destinationTime}
            mode="time"
            format="HH:mm A"
            confirmBtnText="Ok"
            cancelBtnText="Cancel"
            customStyles={{ dateIcon: { display: 'none' },
            dateInput: { marginLeft: 20 } }}
            onDateChange={(time) => this.destinationTimeChange(time)}
            />
        </View>
        </View>
				</CardSection>
        <CardSection>
					<Input
						placeholder="Notes"
						label="Notes"
            multiline="true"
						onChangeText={this.notesChange.bind(this)}
            value={notes}
					/>
				</CardSection>
				<Text style={styles.errorTextStyle}>
          {this.title}
				</Text>
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
          loading={this.props.loading}
          loadingProps={{ size: 'large' }}
          containerStyle={{ marginTop: 20 }}
          onPress={this.onButtonPress.bind(this)}
        />
		</Card>
    </ScrollView>
  );
	}
}

const mapStateToProps = state => ({
    title: state.addFlightForm.title || (`${state.addFlightForm.originAirportCity
    } - ${state.addFlightForm.destinationAirportCity}`),
    error: state.addFlightForm.error,
    originAirportCity: state.addFlightForm.originAirportCity,
    destinationAirportCity: state.addFlightForm.destinationAirportCity,
    originDateTime: state.addFlightForm.originDateTime,
    originTime: state.addFlightForm.originTime,
    destinationDateTime: state.addFlightForm.destinationDateTime,
    destinationTime: state.addFlightForm.destinationTime,
    notes: state.addFlightForm.notes,
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
originTimeChange,
destinationDateTimeChange,
destinationTimeChange,
airlineChange,
notesChange,
addFlight })(AddFlight);
