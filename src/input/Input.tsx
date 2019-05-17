import React, { Component } from 'react';
import InputItem from '../input_item/InputItem';
import './scss/Input.scss';

interface InputValue {
	login: boolean;
}

const Input = ({ login }: InputValue) => {
	return (
		<form className="menu__form">
			{login ? (
				<React.Fragment>
					<InputItem type="email" name="email" placeholder="Email" />
					<InputItem type="password" name="password" placeholder="Jelszo" />
					<button className="menu__form__button menu__form__control">Belepes</button>
				</React.Fragment>
			) : (
				<React.Fragment>
					<InputItem type="text" name="username" placeholder="Felhasznalonev" />
					<InputItem type="password" name="password" placeholder="Jelszo" />
					<InputItem type="password" name="passwordAgain" placeholder="Jelszo megegyszer" />
					<InputItem type="email" name="email" placeholder="Email cim" />
					<InputItem type="text" name="name" placeholder="Teljes nev" />
					<button className="menu__form__button menu__form__control">Regisztracio</button>
				</React.Fragment>
			)}
		</form>
	);
};

export default Input;

// export default class Input extends Component {
// 	render() {
// 		const { login } = this.props;
// 		return (
// 			<form className="menu__form">
// 				{login ? (
// 					<React.Fragment>
// 						<InputItem type="email" name="email" placeholder="Email" />
// 						<InputItem type="password" name="password" placeholder="Jelszo" />
// 						<button className="menu__form__button menu__form__control">Belepes</button>
// 					</React.Fragment>
// 				) : (
// 					<React.Fragment>
// 						<InputItem type="text" name="username" placeholder="Felhasznalonev" />
// 						<InputItem type="password" name="password" placeholder="Jelszo" />
// 						<InputItem type="password" name="passwordAgain" placeholder="Jelszo megegyszer" />
// 						<InputItem type="email" name="email" placeholder="Email cim" />
// 						<InputItem type="text" name="name" placeholder="Teljes nev" />
// 						<button className="menu__form__button menu__form__control">Regisztracio</button>
// 					</React.Fragment>
// 				)}
// 			</form>
// 		);
// 	}
// }
