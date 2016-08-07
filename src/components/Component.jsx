var React = require("react");

var Component = React.createClass({
	render: function(){

		var headingStyle = {}
		if(this.props.headingColor) {
			headingStyle.color = this.props.headingColor;
		}

		return(
			<div className="col-xs-12 col-sm-4">
				<h3 style={headingStyle}>
					{this.props.title}
				</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing eit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			</div>
		);
	}
});

module.exports = Component;