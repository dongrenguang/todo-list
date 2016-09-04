import React, { Component, PropTypes } from 'react';

export default class AddTodo extends Component {
  static propTypes = {
    onAddClick: PropTypes.func.isRequired,
  };

  handleClick() {
    if (this.input) {
      const text = this.input.value.trim();
      this.props.onAddClick(text).then(() => {
        this.input.value = '';
      });
    }
  }

  render() {
    return (
      <div>
        <input
          type={'text'}
          ref={instance => {
            if (instance) {
              this.input = instance;
            }
          }}
        />
        <button onClick={() => this.handleClick()}>Add</button>
      </div>
    );
  }
}
