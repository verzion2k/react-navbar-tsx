import React, { Component } from 'react';
import './scss/Menu.scss';
import MenuItem from '../menu_item/MenuItem';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import MenuContext from '../menu_context/MenuContext';

library.add(faUserTie);
library.add(faPencilAlt);
export default class Menu extends Component {
	render() {
		const { menuItems } = this.props;
		const { width } = this.context;
		const isDesktop = width > 1200;

		const authMenu = menuItems.filter((auth) => {
			return auth.isAuth === true;
		});

		const menu = menuItems.filter((item) => {
			return item.isAuth === false;
		});

		return (
			<div className="menu__wrapper">
				<ul className="menu">
					{menu.map((item) => {
						return (
							<MenuItem
								key={item.id}
								id={item.id}
								name={item.name}
								selected={item.selected}
								isDropdown={item.isDropdown}
								dropdownItems={item.dropdownItems}
							/>
						);
					})}
				</ul>

				<ul className="menu__auth">
					<div>
						{authMenu.map((item, index) => {
							return (
								<React.Fragment key={index}>
									{isDesktop && item.login ? (
										<FontAwesomeIcon icon={faUserTie} className="menu__auth--login" />
									) : (
										isDesktop && (
											<FontAwesomeIcon icon={faPencilAlt} className="menu__auth--register" />
										)
									)}

									<MenuItem
										key={item.id}
										id={item.id}
										name={item.name}
										isAuth={item.isAuth}
										login={item.login}
										selected={item.selected}
									/>
								</React.Fragment>
							);
						})}
					</div>
				</ul>
			</div>
		);
	}
}

Menu.contextType = MenuContext;
