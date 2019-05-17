import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

library.add(faCaretDown);

export default class Icon extends Component {
	render() {
		return <FontAwesomeIcon icon={faCaretDown} className="menu__icon" />;
	}
}
