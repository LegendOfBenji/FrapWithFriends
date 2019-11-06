import React from 'react';

class ProfileShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    this.props.fetchUser();
  }

  joined() {
    if (this.props.user.events) {
    if (this.props.user.events.length > 0) {
      return this.props.user.events.map(event => {
      return (
        <div>
          <img src={event.photoUrl}/>
        </div>
      )
    }) 
   } else { 
     return (
      <div>
        <p>You don't have any events that you have joined. <a href='#/fraptimes'>Click here to see all existing events.</a></p>
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
        <img src={event.photoUrl}/>
      )
    })
   } else {
     return (
    <p>You don't have any hosted events. <a href='#/hosting'>You can host an event here!</a></p>
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
      <div>{this.joined()}</div>
      <div>{this.hosted()}</div>
      </div>
      </>
    )
  }
}

export default ProfileShow;

