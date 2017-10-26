var React = require('react');
var GreeterMessage =require('GreeterMessage');	
var GreeterForm =require('GreeterForm');	

var Greeter = React.createClass({
	getDefaultProps() {
		return {
			name: 'Burak',
			message: 'this is default message'
		};
	},
	getInitialState() {
		return {
			name: this.props.name,	
			message: this.props.message	
		};
	},	
	handleNewName: function (updates){
		this.setState(updates);
	},
	render: function () {
		var name = this.state.name;
		var message = this.state.message;
		return (
			<div>
				<GreeterMessage name={name} message={message}/>
				<GreeterForm onNewData={this.handleNewName}/>				
			</div>
		);
	}
});

module.exports = Greeter;