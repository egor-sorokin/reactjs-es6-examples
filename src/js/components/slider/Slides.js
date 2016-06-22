import React from 'react'

import Slide from '../slider/Slide'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class Slides extends React.Component {
  static get propTypes() {
    return {
      data: React.PropTypes.array.isRequired,
      currentSlide: React.PropTypes.number.isRequired,
      direction: React.PropTypes.string
    }
  };

  updateClasses() {
    let styleClasses = {};

    if (this.props.direction == 'next') {
      styleClasses = {
        enter: 'slide-enter',
        leave: 'slide-leave',
        enterActive: 'slide-enter-active',
        leaveActive: 'slide-leave-active'
      };
    } else {
      styleClasses = {
        enter: 'slide-enter--rev',
        leave: 'slide-leave--rev',
        enterActive: 'slide-enter-active--rev',
        leaveActive: 'slide-leave-active--rev'
      };
    }

    return styleClasses;
  }

  render() {
    let classes = this.updateClasses();

    let slide = this.props.data.map((data, i) => {
        let isActive = this.props.currentSlide === i;

        return (
          isActive ? <Slide key={i} imageSrc={data.imageSrc} imageAlt={data.imageAlt} active={isActive}></Slide> : ''
        )
      }
    );
    return (
      <ul className="slides">
        <ReactCSSTransitionGroup transitionName={classes}
                                 transitionEnterTimeout={1000}
                                 transitionLeaveTimeout={800}>
          {slide}
        </ReactCSSTransitionGroup>
      </ul>
    )
  }
}

export default Slides
