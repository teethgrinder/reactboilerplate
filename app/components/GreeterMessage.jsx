var React = require('react');
var GreeterMessage = React.createClass({
	
	render: function () {
		var name = this.props.name;

		return (
			<div> 
				<h1> Some {name}!</h1>
				<p> Some Paragraph </p>
			</div>
		);
	},
});
module.exports = GreeterMessage;