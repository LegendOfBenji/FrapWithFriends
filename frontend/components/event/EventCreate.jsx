import React from 'react';
import Calendar from 'react-calendar/dist/entry.nostyle';

class EventCreate extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      openings: 5,
      name: "",
      date: "",
      time: "",
      summary: "",
      story: "",
      discussion: "",
      quote: "",
      lat: 40.751345,
      lng: -73.983730,
      photoFile: null,
      photoUrl: null,
      center: { lat: 40.757900, lng: -73.873005 },
      city: "New York"
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
    this.autocomplete();
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.center.lat !== this.state.center.lat || prevState.center.lng !== this.state.center.lng ) {
    this.autocomplete();
    }
  }

  componentWillUnmount(){
    this.props.clearErrors();
  }

  changeLocation(val) {
    if (val === "New York") {
      this.setState({ center: { lat: 40.757900, lng: -73.873005 }, zoom: 12 });
      this.setState({ city: "New York" });
    } else if (val === "Boston") {
      this.setState({ center: { lat: 42.377008, lng: -71.117030 }, zoom: 12 });
      this.setState({ city: "Boston" });
    } else if (val === "San Francisco") {
      this.setState({ center: { lat: 37.731901, lng: -122.443611 }, zoom: 12 });
      this.setState({ city: "San Francisco" });
    } else if (val === "Dallas") {
      this.setState({ center: { lat: 32.790808, lng: -96.797194 }, zoom: 12 });
      this.setState({ city: "Dallas" });
    }
  }

    // ERRORS

  renderErrors() {
    if (this.props.errors.length > 0) {
    
      return (
        <ul className="errors-list-flash1">
          {this.props.errors.map((error, idx) => (
            <li key={`error-${idx}`}>{error}</li>
          ))}
        </ul>
      )
    } else {
    
      return (
        <ul className="errors-list">
          {this.props.errors.map((error, idx) => (
            <li key={`error-${idx}`}>{error}</li>
          ))}
        </ul>
      )
    }
  }


    // MAP

  autocomplete() {
    //setting the bounds, have strictBounds to true, TODO: set bounds based on city
    let center;
    let mapOptions;
    let map;
    let defaultBounds;
    let city;
    let swBound1;
    let swBound2;
    let neBound1;
    let neBound2;

    center = this.state.center;
    city = this.state.city
    if (city === "New York") {
      swBound1 = 40.658480;
      swBound2 = 40.827725;
      neBound1 = -74.032591;
      neBound2 = -73.715510;
    } else if (city === "Boston") {
      swBound1 = 42.227997;
      swBound2 = 42.386856;
      neBound1 = -71.221087;
      neBound2 = -71.022309;
    } else if (city === "San Francisco") {
      swBound1 = 37.693417;
      swBound2 = 37.809615;
      neBound1 = -122.497790;
      neBound2 = -122.400885;
    } else if (city === "Dallas") {
      swBound1 = 32.650318;
      swBound2 = 32.926633;
      neBound1 = -96.946336;
      neBound2 = -96.681859;
    }
    mapOptions = { center, zoom: 12 }
    map = new google.maps.Map(this.mapNode, mapOptions);
    defaultBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(swBound1, neBound1),
      new google.maps.LatLng(swBound2, neBound2),
    )

    let input = document.getElementById('searchTextField');
    // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    let options = {
      bounds: defaultBounds,
      types: ['establishment'],
      strictBounds: true
    }

    let searchBox = new google.maps.places.SearchBox(input, options);
    
    const that = this;
    searchBox.addListener('places_changed', function () {
      var places = searchBox.getPlaces();
      // let markers = [];

      if (places.length == 0) {
        return;
      }

      var bounds = new google.maps.LatLngBounds();
      places.forEach(function (place) {
        if (!place.geometry) {
          console.log("Returned place contains no geometry");
          return;
        }

        var icon = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25)
        };

        // Create a marker for each place.
      let marker = new google.maps.Marker({
          map: map,
          icon: icon,
          title: place.name,
          position: place.geometry.location
        });

        let infoWindow = new google.maps.InfoWindow({
          content: '<p class="selecto">Selected!</p>'
        })
        
        marker.addListener('click', toggleBounce);
        marker.addListener('click', function (e) {
          let lat = e.latLng.lat();
          let lng = e.latLng.lng();
          that.setState({ lat, lng });
          infoWindow.open(map, marker)
        })
        marker.setMap(map)

        function toggleBounce() {
          if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
          } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
          }
        }
      
        if (place.geometry.viewport) {
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      map.fitBounds(bounds);
    });

    return searchBox;
  }

  // INPUT/SUBMIT

  handleChange(field) {
    return e => {
      this.setState({ [field]: e.target.value })
    } 
  }

  onDateChange(field) {
    return e => { 
      this.setState({ [field]: e.toDateString() })
    }
  }

  onTimeChange(field) {
    return e => {
  let timeSplit = e.target.value.split(':');
  let hours;
  let minutes;
  let meridian;
  hours = timeSplit[0];
  minutes = timeSplit[1];
  if (hours > 12) {
    meridian = 'PM';
    hours -= 12;
  } else if (hours < 12) {
    meridian = 'AM';
    if (hours == 0) {
      hours = 12;
    }
  } else {
    meridian = 'PM';
  }
  this.setState({[field]: hours + ':' + minutes + ' ' + meridian});
}
}

  // AWS
  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    if (this.state.photoFile) {
      formData.append('event[photo]', this.state.photoFile);
    }
    formData.append('event[openings]', this.state.openings);
    formData.append('event[name]', this.state.name);
    formData.append('event[date]', this.state.date);
    formData.append('event[time]', this.state.time);
    formData.append('event[summary]', this.state.summary);
    formData.append('event[story]', this.state.story);
    formData.append('event[discussion]', this.state.discussion);
    formData.append('event[quote]', this.state.quote);
    formData.append('event[lat]', this.state.lat);
    formData.append('event[lng]', this.state.lng);
    this.props.createEvent(formData).then(event => this.props.history.push(`/fraptimes/${event.event.id}`), () => {

    });
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({photoFile: file, photoUrl: fileReader.result});
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  // RENDER

  render() {
    const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null
  
    return (
      <>
        {this.renderErrors()}
        <div className="event-index-header">
          <p className="show-header-one">HOSTING</p>
          <p className="show-header-two">Make your own event!</p>
        </div>
        <div className="hosting-background">
        </div>

        <span className="event-create-decoration">
          <p className="select-location">Pick a city, type in a location, and click on that marker!</p>
          <span className="event-create-sub-decoration">
          <button onClick={() => this.changeLocation("New York")}>New York</button>
          <button onClick={() => this.changeLocation("Boston")}>Boston</button>
          <button onClick={() => this.changeLocation("San Francisco")}>San Francisco</button>
          <button onClick={() => this.changeLocation("Dallas")}>Dallas</button>
          </span>
        </span>
        <div className="dumbmap">
        <input type="text" id="searchTextField" placeholder="Create your event" />
          <div id='map-container2' ref={map => this.mapNode = map}>
          </div> 
        </div>

      <form onSubmit={this.handleSubmit} className="final-form">
        <div className="left-form">
          <p className="final-form-header">Pick a date, time, and upload a photo!</p>
          <hr></hr>
          <Calendar onChange={this.onDateChange('date')} />
          <label>
        <input type="time" onChange={this.onTimeChange('time')} />
          </label>
          <label className="fancy">
            Choose a file
        <input type="file" className="inputfile" onChange={this.handleFile.bind(this)} />
          </label>
          <h3>Image Preview</h3>
          <hr></hr>
            <div className="preview">{preview}</div>
          </div>

          <div className="right-form">
            <p className="final-form-header">Fill in the fields and submit!</p>
            <hr></hr>
            <p>Name</p>
          <input type="text" onChange={this.handleChange('name')}/>
            <p>Summary</p>
          <textarea rows="4" cols="50" onChange={this.handleChange('summary')}/>
            <p>Story</p>
          <textarea rows="4" cols="50" onChange={this.handleChange('story')}/>
        
        
            <p>Discussion</p>
            <textarea rows="4" cols="50" onChange={this.handleChange('discussion')}/>
        
            <p>Quote</p>
            <input type="text" onChange={this.handleChange('quote')}/>
            <button onSubmit={this.handleSubmit}>Host event!</button>
          </div>
      </form>
      </>
    )
  }
}

export default EventCreate;