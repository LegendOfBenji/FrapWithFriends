import React from 'react';

class ProfileShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    this.props.fetchUser();
    console.log(this.props.user)
  }

  joined() {
    if (this.props.user.events) {
    return this.props.user.events.map(event => {
      return (
        <div>
          <img src={event.photoUrl}/>
        </div>
      )
    })
  }
  }

  hosted() {
    if (this.props.user.hosted_events) {
    return this.props.user.hosted_events.map(event => {
      return (
        <img src={event.photoUrl}/>
      )
    })
  }
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

