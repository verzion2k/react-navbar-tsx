import React, { Component } from 'react';
import './scss/Auth.scss';
import AuthItem from '../auth_item/AuthItem';

export default class Auth extends Component {
	render() {
		return (
			<ul className="auth">
				<AuthItem />
				<AuthItem />
			</ul>
		);
	}
}
