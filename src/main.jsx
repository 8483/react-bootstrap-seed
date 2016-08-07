var React = require("react");
var ReactDOM = require("react-dom");
var Component = require("./components/Component.jsx");

ReactDOM.render(
	<Component 
		title="React Bootstrap Component 1"
		headingColor="red"
	/>, 
	document.getElementById("component1")
);

ReactDOM.render(
	<Component 
		title="React Bootstrap Component 2"
		headingColor="green"
	/>, 
	document.getElementById("component2")
);

ReactDOM.render(
	<Component 
		title="React Bootstrap Component 3"
		headingColor="blue"
	/>, 
	document.getElementById("component3")
);