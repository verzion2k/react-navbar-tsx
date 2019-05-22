export interface MenuInterface {
	id: string;
	name: string;
	isDropdown?: boolean;
	isAuth?: boolean;
	login?: boolean;
	selected: boolean;
	dropdownItems?: DropdownItem[];
}

export interface DropdownItem {
	id: string;
	name: string;
	selected: boolean;
	isDropdown: boolean;
	subItems?: SubItem[];
}

export interface SubItem {
	id: string;
	name: string;
}
