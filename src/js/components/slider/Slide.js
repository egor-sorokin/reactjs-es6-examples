import React from 'react'


class Slide extends React.Component {
  static get propTypes() {
    return {
      imageSrc: React.PropTypes.string,
      imageAlt: React.PropTypes.string.isRequired
    }
  };

  render() {
    let slideClass = 'slide';

    /* If you would like use basics classNames for CSS instead of ReactCSSTransitionGroup */
    /* Also need add css rules for this class*/
    //if (this.props.active) {
    //  slideClass += " active";
    //}
    /* End */

    return (
      <li className={slideClass}>
        <img className="slide__image" src={this.props.imageSrc} alt={this.props.imageAlt}/>
      </li>
    )
  }
}

export default Slide
