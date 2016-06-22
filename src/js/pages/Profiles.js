import React from 'react';
import ReactDOM from 'react-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Profile from '../components/profiles/Profile';


const profiles = [
  'Marco Polo',
  'Galileo Galilei',
  'Claudius Ptolemy',
  'Immanuel Kant',
  'Carl Friedrich Gauss',
  'Marco Polo',
  'Galileo Galilei',
  'Claudius Ptolemy',
  'Immanuel Kant',
  'Carl Friedrich Gauss',
  'Marco Polo',
  'Galileo Galilei',
  'Claudius Ptolemy',
  'Immanuel Kant',
  'Carl Friedrich Gauss'
];

class Profiles extends React.Component {
  constructor() {
    super();

    this.state = {
      visibleProfilesIndexes: [],
      profiles: profiles
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handlerScroll.bind(this));

    this.handlerScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handlerScroll.bind(this));
  }

  handlerScroll() {
    let self = this;
    let indexesArr = [];

    self.profiles.map((Profile, index) => {
      if (typeof self.refs[index] !== 'undefined') {
        let element = ReactDOM.findDOMNode(self.refs[index]),
          elementPositionY = element.getBoundingClientRect().top + document.body.scrollTop,
          scrollPositionY = window.scrollY,
          windowHeight = window.innerHeight;

        if ((scrollPositionY + windowHeight / 2 >= elementPositionY)) {
          indexesArr.push(index);
        }
      }
    });

    if (indexesArr.length) {
      this.setState({
        visibleProfilesIndexes: indexesArr
      });
    }
  }

  render() {
    this.profiles = this.state.profiles.map((profile, i) => <Profile key={i} ref={i} id={i}
                                                         visibleProfiles={this.state.visibleProfilesIndexes} profile={profile}/>);

    return (
      <div>
        <h1>Profiles</h1>

        <div className="row">
          {this.profiles}
        </div>
      </div>
    )
  }
}

export default Profiles
