import React from 'react'


class Pager extends React.Component {
  static get propTypes() {
    return {
      id: React.PropTypes.string.isRequired,
      active: React.PropTypes.bool,
      toggleSlide: React.PropTypes.func.isRequired
    }
  };

  toggleSlide() {
    this.props.toggleSlide(this.props.id);
  }

  render() {
    let pagerClasses = 'pagination__item';

    if (this.props.active) {
      pagerClasses += ' active';
    }

    return (
      <li className={pagerClasses} onClick={this.toggleSlide.bind(this)}></li>
    )
  }
}

export default Pager
