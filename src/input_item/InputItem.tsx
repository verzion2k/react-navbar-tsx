import React from 'react';
import './scss/InputItem.scss';

interface InputItemValue {
	type: string;
	name: string;
	placeholder: string;
}

const InputItem = ({ type, name, placeholder }: InputItemValue) => {
	return <input type={type} name={name} placeholder={placeholder} className="menu__form__control" />;
};

export default InputItem;
