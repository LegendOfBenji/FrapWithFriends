import { connect } from 'react-redux';
import ProfileShow from './ProfileShow';
// import { fetchEvent } from '../../actions/event_actions';
// import { createAttendee } from '../../actions/attendee_actions';

const msp = (state, ownprops) => ({
  // event: state.entities.events[ownprops.match.params.id],
  // user: state.entities.users[state.session.id]
})

const mdp = (dispatch) => ({
  // fetchEvent: id => dispatch(fetchEvent(id)),
  // createAttendee: eventId => dispatch(createAttendee(eventId))
})

export default connect(msp, mdp)(ProfileShow);