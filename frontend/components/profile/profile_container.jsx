import { connect } from 'react-redux';
import ProfileShow from './ProfileShow';
// import { fetchEvent } from '../../actions/event_actions';
// import { createAttendee } from '../../actions/attendee_actions';
import { fetchUser, removeAttendee, removeEvent } from '../../actions/session_actions';

const msp = (state, ownprops) => ({
  user: state.entities.users[state.session.id],
  events: state.entities.events
})

const mdp = (dispatch) => ({
  fetchUser: () => dispatch(fetchUser()),
  removeAttendee: id => dispatch(removeAttendee(id)),
  removeEvent: id => dispatch(removeEvent(id))
})

export default connect(msp, mdp)(ProfileShow);