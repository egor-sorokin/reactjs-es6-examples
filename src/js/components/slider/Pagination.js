import React from 'react'

import Pager from '../slider/Pager'


class Pagination extends React.Component {
  static get propTypes() {
    return {
      data: React.PropTypes.array.isRequired,
      currentSlide: React.PropTypes.number.isRequired,
      toggle: React.PropTypes.func.isRequired
    }
  };

  render() {
    let paginationNodes = this.props.data.map((paginationNode, i) => {
      let isActive = this.props.currentSlide === i;

      return <Pager key={i} id={paginationNode.id} toggleSlide={this.props.toggle} active={isActive}></Pager>
    });

    return (
      <ul className="pagination">
        {paginationNodes}
      </ul>
    )
  }
}

export default Pagination
