import React from "react";
import { Link } from 'react-router';

export default class CategoryItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			category: this.props.category
		};
	}

  render() {
	return (
	  <div class="col-md-4">
		<Link to={`/category/${this.state.category.url}`}>
			<img class="img-responsive center-block img-circle" 
				src={this.state.category.image} 
				alt={this.state.category.description} 
				style={imageStyle} />
		</Link>
		<h2 class="text-center" style={titleStyle}>
			<Link to={`/category/${this.state.category.url}`} style={linkStyle}>
				{this.state.category.name}
			</Link>
		</h2>
	  </div>
	);
  }
}

const linkStyle = {
	color: "#ffffff",
	fontSize: "16px",
	lineHeight: "20px",
};

const titleStyle = {
	fontFamily: "Source Sans Pro",
	marginBottom: "40px",
	marginTop: 0
};

const imageStyle = {
	paddingTop: "40px",
	maxWidth: "300px"
};