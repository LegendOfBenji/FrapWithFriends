import React from 'react';


class EventIndex extends React.Component { 
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchEvents();
    }

    render() {
        return (
            <>
                <div className="zero-index"></div>
            <h1 className="event-index-one">Placeholder</h1>
            </>
        )
    }
}

export default EventIndex;