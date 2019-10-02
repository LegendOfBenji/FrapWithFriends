import React from 'react';

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

    handleChange(field) {
        return e => this.setState({ [field]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, idx) => (
                    <li key={`error-${idx}`}>{error}</li>
                ))}
            </ul>
        )
    }

    render() {
        return (
            <div className="signup-login-form-container">
            {this.renderErrors()}
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.username} placeholder="Username" onChange={this.handleChange('username')}/>
                <input type="password" value={this.state.password} placeholder="Password" onChange={this.handleChange('password')}/>
                <input type="submit" value="sign in" />
            </form>
            </div>
        )
    }
}

export default LoginForm