import React, { Component, MouseEvent } from 'react';
import './scss/Nav.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Menu from '../menu/Menu';
import { MenuContext } from '../menu_context/MenuContext';
import styled, { keyframes } from 'styled-components';
import { bounceInDown } from 'react-animations';

const FadeInAnimation = styled.div`animation: 1s ${keyframes`${bounceInDown}`};`;

library.add(faBars, faFacebook, faTwitter);

interface NavInterface {
	toggleMenu: boolean;
	width: number;
	// handleDropdown(e: MouseEvent<HTMLAnchorElement | HTMLLIElement>): void;
	// handleSubItems(e: MouseEvent<HTMLAnchorElement | HTMLLIElement>): void;
	menuItems: MenuItemState[];
}

interface MenuItemState {
	id: string;
	name: string;
	isDropdown?: boolean;
	isAuth: boolean;
	login?: boolean;
	selected: boolean;
	dropdownItems?: DropdownItemState[];
}

interface DropdownItemState {
	id: string;
	name: string;
	selected: boolean;
	isDropdown: boolean;
	subItems?: SubItemState[];
}

interface SubItemState {
	id: string;
	name: string;
}

export default class Nav extends Component<{}, NavInterface> {
	constructor(props: NavInterface) {
		super(props);

		this.state = {
			toggleMenu: false,
			width: window.innerWidth,
			handleDropdown: this.handleDropdown,
			handleSubItems: this.handleSubItems,
			menuItems: [
				{
					id: '0',
					name: 'SZECHENYI UT',
					isDropdown: true,
					isAuth: false,
					selected: false,
					dropdownItems: [
						{
							id: '11',
							name: 'KEZDOLAP',
							selected: false,
							isDropdown: false
						},
						{
							id: '12',
							name: 'TUDNIVALOK',
							isDropdown: true,
							selected: false,
							subItems: [
								{
									id: '121',
									name: 'SUB111'
								},
								{
									id: '122',
									name: 'SUB122'
								},
								{
									id: '133',
									name: 'SUB133'
								}
							]
						},
						{
							id: '13',
							name: 'KOSZONTO',
							selected: false,
							isDropdown: false
						}
					]
				},
				{
					id: '1',
					name: 'MAROSHEGY',
					isDropdown: true,
					isAuth: false,
					selected: false,
					dropdownItems: [
						{
							id: '21',
							name: 'LOREM IPSUM21',
							isDropdown: true,
							selected: false,
							subItems: [
								{
									id: '221',
									name: 'SUB221'
								},
								{
									id: '222',
									name: 'SUB222'
								},
								{
									id: '233',
									name: 'SUB233'
								}
							]
						},
						{
							id: '22',
							name: 'LOREM IPSUM22',
							selected: false,
							isDropdown: false
						},
						{
							id: '23',
							name: 'LOREM IPSUM23',
							selected: false,
							isDropdown: false
						}
					]
				},
				{
					id: '2',
					name: 'BUDAI UT',
					isDropdown: true,
					isAuth: false,
					selected: false,
					dropdownItems: [
						{
							id: '31',
							name: 'LOREM IPSUM11',
							selected: false,
							isDropdown: false
						},
						{
							id: '32',
							name: 'LOREM IPSUM12',
							selected: false,
							isDropdown: false
						},
						{
							id: '33',
							name: 'LOREM IPSUM13',
							isDropdown: true,
							selected: false,
							subItems: [
								{
									id: '321',
									name: 'SUB331'
								},
								{
									id: '322',
									name: 'SUB332'
								},
								{
									id: '333',
									name: 'SUB333'
								}
							]
						}
					]
				},
				{
					id: '3',
					name: 'OLAJFA OVODA',
					isDropdown: true,
					isAuth: false,
					selected: false,
					dropdownItems: [
						{
							id: '41',
							name: 'LOREM IPSUM13211',
							selected: false,
							isDropdown: false
						},
						{
							id: '42',
							name: 'LOREM IPSUM321312',
							isDropdown: true,
							selected: false,
							subItems: [
								{
									id: '421',
									name: 'SUB441'
								},
								{
									id: '422',
									name: 'SUB442'
								},
								{
									id: '433',
									name: 'SUB443'
								}
							]
						},
						{
							id: '43',
							name: 'LOREM IP213213SUM13',
							selected: false,
							isDropdown: false
						}
					]
				},
				{
					id: '4',
					name: 'TALENTUM ALTALANOS ISKOLA',
					isDropdown: true,
					isAuth: false,
					selected: false,
					dropdownItems: [
						{
							id: '51',
							name: 'LOREM IPSUM11zea',
							selected: false,
							isDropdown: false
						},
						{
							id: '52',
							name: 'LOREM IPSUM12dads',
							isDropdown: true,
							selected: false,
							subItems: [
								{
									id: '521',
									name: 'SUB551'
								},
								{
									id: '522',
									name: 'SUB552'
								},
								{
									id: '533',
									name: 'SUB553'
								}
							]
						},
						{
							id: '53',
							name: 'LOREM IPSUM13dsadsa',
							selected: false,
							isDropdown: false
						}
					]
				},
				{
					id: '5',
					name: 'BEJELNTKEZES',
					isAuth: true,
					login: true,
					selected: false
				},
				{
					id: '6',
					name: 'REGISZTRACIO',
					isAuth: true,
					selected: false,
					login: false
				}
			]
		};
	}

	componentWillMount() {
		window.addEventListener('resize', this.handleWindowSizeChange);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleWindowSizeChange);
	}

	handleWindowSizeChange = () => {
		this.setState({ width: window.innerWidth });
	};

	handleDropdown = (e: MouseEvent<HTMLLIElement | HTMLAnchorElement>) => {
		e.preventDefault();

		const items = [ ...this.state.menuItems ];
		const targetKey = e.currentTarget.id;
		const selectedItems = items.filter((item) => item.selected === true);

		if (items[targetKey].selected) {
			items[targetKey].selected = false;
		} else if (!items[targetKey].selected && selectedItems.length > 0) {
			selectedItems.map((item) => {
				if (item.isAuth === false) {
					item.dropdownItems.map((subItem) => (subItem.selected = false));
					item.selected = false;
				} else {
					item.selected = false;
				}
			});
			items[targetKey].selected = true;
		} else if (!items[targetKey].selected) {
			items[targetKey].selected = true;
		}

		this.setState({
			items
		});
	};

	handleSubItems = (e: MouseEvent<HTMLLIElement | HTMLAnchorElement>) => {
		e.preventDefault();

		const subItems = [ ...this.state.menuItems ];
		const subTargetKey = e.currentTarget.id;
		const subArray = subItems.map((item) => item.dropdownItems && item.dropdownItems);

		const subSelected = subArray.map((item) => {
			if (item) {
				return item.map((subItem) => {
					if (subItem.id === subTargetKey && subItem.selected === true) {
						return (subItem.selected = false);
					} else if (subItem.id === subTargetKey && subItem.selected === false) {
						return (subItem.selected = true);
					}
				});
			}
		});

		this.setState({
			subSelected
		});
	};

	handleOnToggle = () => {
		const { toggleMenu } = this.state;

		this.setState({
			toggleMenu: !toggleMenu
		});
	};

	render() {
		const { toggleMenu, width } = this.state;
		const isMobile = width < 1024;
		const isDesktop = width > 1200;

		return (
			<MenuContext.Provider value={this.state}>
				{isMobile ? (
					<main className="nav">
						<header className="nav__header">
							<div className="nav__left">
								<img
									src="http://www.albaref.hu/image/105x112/259.png"
									alt="logo"
									className="nav__logo"
								/>
							</div>

							<div className="nav__main">
								<h1 className="nav__title">Székesfehérvári Református Egyházközség</h1>
							</div>

							<div className="nav__right" onClick={this.handleOnToggle}>
								<FontAwesomeIcon icon={faBars} className="nav__collapse__button" />
							</div>
						</header>
						{toggleMenu &&
						isMobile && (
							<FadeInAnimation>
								<div className="nav__menu">
									<Menu menuItems={this.state.menuItems} />
								</div>
							</FadeInAnimation>
						)}
					</main>
				) : (
					<main className="nav">
						<header className="nav__header">
							<div className="nav__left">
								<img
									src="http://www.albaref.hu/image/105x112/259.png"
									alt="logo"
									className="nav__logo"
								/>
							</div>

							<div className="nav__main">
								<div className="nav__menu">
									<h1 className="nav__title">Székesfehérvári Református Egyházközség</h1>
									{isDesktop && (
										<React.Fragment>
											<FontAwesomeIcon icon={faFacebook} className="nav__socials" />
											<FontAwesomeIcon icon={faTwitter} className="nav__socials" />
										</React.Fragment>
									)}
									<Menu menuItems={this.state.menuItems} />
								</div>
							</div>

							<div className="nav__right" onClick={this.handleOnToggle}>
								<FontAwesomeIcon icon={faBars} className="nav__collapse__button" />
							</div>
						</header>
					</main>
				)}
			</MenuContext.Provider>
		);
	}
}
