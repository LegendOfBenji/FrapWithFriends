import { connect } from "react-redux";
import EventCreate from "./EventCreate";
import { createEvent } from "../../actions/event_actions";
import { clearSessionErrors } from '../../actions/session_actions';

const msp = ({ errors }) => ({
  errors: errors.session
});

const mdp = dispatch => ({
  createEvent: Event => dispatch(createEvent(Event)),
  clearErrors: () => dispatch(clearSessionErrors())
})

export default connect(msp, mdp)(EventCreate);