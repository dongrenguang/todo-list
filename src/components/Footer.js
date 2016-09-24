import React, { PropTypes, PureComponent } from 'react';

import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/VisibilityFilters';

export default class Footer extends PureComponent {
  static propTypes = {
    onFilterChange: PropTypes.func.isRequired,
    filter: PropTypes.oneOf([
      SHOW_ALL,
      SHOW_COMPLETED,
      SHOW_ACTIVE,
    ]),
  };

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(filter) {
    this.props.onFilterChange(filter);
  }

  renderFilter(filter, name) {
    if (this.props.filter === filter) {
      return name;
    }

    return (
      <a
        href={"#"}
        onClick={() => this.onClick(filter)}
      >
        {name}
      </a>
    );
  }

  render() {
    return (
      <p>
        Show:
        {' '}
        {this.renderFilter(SHOW_ALL, 'All')}
        {', '}
        {this.renderFilter(SHOW_COMPLETED, 'Completed')}
        {', '}
        {this.renderFilter(SHOW_ACTIVE, 'Active')}
        .
      </p>
    );
  }
}
