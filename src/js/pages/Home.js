import React from "react";

import { CATEGORIES } from "../data/categories";
import CategoryItem from "../components/CategoryItem";

export default class Home extends React.Component {
  render() {
	const Categories = CATEGORIES.map((category, i) => <CategoryItem key={i} category={category}/> );
	
	return (
	  <div>
		<div class="row">{Categories}</div>
	  </div>
	);
  }
}