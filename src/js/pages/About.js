import React from 'react';


class About extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <div className="alert alert-dismissible alert-success">
          <p>Congradulations! You found nothing interesting here.</p> Go <a className="alert-link" href="#">home</a>.
        </div>
      </div>
    )
  }
}

export default About
