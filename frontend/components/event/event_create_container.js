import { connect } from "react-redux";
import EventCreate from "./EventCreate";
import { createEvent } from "../../actions/event_actions";
import { clearSessionErrors } from '../../actions/session_actions';

const mdp = dispatch => ({
  createEvent: Event => dispatch(createEvent(Event)),
  clearErrors: () => dispatch(clearSessionErrors())
})

export default connect(null, mdp)(EventCreate);