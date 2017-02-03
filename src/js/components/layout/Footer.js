import React from "react";
import { Link } from "react-router";

export default class Footer extends React.Component {
	render() {
		return (
			<footer style={footerStyle}>
				<div class="container">
					<div class="col-lg-12">
						<p class="text-center" style={footerText}>
							<span>Copyright &copy; 2017 </span>
							<a href="https://www.linkedin.com/in/kakbeya" target="_blank">Alex Shevchenko</a>
						</p>
					</div>
				</div>
			</footer>
		);
	}
}

const footerStyle = {
	background: "#000000",
	height: "40px"
}

const footerText = {
	color: "#ffffff",
	lineHeight: "40px"
}