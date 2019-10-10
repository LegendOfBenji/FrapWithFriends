import { connect } from 'react-redux';
import Search from './Search';
import { fetchEvents } from '../../actions/event_actions';

const msp = state => ({
    events: state.entities.events
})

const mdp = dispatch => ({
    fetchEvents: () => dispatch(fetchEvents())
})

export default connect(msp, mdp)(Search);