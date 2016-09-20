import React, { PropTypes, PureComponent } from 'react';

export default class Todo extends PureComponent {
  static propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    return this.props.onClick(this.props.id);
  }

  render() {
    return (
      <li
        onClick={this.onClick}
        style={{
          textDecoration: this.props.completed ? 'line-through' : 'none',
          cursor: this.props.completed ? 'default' : 'pointer',
        }}
      >
        {this.props.text}
      </li>
    );
  }
}
