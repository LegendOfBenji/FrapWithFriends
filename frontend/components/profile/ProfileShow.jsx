import React from 'react';

class ProfileShow extends React.Component {
  constructor(props) {
    super(props)
  }

  joined() {
    return this.props.user.events.map(event => {
      console.log(event.photoUrl)
      return (
        <div>
      {event.openings}
        </div>
      )
    })
  }

  hosted() {
    return this.props.user.hosted_events.map(event => {
      return (
      <div>{event.openings}</div>
      )
    })
  }

  render() {
    return (
      <>
      <div>{this.joined()}</div>
      <div>{this.hosted()}</div>
      </>
    )
  }
}

export default ProfileShow;

