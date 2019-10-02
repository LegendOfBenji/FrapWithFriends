import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';

const msp = ({ errors, }) => ({
    errors: errors.session
});

const mdp = dispatch => ({
    processForm: user => dispatch(login(user))
});

export default connect(msp, mdp)(LoginForm);