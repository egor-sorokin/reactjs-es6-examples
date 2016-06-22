import React from 'react';
import { Link } from 'react-router';


class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="bs-component">
          <div className="jumbotron m-t-40">
            <h1>Important!</h1>
            <p>We are a cool website with super useful and educational information. Push a button below and learn more
              about us</p>
            <Link to="about">
              <div className="btn btn-primary btn-md">Learn more</div>
            </Link>
          </div>
        </div>

      </div>
    )
  }
}

export default Home
