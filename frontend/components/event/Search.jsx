import React from 'react';
import EventMap from '../event/EventMap';
import EventIndex from '../event/EventIndex'

const Search = (events, fetchEvents) => {
        return (
            <div>
                <EventMap events = {events} />
                <EventIndex 
                    events = {events}
                    fetchEvents = {fetchEvents}
                />
            </div>
        )
}

export default Search;