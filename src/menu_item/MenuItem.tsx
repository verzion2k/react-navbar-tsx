import React, { Component, MouseEvent } from 'react';
import './scss/MenuItem.scss';
import Icon from '../icon/Icon';
import Input from '../input/Input';
import MenuContext from '../menu_context/MenuContext';

interface MenuItemInterface {
	isDropdown: boolean;
	isAuth: boolean;
	name: string;
	dropdownItems: DropdownItemProps[];
	login: boolean;
	id: string;
	selected: boolean;
}

interface DropdownItemProps {
	id: string;
	name: string;
	selected: boolean;
	isDropdown: boolean;
	subItems?: SubItemProps[];
}

interface SubItemProps {
	id: string;
	name: string;
}

interface ContextInterface {
	handleDropdown(e: MouseEvent<HTMLAnchorElement | HTMLLIElement>): void;
	handleSubItems(e: MouseEvent<HTMLAnchorElement | HTMLLIElement>): void;
	width: number;
}

export default class MenuItem extends Component<MenuItemInterface, ContextInterface> {
	render() {
		const { isDropdown, isAuth, name, dropdownItems, login, id, selected } = this.props;
		const { handleDropdown, handleSubItems, width } = this.context;

		const isMobile = width < 1024;

		let menuItemClass = 'menu__item';
		if (isAuth && selected) {
			menuItemClass += ' menu__item__auth--active';
		} else if (isAuth) {
			menuItemClass += ' menu__item__auth';
		} else if (selected) {
			menuItemClass += ' menu__item--active';
		}

		return (
			<li
				className={menuItemClass}
				onMouseEnter={!isMobile && isAuth ? undefined : !isMobile ? handleDropdown : undefined}
				onMouseLeave={!isMobile && isAuth ? undefined : !isMobile ? handleDropdown : undefined}
				id={id}
				selected={selected}
			>
				<div className={isAuth ? 'menu__item__wrapper--auth' : 'menu__item__wrapper'}>
					<a
						className="menu__link"
						onClick={!isMobile && isAuth ? handleDropdown : isMobile ? handleDropdown : undefined}
						id={id}
						selected={selected}
					>
						{name}
					</a>
					{isDropdown && <Icon />}
				</div>
				<ul className="menu__item__list">
					{isAuth && selected && <Input login={login} />}
					{selected &&
						isDropdown &&
						dropdownItems.map((item) => {
							return (
								<li
									className={
										item.isDropdown && item.selected ? (
											'menu__item__dropdown--active'
										) : (
											'menu__item__dropdown'
										)
									}
									onMouseEnter={item.isDropdown && !isMobile ? handleSubItems : undefined}
									onMouseLeave={item.isDropdown && !isMobile ? handleSubItems : undefined}
									key={item.id}
									selected={item.selected}
									id={item.id}
								>
									<a
										className="menu__link"
										onClick={item.isDropdown && isMobile ? handleSubItems : undefined}
										selected={item.selected}
										id={item.id}
									>
										{' '}
										{item.name}{' '}
									</a>{' '}
									{item.isDropdown && <Icon />}
									{item.selected &&
									item.isDropdown && (
										<ul className="menu__item__sub--wrapper">
											{item.subItems &&
												item.subItems.map((item) => {
													return (
														<li className="menu__item__sub" key={item.id}>
															{' '}
															{item.name}{' '}
														</li>
													);
												})}
										</ul>
									)}
								</li>
							);
						})}
				</ul>
			</li>
		);
	}
}

MenuItem.contextType = MenuContext;
