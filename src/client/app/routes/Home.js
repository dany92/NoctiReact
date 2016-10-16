import React, { Component } from 'react';
import axios from 'axios';

export default class Home extends Component {
	constructor(props){
		super(props);
		this.state = { 
			business: [] 
		}
	}
	componentDidMount(){
		axios.get('/api/business')
		.then(business =>{
			this.setState({business: business.data});
			console.log(this.state.business);
		})
	}

	render() {
		return (
			<div>
		  		<h1> This is Home </h1>
		  		{this.state.business.map((b,index) => <p key={index}>{b.name}</p>)}
		  	</div>
		);
	}
}
