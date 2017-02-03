import React from "react";

import { ITEMS } from "../data/items";
import { CATEGORIES } from "../data/categories";
import MenuItem from "../components/MenuItem";

export default class Category extends React.Component {
	constructor (props) {
		super(props);

		let category = this.props.params.category;
		let categoryName = CATEGORIES.filter((categoryItem) => { return categoryItem.url === category });
		let categoryItems = ITEMS.filter((item) => { return item.categoryUrl === category });

		this.state = {
			category: categoryName[0],
			items: categoryItems
		}
	}

	render() {

	 let Items = this.state.items;
	 Items = Items.map((item, i) => <MenuItem key={i} item={item} extendedView={false} /> );

		return (
			<div>
				<h2 style={titleStyle}>{this.state.category.name}</h2>
				<div class="row">{Items}</div>
			</div>
		);
	}
}

const titleStyle = {
	color: "#ffffff",
	marginBottom: "40px"
};