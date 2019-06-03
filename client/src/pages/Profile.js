import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import './Profile.css';

class Profile extends Component {
  componentWillMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }
  render() {
    const { profile } = this.state;
    return (
      <div className="container">
        <div className="profile-area">
          <h1>{profile.name}</h1>
          <Card header="Profile">
            <Card.Img variant="top" src={profile.picture} alt="profile" />
            <Card.Body>
              <h3>{profile.nickname}</h3>
            </Card.Body>
            <pre>{JSON.stringify(profile, null, 2)}</pre>
          </Card>
        </div>
      </div>
    );
  }
}

export default Profile;
