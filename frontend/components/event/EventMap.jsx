import React from 'react';
import { Link } from 'react-router-dom';
// import MarkerManager from '../../util/marker_manager'

class EventMap extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            center: { lat: 40.757900, lng: -73.873005 },
            zoom: 12
        }
    }

    componentDidMount() {
        const mapOptions = this.state;
        this.props.events.fetchEvents();
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.createMarkersWithInfo();
    }

    componentDidUpdate() {
        const mapOptions = this.state;
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.createMarkersWithInfo();
    }

    changeLocation(val) {
        if (val === "New York") {
            this.setState({ center: { lat: 40.757900, lng: -73.873005 }, zoom: 12 })
        } else if (val === "Boston") {
            this.setState({ center: { lat: 42.377008, lng: -71.117030 }, zoom: 12 })
        } else if (val === "San Francisco") {
            this.setState({ center: { lat: 37.731901, lng: -122.443611 }, zoom: 12 })
        } else if (val === "Dallas") {
            this.setState({ center: { lat: 32.790808, lng: -96.797194 }, zoom: 12 })
        }
    }

    createMarkersWithInfo() {
        if (this.props.events.events.length > 0) {
        return this.props.events.events.map(event => {
            let latLng = { lat: event.lat, lng: event.lng }
            let contentString = `<h1 class="event-index-username">${event.username}</h1>` +
            `<img class="content-string-img" src=${event.photoUrl} />` +
                `<p class="name-of-event">${event.name}</p>` +    
                `<p>${event.date.split(" ")[0] + ', '} ${event.date.split(" ")[1].concat(" " + event.date.split(" ")[2])}</p>` + 
                `<p class="last-test">${event.openings} spots left!</p>`
                + `<a class="check-out-event" href="/#/fraptimes/${event.id}">Check out Event</a>`
        

            let infoWindow = new google.maps.InfoWindow({
                content: contentString
            });
             
            let marker = new google.maps.Marker({
                position: latLng,
                map: this.map,
                animation: google.maps.Animation.DROP,
                title: event.name
            });

            marker.addListener('click', function() {
                infoWindow.open(this.map, marker);
            });

            // google.maps.event.addListener(this.map, "rightclick", function (event) {
            //     var lat = event.latLng.lat();
            //     var lng = event.latLng.lng();
            //     // populate yor box/field with lat, lng
            // });

            // marker.addListener('click', toggleBounce);

            // function toggleBounce() {
            //     if (marker.getAnimation() !== null) {
            //         marker.setAnimation(null);
            //     } else {
            //         marker.setAnimation(google.maps.Animation.BOUNCE);
            //     }
            // }

            marker.setMap(this.map);
        })
    }
    }

    render() {
        let date = new Date();
        let month = date.toLocaleString('default', { month: 'long' });       
        return (
            <>
            <div className="event-locations">
                <div className="event-map-summary">
                    <p>Click on an event to see more information, <Link to="/hosting">Apply to be a host</Link>, or <Link to='/signup'>sign up if you haven't already.</Link></p>
                </div>
                <div className="event-title">
                    <img src={window.calendar} />
                    <p>Frap times in {month}</p>
                    </div>
                <span className="event-decoration">
                    <button onClick={() => this.changeLocation("New York")}>New York</button>
                    <button onClick={() => this.changeLocation("Boston")}>Boston</button>
                    <button onClick={() => this.changeLocation("San Francisco")}>San Francisco</button>
                    <button onClick={() => this.changeLocation("Dallas")}>Dallas</button>
                    </span>
            </div>
            
            <div className="map-wrapper">
                <div id='map-container' ref={map => this.mapNode = map}>
                </div>
            </div>
            </>
        )
    }
}

export default EventMap