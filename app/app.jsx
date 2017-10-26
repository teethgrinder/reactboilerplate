var React = require('react');
var ReactDOM =require('react-dom');	

var objOne = {
	name: 'Burak',
	location: 'İzmir'
};

var onjTwo = {
	age: 25,
	...objOne
};
ReactDOM.render(
	<h1>Boilerplate App</h1>,
	document.getElementById('app')
);