import React, { PropTypes, PureComponent } from 'react';

export default class AddTodo extends PureComponent {
  static propTypes = {
    onAddClick: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
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
          ref={(instance) => {
            if (instance) {
              this.input = instance;
            }
          }}
        />
        <button onClick={this.onClick}>Add</button>
      </div>
    );
  }
}
