import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';

const msp = ({ errors }) => ({
    errors: errors.session
});

const mdp = dispatch => ({
    processForm: user => dispatch(signup(user))
});

export default connect(msp, mdp)(SignupForm);