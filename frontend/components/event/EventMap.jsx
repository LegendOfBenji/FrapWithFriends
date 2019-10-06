import React from 'react';

class EventMap extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            center: { lat: 37.77589, lng: -122.345 },
            zoom: 10
        }
    }

    componentDidMount() {
        const mapOptions = this.state;


        this.map = new google.maps.Map(this.mapNode, mapOptions);
        // this.MarkerManager = new MarkerManager(this.map);
        // this.MarkerManager.updateMarkers();
    }

    // componentDidUpdate() {
    //     this.MarkerManager.updateMarkers();
    // }

    render() {
        return (
            <div id='map-container' ref={map => this.mapNode = map}>
            </div>
        )
    }
}

export default EventMap