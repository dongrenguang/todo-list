import React, { Component, PropTypes } from 'react';
export default class AddTodo extends Component {
  static propTypes = {
    enabled: PropTypes.bool.isRequired,
    onAddClick: PropTypes.func.isRequired,
  };

  handleClick() {
    const node = this.refs.input;
    const text = node.value.trim();
    this.props.onAddClick(text).then(() => {
      node.value = '';
    });
  }

  render() {
    return (
      <div>
        <input type='text' ref='input' />
        <button
          onClick={() => this.props.enabled ? this.handleClick() : () => {}}
          style={{ opacity: this.props.enabled ? 1 : 0.3 }}
        >
          Add
        </button>
        {
          this.props.enabled ? null : <div><span>Loading......</span></div>
        }
      </div>
    );
  }
}
