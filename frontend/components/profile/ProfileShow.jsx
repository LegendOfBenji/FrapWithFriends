import React from 'react';

class ProfileShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    this.props.fetchUser();
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevProps.user.events) {
      this.props.fetchUser();
    } else if (prevProps.user.events.length !== this.props.user.events.length || prevProps.user.hosted_events.length !== this.props.user.hosted_events.length) {
      console.log('got here')
      this.props.fetchUser();
    }
  }

  joined() {
    if (this.props.user.events) {
    if (this.props.user.events.length > 0) {
      return this.props.user.events.map(event => {
      return (
        <div className="individual-event">
          <p>{event.name}</p>
          <img className="profile-photo" src={event.photoUrl}/>
          <p>host: {event.username}</p>
          <p>{event.date} at {event.time}</p>
          <a href={`#/fraptimes/${event.event_id}`}>Go to event</a>
          <button onClick={() => this.props.removeAttendee(event.id).then(() => this.props.fetchUser())} className='unhost-unjoin'>Unjoin event</button>
        </div>
      )
    }) 
   } else { 
     return (
      <div>
        <p>You don't have any events that you have joined. <a className="profile-reroute" href='#/fraptimes'>Click here to see all existing events.</a></p>
      </div>
    )
     }
  }
  }

  hosted() {
    if (this.props.user.hosted_events) {
      if (this.props.user.hosted_events.length > 0) {
        return this.props.user.hosted_events.map(event => {
      return (
        <div className="individual-event">
          <p>{event.name}</p>
          <img className="profile-photo" src={event.photoUrl}/>
          <p>host: {event.username}</p>
          <p>{event.date} at {event.time}</p>
          <a href={`#/fraptimes/${event.id}`}>Go to event</a>
          <button onClick={() => this.props.removeEvent(event.id).then(() => this.props.fetchUser())} className='unhost-unjoin'>Unhost event</button>
        </div>
      )
    })
   } else {
     return (
    <p>You don't have any hosted events. <a className="profile-reroute" href='#/hosting'>You can host an event here!</a></p>
     )
    }
  }
  }

  render() {
    return (
      <>
      <div className="event-index-header">
                <p className="show-header-one">Welcome Home, {this.props.user.username}!</p>
                <p className="show-header-two">What are you grateful for today?</p>
            </div>
            <div className="zero-profile"></div>
      <div className="profile-div">
        <div>
          <p className="profile-title">Events you are attending</p>
          {this.joined()}
        </div>
        <div>
        <p className="profile-title">Events you are hosting</p>
          {this.hosted()}
        </div>
      </div>
      </>
    )
  }
}

export default ProfileShow;

