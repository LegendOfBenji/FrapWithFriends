import React from 'react';
import { connect } from 'react-redux';
import { signup, clearSessionErrors } from '../../actions/session_actions';
import SignupForm from './signup_form';

const msp = ({ errors }) => ({
    errors: errors.session
});

const mdp = dispatch => ({
    processForm: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearSessionErrors())
});

export default connect(msp, mdp)(SignupForm);