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
      lng: - 73.983730,
      zoom: 11,
      photoFile: null
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // this.initAutocomplete();
  }

  componentDidUpdate() {
    // this.initAutocomplete();
  }

    // MAP

  getMapCenter() {
    let lat = this.state.lat
    let lng = this.state.lng
    return {
      center: { lat, lng },
      zoom: this.state.zoom,
    }
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
    const formData = new formData();
    formData.append('event[photo]', this.state.photoFile);
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
    formData.append('event[zoom]', this.state.zoom);
    this.props.createEvent(formData).then(event => this.props.history.push(`/fraptimes/${event.id}`));
  }

  // RENDER

  render() {
    return (
      <>
      <Calendar onChange={this.onDateChange('date')} />
      <form>
        <label>
          Name
        <input type="text" onChange={this.handleChange('name')}/>
        </label>
        <label>
          Summary
          <textarea onChange={this.handleChange('summary')}/>
        </label>
        <label>
          Story
          <textarea onChange={this.handleChange('story')}/>
        </label>
        <label>
          Discussion
            <textarea onChange={this.handleChange('discussion')}/>
        </label>
        <label>
          Quote
            <input type="text" onChange={this.handleChange('quote')}/>
        </label>
        <label>
          Time
        <input type="time" onChange={this.onTimeChange('time')} />
          </label>
        <input type="file" />
      </form>
        {/* <input type="text" id="mapsearch" placeholder="Create your event" />
          <div id='map-container2' ref={map => this.mapNode = map}>
      </div>  */}
      </>
    )
  }
}

export default EventCreate;