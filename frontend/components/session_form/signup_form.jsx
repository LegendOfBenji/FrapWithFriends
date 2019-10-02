import React from 'react';

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
                <input type="text" value={this.state.username} placeholder="Username/nickname" onChange={this.handleChange('username')}/>
                <input type="text" value={this.state.email} placeholder="Email address" onChange={this.handleChange('email')}/>
                <input type="password" value={this.state.password} placeholder="Password (at least 6 characters you won't forget!)" onChange={this.handleChange('password')}/>
                <input type="submit" value="Let's get frappes" />
                    <select name="Cities">
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
            </form>
            </div>
        )
    }
}

export default SignupForm