import React from 'react';
import { Link } from 'react-router-dom';

class EventShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    this.props.fetchEvent(this.props.match.params.id)
  }

  test() {
    // debugger
    if (this.props.event !== undefined) {
      return (
      <div className="event-show-wrapper">
        <div className="left-section">
          <div className="event-info">
          Join {this.props.event.username} for Frap time
          <br />
          {this.props.event.date}
          {this.props.event.time}
          </div>
          <div className="event-signup">
            <button>SIGN ME UP</button>
            <Link to='/fraptimes'>See Other Frap Times</Link>
          </div>
          <div className="fraptime-info">

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