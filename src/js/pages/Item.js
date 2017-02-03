import React from "react";
import { Link } from 'react-router';

import { ITEMS } from "../data/items";
import { CATEGORIES } from "../data/categories";
import MenuItem from "../components/MenuItem";

export default class Item extends React.Component {
  constructor (props) {
	super(props);

	let category = this.props.params.category;
	let item = this.props.params.item;
	let currentItem = ITEMS.filter((menuItem) => { return (menuItem.categoryUrl === category && menuItem.url === item) });

	this.state = {
	  item: currentItem[0]
	}
  }

  render() {

   let Item = this.state.item;
   Item =  <MenuItem key={0} item={Item} extendedView={true} />

	return (
	  <div>
		<h2 style={titleStyle}><Link to={`category/${this.state.item.categoryUrl}`} style={titleStyle}>{this.state.item.category}</Link></h2>
		<div class="row">{Item}</div>
	  </div>
	);
  }
}

const titleStyle = {
  color: "#ffffff",
  marginBottom: "40px"
};