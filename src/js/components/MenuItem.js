import React from "react";
import { Link } from 'react-router';

export default class MenuItem extends React.Component {
	constructor(props) {
		super(props);
		this.simpleItemView = this.simpleItemView.bind(this);
		this.extendedItemView = this.extendedItemView.bind(this);
		this.state = {
			item: this.props.item,
			extendedView: !!this.props.extendedView
		};
	}

	simpleItemView() {
		return (
			<div class="col-md-4">
				<Link to={`/category/${this.state.item.categoryUrl}/${this.state.item.url}`}>
					<img class="img-responsive center-block" 
						src={this.state.item.image} 
						alt={this.state.item.description} 
						style={[imageStyle, categoryImage]} />
				</Link>
				<h2 class="text-center" style={titleStyle}>
					<Link to={`/category/${this.state.item.url}`} style={linkStyle}>
						{this.state.item.name}
					</Link>
				</h2>
			</div>
		);
	}

	extendedItemView() {
		return (
			<div class="row">
				<div class="col-md-6">
					<img class="img-responsive center-block" 
						src={this.state.item.image} 
						alt={this.state.item.description} 
						style={imageStyle} />
				</div>
				<div class="col-md-6">
					<h2 style={titleStyle}>
							{this.state.item.name}
					</h2>
					<p style={descriptionStyle}>{this.state.item.description}</p>
				</div>
			</div>
		);
	}

  render() {
	let itemView = (this.state.extendedView) ? this.extendedItemView() : this.simpleItemView()

	return (
		<div>
			{ itemView }
		</div>
	);
  }
}

const linkStyle = {
	color: "#ffffff",
	fontSize: "16px",
	lineHeight: "20px",
};

const descriptionStyle = {
	fontFamily: "Source Sans Pro",
	color: "#ffffff",
	fontSize: "14px",
	lineHeight: "18px",
};

const titleStyle = {
	color: "#ffffff",
	fontFamily: "Source Sans Pro",
	marginBottom: "40px",
	marginTop: 0
};

const imageStyle = {
	paddingTop: "40px",
};

const categoryImage = {
	maxWidth: "300px"
};