import React from "react";


class Todo extends React.Component {
  static get propTypes() {
    return {
      onClick: React.PropTypes.func.isRequired
    }
  };

  render() {
    const { text, complete } = this.props;

    const icon = complete ? "\u2714" : "\u2716";

    return (
      <li className="list-group-item">
        <span className="badge pull-left">{icon}</span>
        <span className="m-l-10">{text}</span>
        <span className="pull-right label-danger label" onClick={this.props.onClick}>Remove</span>
      </li>
    );
  }
}

export default Todo
