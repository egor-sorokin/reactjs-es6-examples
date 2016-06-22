import React from 'react';
import { Link } from 'react-router';

import ProfileDetails from './ProfileDetails';


class Profile extends React.Component {
  static get propTypes() {
    return {
      profile: React.PropTypes.string.isRequired
    }
  };

  checkProfileVisibility(classes) {
    for (let i = 0; i < this.props.visibleProfiles.length; i++) {
      if (this.props.id === this.props.visibleProfiles[i]) {
        classes += ' profile-visible';
      }
    }

    return classes;
  }

  getProfileElementClasses() {
    let classes = 'col-md-4 profile-hidden';

    classes = this.checkProfileVisibility(classes);

    return classes;
  }

  render() {
    let classes = this.getProfileElementClasses();

    return (
      <div className={classes}>
        <h3>{this.props.profile}</h3>
        <p>Marco Polo likes his Polo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.</p>
        <Link to={{pathname: 'profiles/profile', query: {profileDetails: this.props.profile}}} className="btn btn-sm btn-info">More
          Info</Link>
      </div>
    )
  }
}

export default Profile
