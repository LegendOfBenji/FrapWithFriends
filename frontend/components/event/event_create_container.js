import { connect } from "react-redux";
import EventCreate from "./EventCreate";
import { createEvent } from "../../actions/event_actions";

const mdp = dispatch => ({
  createEvent: Event => dispatch(createEvent(Event))
})

export default connect(null, mdp)(EventCreate);