import React, { Component } from 'react';
import './scss/AuthItem.scss';

export default class AuthItem extends Component {
	render() {
		return (
			<li className="auth__item">
				<button className="auth__link">BEJELENTKEZES</button>
			</li>
		);
	}
}
