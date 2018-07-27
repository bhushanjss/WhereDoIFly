import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text
} from 'react-native';

import { Button, Card, CardSection, Input, Spinner } from './common';
import { emailChange, passwordChange, resetLoginForm, loginUser,
   createUser } from '../actions';

class LoginForm extends Component {


	onLoginButtonPress() {
    const { email, password } = this.props;
    console.log(this.props);
    this.props.loginUser({ email, password });
	}

  onCreateUserButtonPress() {
    const { email, password } = this.props;
    this.props.createUser({ email, password });
  }


  emailChange(text) {
    this.props.emailChange(text);
  }

  passwordChange(text) {
    this.props.passwordChange(text);
  }

  renderButton() {
    const { loading, showCreateUser } = this.props;

    if (loading) {
      return <Spinner size="small" />;
    }

    if (showCreateUser) {
      return (
        <Button onPress={this.onCreateUserButtonPress.bind(this)}>
        Create User
        </Button>
      );
    }
    return (
      <Button onPress={this.onLoginButtonPress.bind(this)}>
      Log In
      </Button>
    );
  }

	render() {
    const { email, password } = this.props;
		return (
			<Card>
				<CardSection >
					<Input
						placeholder="user@gmail.com"
						label="Email"
						onChangeText={this.emailChange.bind(this)}
            value={email}
					/>
				</CardSection>
				<CardSection>
					<Input
						placeholder="password"
						label="Password"
						secureTextEntry
						onChangeText={this.passwordChange.bind(this)}
            value={password}
					/>
				</CardSection>
				<Text style={styles.errorTextStyle}>
					{this.props.error}
				</Text>
				<CardSection>
					{this.renderButton()}
				</CardSection>
		</Card>
  );
	}
}

const mapStateToProps = state => ({
  email: state.loginForm.email,
  password: state.loginForm.password,
  error: state.loginForm.error,
  showCreateUser: state.loginForm.showCreateUser,
  loading: state.loginForm.loading
});

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
};

export default connect(mapStateToProps, { emailChange,
  passwordChange,
  resetLoginForm,
  loginUser,
  createUser
 })(LoginForm);
