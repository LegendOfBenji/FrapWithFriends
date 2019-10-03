import React from 'react';
import { connect } from 'react-redux';
import { login, clearSessionErrors } from '../../actions/session_actions';
import LoginForm from './login_form';

const msp = ({ errors, }) => ({
    errors: errors.session
});

const mdp = dispatch => ({
    processForm: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearSessionErrors())
});

export default connect(msp, mdp)(LoginForm);