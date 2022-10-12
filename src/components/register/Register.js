import React from 'react';

class Register extends React.Component {

	constructor(props) {
		super();
		this.state = {
			email:'',
			password:'',
			name:''
		}
	}
	
	onNameChange = (event) => {
		this.setState({name : event.target.value});
	}

	onEmailChange = (event) => {
		this.setState({email : event.target.value});
	}

	onPasswordChange = (event) => {
		this.setState({password: event.target.value});
	}

	onSubmitRegister = () => {
		fetch('https://arcane-chamber-12966.herokuapp.com/register',{
			method: 'post',
			headers: {'Content-Type':'application/json'},
			body: JSON.stringify({
				name: this.state.name,
				email:this.state.email,
				password: this.state.password
			})
		})
			.then(response => response.json())
			.then(user => {
				if(typeof user != 'string') {
					this.props.loadUser(user[0]);
					this.props.onRouteChange('home')
				}
			})
	}
    render(){
	    return (
	    	<article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-1 shadow-5 mw6 center">
				<main className="pa4 black-80">
				  <div className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f4 fw6 ph0 mh0">Register</legend>
					  <div className="mt3">
				        <label className="db fw6 lh-copy f6" for="name">Name</label>
				        <input 
				        	onChange = {this.onNameChange}
				        	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        	type="email" 
				        	name="email-address"  
				        	id="name"/>
				      </div>			      
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" for="email-address">Email</label>
				        <input 
				        	onChange = {this.onEmailChange}
				        	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        	type="email" 
				        	name="email-address" 
				        	id="email-address"/>
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" for="password">Password</label>
				        <input 
				        	onChange = {this.onPasswordChange}
				        	className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        	type="password" 
				        	name="password"  
				        	id="password"/>
				      </div>
{/*				      <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label>
*/}				    </fieldset>
				    <div className="">
				      <input 
				      	onClick = {this.onSubmitRegister}
				      	className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
				      	type="submit" 
				      	value="Sign up"/>
				    </div>
				  </div>
				</main>
			</article>                
	    );	
	}
};


export default Register;
