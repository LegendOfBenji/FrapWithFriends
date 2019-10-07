import React from 'react';


class EventIndex extends React.Component { 
    constructor(props){
        super(props)
    }

    // componentDidMount() {
    //     // debugger;
    //     // this.props.events.fetchEvents();
    //     }

    renderEvents() {
        if (this.props.events.events.length > 0) {
            return this.props.events.events.map((event, idx) => {
                const theday = event.date.split(" ")[0].slice(0, -1);
            const thedate = event.date.split(" ")[1].concat(" " + event.date.split(" ")[2])
            return (
                <div className="single-event" key={`eventid-${idx}`}>
                    <p>{event.name}</p>
                    <p>{theday}</p>
                    <p>{thedate}</p>
                    <p>{event.openings}</p>
                    <p>{event.username}</p>
                    <img src={event.photoUrl} />
                </div>
            )
        })
    }
    }

    render() {
        // debugger;
        return (
            <>
            <div className="event-index-header">
                <p className="show-header-one">SOLID FRIENDSHIPS</p>
                <p className="show-header-two">THEY'RE HERE TO STAY.</p>
            </div>
                <div className="zero-index"></div>
            {/* <div className="event-index-one">{this.renderEvents()}</div> */}
            </>
        )
    }  
}

export default EventIndex;