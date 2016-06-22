import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import SliderContainer from '../components/slider/SliderContainer'


const sliderOptions = {
  data: [
    {
      id: 's_1',
      imageSrc: '../src/images/image_1.jpg',
      imageAlt: 'one'
    },
    {
      id: 's_2',
      imageSrc: '../src/images/image_2.jpg',
      imageAlt: 'two'
    },
    {
      id: 's_3',
      imageSrc: '../src/images/image_3.jpg',
      imageAlt: 'three'
    }
  ],
  startSlideIndex: 0,
  timeInterval: 5000,
  pagination: true,
  controls: true
};

class Slider extends React.Component {
  render() {
    return (
      <div>
        <SliderContainer settings={sliderOptions}></SliderContainer>
      </div>
    )
  }
}

export default Slider
