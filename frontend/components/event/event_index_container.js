import { connect } from 'react-redux';
import EventIndex from './EventIndex';
import { fetchEvents } from '../../actions/event_actions';

const msp = state => ({
    events: state.entities.events
})

const mdp = dispatch => ({
    fetchEvents: () => dispatch(fetchEvents())
})

export default connect(msp, mdp)(EventIndex);