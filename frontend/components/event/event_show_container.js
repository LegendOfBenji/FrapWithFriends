import { connect } from 'react-redux';
import EventShow from './EventShow';
import { fetchEvent } from '../../actions/event_actions';

const msp = (state, ownprops) => {
  return {
    event: state.entities.events[ownprops.match.params.id]
}
}

const mdp = (dispatch) => ({
  fetchEvent: id => dispatch(fetchEvent(id))
})

export default connect(msp, mdp)(EventShow);