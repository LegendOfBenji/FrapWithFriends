import React from 'react';
import { Link } from 'react-router-dom';

class EventShow extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props);
  }

  componentDidMount(){
    this.props.fetchEvent(this.props.match.params.id)
  }

  test() {
    if (this.props.event !== undefined) {
      return (
      <div className="event-show-wrapper">
        <div className="left-section">
          <div className="event-info">
              <p className="host-join">Join {this.props.event.username} for Frap time</p>
              <hr></hr>
              <p>{this.props.event.date}</p>
              <p>{this.props.event.time}</p>
              <p>{this.props.event.openings} seats left</p>
          </div>
          <div className="event-signup">
            <button onClick={() => this.props.createAttendee(this.props.event.id)} className="sign-me-up">SIGN ME UP</button>
            <Link to='/fraptimes'>See Other Frap Times</Link>
          </div>
          <div className="fraptime-info">
            <p className="what-is-fraptime">What is Frap time, exactly?</p>
              <img src={window.coffeeshow} />
             <hr></hr>
              <p className="coffee-summary">Frap time is where five-ish friendly people sit at a cafe with a Host to have a two hour conversation. It's not about anything in particular.</p>
              <p className="coffee-summary">You're meant to know pretty much nothing about the people that come, aside from the fact that they all signed up for this — just like you. It's self-selecting in that sense.</p>
              <p className="coffee-summary">However, it may bring you comfort to know a little something about your Host. If so, just keep reading!</p>
              <img src={window.rightdog} />
          </div>
        </div>

      

      <div className="right-section">
        <div className="right-header">
          <p className="host-intro">
            Meet your host, {this.props.event.username}.
          </p>
          <p className="host-subheader">
              (It'll be helpful to know what they look like when you're looking for a group of confused friends at the spot.)
           </p>
           </div>
            <div className="photo-cover">
              <img src={this.props.event.photoUrl} className="show-photo"/>
            </div>

            <div className="storytime">
              {this.props.event.summary}
              <p className="story-question">What's your story?</p>
              {this.props.event.story}
              <p className="story-question">What might we talk about?</p>
              {this.props.event.discussion}
            </div>
            <div className="story-quote">
              {this.props.event.quote}
            </div>
        </div>
      </div>
      )
    }
  }

  render() {
    return (
      <>
      {this.test()}
    </>
    )
  }
}

export default EventShow