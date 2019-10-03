import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    
    //TODO componentdidupdate or componentdidmount to handle re-rendering errors
    // componentDidUpdate(prevProps, prevState) {

    // }
    componentDidMount() {
        this.props.clearErrors();
    }

    handleChange(field) {
        return e => this.setState({ [field]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state);
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
                    <p className="frap-join">Hello friend!</p>
                    <p className="frap-join-intro">It's good to have you back. Sign in here and find your next frap time!</p>
                </div> 
            <div className="signup-login-form-container">
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.username} placeholder="Username" onChange={this.handleChange('username')}/>
                <input type="password" value={this.state.password} placeholder="Password" onChange={this.handleChange('password')}/>
                        <input type="submit" className="signup-login-submit" value="SIGN IN" />
                <Link to='/signup' className='login-signup-redirect'>If you've never signed up before, click here</Link>
            </form>
            </div>
            </>
        )
    }
}

export default LoginForm