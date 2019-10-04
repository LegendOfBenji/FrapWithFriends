import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            email: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.props.clearErrors();
    }

    handleChange(field) {
        return e => this.setState({ [field]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state).then(() => this.props.history.push('/'));
    }

    renderErrors() {
        if (this.props.errors.length > 0) {
        return (
            <ul className="errors-list-flash">
                {this.props.errors.map((error, idx) => (
                    <li key={`error-${idx}`}>{error}</li>
                ))}
            </ul>
        )
        } else {
            return (
                <ul className="errors-list">
                    {this.props.errors.map((error, idx) => (
                        <li key={`error-${idx}`}>{error}</li>
                    ))}
                </ul>
            )
        }
    }

    render() {
        return (
            <>
                { this.renderErrors() } 
                <div className="signup-login-header">
                    <p className="frap-join">Join for Frap time</p> 
                    <p className="frap-join-intro">There are friends to be made by having meaningful conversations with your favorite beverage.</p>
                    <p className="frap-join-intro">Create an account and you'll be on your way to join the community.</p>
                </div>
            <div className="signup-login-form-container">      
            <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.username} placeholder="Username/nickname" onChange={this.handleChange('username')} className="signup-login-inputfield"/>
                        <input type="text" value={this.state.email} placeholder="Email address" onChange={this.handleChange('email')} className="signup-login-inputfield"/>
                        <input type="password" value={this.state.password} placeholder="Password (at least 6 characters you won't forget!)" onChange={this.handleChange('password')} className="signup-login-inputfield"/>
                    <select name="Cities" width="100%">
                        <option value="Home city" disabled>Home city</option>
                        <option value="New York">New York</option>
                        <option value="San Francisco">San Francisco</option>
                        <option value="Seattle">Seattle</option>
                        <option value="New Jersey">New Jersey</option>
                        <option value="Beijing">Beijing</option>
                        <option value="Hong Kong">Hong Kong</option>
                        <option value="Rome">Rome</option>
                        <option value="Paris">Paris</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Manila">Manila</option>
                        <option value="Boston">Boston</option>
                        <option value="Rio De Janeiro">Rio De Janeiro</option>
                        <option value="London">London</option>
                        <option value="Dubai">Dubai</option>
                        <option value="Bangkok">Bangkok</option>
                        <option value="Other">Other</option>
                    </select>
                    <input type="submit" className="signup-login-submit" value="LET'S FRAP OUT" />
                    <Link to='/login' className='login-signup-redirect'>If you've already done this, click here to login</Link>
            </form>
            </div>
            </>
        )
    }
}

export default SignupForm