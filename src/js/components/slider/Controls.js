import React from 'react';

import Slider from '../../pages/Slider'


class Controls extends React.Component {
  static get propTypes() {
    return {
      next: React.PropTypes.func.isRequired,
      prev: React.PropTypes.func.isRequired
    }
  };

  constructor(...args) {
    super(...args);

    this.state = {
      isClickable: false,
      timeout: 1500
    };

    this.toggleNext = this.toggleNext.bind(this);
    this.togglePrev = this.togglePrev.bind(this);
  }

  toggleNext() {
    if (this.state.isClickable) {
      this.props.next();
    }
  }

  togglePrev() {
    if (this.state.isClickable) {
      this.props.prev();
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.state.isClickable = true;
    }, 1000);
  }

  componentWillReceiveProps() {
    this.state.isClickable = false;
  }

  componentDidUpdate() {
    setTimeout(() => this.state.isClickable = true, this.state.timeout);
  }

  render() {
    return (
      <div className="controls-container">
        <div className="controls__item controls__item--left" onClick={this.togglePrev}>&#10096;</div>
        <div className="controls__item controls__item--right" onClick={this.toggleNext}>&#10097;</div>
      </div>
    )
  }
}

export default Controls
