import React from 'react';
import {IndexLink, Link} from 'react-router';


class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      collapsed: true
    };

    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;

    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const homeClass = location.pathname === '/' ? 'active' : '';
    const aboutClass = location.pathname.match(/^\/about/) ? 'active' : '';
    const profilesClass = location.pathname.match(/^\/profiles/) ? 'active' : '';
    const todoListClass = location.pathname.match(/^\/todolist/) ? 'active' : '';
    const sliderClass = location.pathname.match(/^\/animation/) ? 'active' : '';
    const navClass = collapsed ? 'collapse' : '';

    return (
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" onClick={this.toggleCollapse}>
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className={homeClass}>
                <IndexLink to="/" onClick={this.toggleCollapse}>Home</IndexLink>
              </li>
              <li className={profilesClass}>
                <Link to="profiles" onClick={this.toggleCollapse}>Profiles</Link>
              </li>
              <li className={aboutClass}>
                <Link to="about" onClick={this.toggleCollapse}>About</Link>
              </li>
              <li className={todoListClass}>
                <Link to="todolist" onClick={this.toggleCollapse}>To do list</Link>
              </li>
              <li className={sliderClass}>
                <Link to="slider" onClick={this.toggleCollapse}>Slider</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav
