import { connect } from 'react-redux';
import ProfileShow from './ProfileShow';
// import { fetchEvent } from '../../actions/event_actions';
// import { createAttendee } from '../../actions/attendee_actions';
import { fetchUser } from '../../actions/session_actions';

const msp = (state, ownprops) => ({
  user: state.entities.users[state.session.id],
  events: state.entities.events
})

const mdp = (dispatch) => ({
  fetchUser: () => dispatch(fetchUser())
  
})

export default connect(msp, mdp)(ProfileShow);