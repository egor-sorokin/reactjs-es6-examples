import React from 'react';
import { Link } from 'react-router';


class ProfileDetails extends React.Component {
  render() {
    return (
      <div>
        <h2>Profile</h2>
        <h3>{this.props.location.query.profileDetails}</h3>
        <p>Marco Polo likes his Polo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Marco Polo likes his Polo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Marco Polo likes his Polo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.</p>
        <Link to="profiles" className="btn btn-sm btn-default">Back</Link>
      </div>
    )
  }
}

export default ProfileDetails
