import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


import Slides from '../slider/Slides'
import Controls from '../slider/Controls'
import Pagination from '../slider/Pagination'


class SliderContainer extends React.Component {
  static get propTypes() {
    return {
      settings: React.PropTypes.object.isRequired
    }
  };

  constructor(...args) {
    super(...args);
    this.state = {
      currentSlide: this.props.settings.startSlideIndex,
      timer: 0,
      toggleBtn: 'next'
    };

    this.toggleNext = this.toggleNext.bind(this);
    this.togglePrev = this.togglePrev.bind(this);
    this.toggleSlide = this.toggleSlide.bind(this);
  }

  toggleNext() {
    this.state.toggleBtn = 'next';

    let current = this.state.currentSlide,
      next = current + 1;

    if (next > this.props.settings.data.length - 1) {
      next = 0;
    }

    this.setState({
      currentSlide: next
    })
  }

  togglePrev() {
    this.state.toggleBtn = 'prev';

    let current = this.state.currentSlide,
      prev = current - 1;

    if (prev < 0) {
      prev = this.props.settings.data.length - 1;
    }

    this.setState({
      currentSlide: prev
    })
  }

  toggleSlide(id) {
    let indexes = this.props.settings.data.map((elem) => {
      return elem.id;
    });

    let currentSlide = indexes.indexOf(id);

    if (currentSlide < this.state.currentSlide) {
      this.state.toggleBtn = 'prev';
    } else {
      this.state.toggleBtn = 'next';
    }

    this.setState({
      currentSlide: currentSlide
    });
  }


  /* Switch on automatic carousel */

  //checkDirection(direction) {
  //  console.log(direction);
  //  switch (direction) {
  //    case 'left':
  //      return this.togglePrev;
  //      break;
  //    case 'right':
  //      return this.toggleNext;
  //      break;
  //  }
  //}

  //componentDidMount() {
  //  let callback = this.checkDirection(this.props.settings.direction);
  //
  //  this.setState({
  //    timer: setTimeout(()=> callback(), this.props.settings.timeInterval)
  //  })
  //}

  //resetInterval() {
  //  clearTimeout(this.state.timer);
  //
  //  let callback = this.checkDirection(this.props.settings.direction);
  //
  //  this.setState({
  //    timer: setTimeout(()=> callback(), this.props.settings.timeInterval)
  //  })
  //}
  /* End */

  addControls(forceAddControls) {
    let controls = undefined;

    if (this.props.settings.controls || forceAddControls) {
      controls = <Controls next={this.toggleNext}
                           prev={this.togglePrev}>
      </Controls>
    }

    return controls;
  }

  addPagination() {
    let pagination = undefined;

    if (this.props.settings.pagination) {
      pagination = <Pagination data={this.props.settings.data}
                               currentSlide={this.state.currentSlide}
                               toggle={this.toggleSlide}>
      </Pagination>
    }

    return pagination
  }


  render() {
    let controls = undefined,
      pagination = undefined;

    controls = this.addControls();
    pagination = this.addPagination();

    if (typeof controls === 'undefined' && typeof pagination === 'undefined') {
      let forceAddControls = true;
      controls = this.addControls(forceAddControls);
    }

    return (
      <div className="slider-container">
        <Slides data={this.props.settings.data}
                currentSlide={this.state.currentSlide}
                direction={this.state.toggleBtn}>
        </Slides>
        {controls}
        {pagination}
      </div>
    )
  }
}

export default SliderContainer
