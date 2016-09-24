import React, { PropTypes, PureComponent } from 'react';

import AddTodo from './AddTodo';
import Footer from './Footer';
import TodoList from './TodoList';

export default class TodoListView extends PureComponent {
  static propTypes = {
    visibleTodos: PropTypes.object.isRequired,
    visibilityFilter: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    actions: PropTypes.shape({
      addTodo: PropTypes.func.isRequired,
      toggleTodo: PropTypes.func.isRequired,
      setVisibilityFilter: PropTypes.func.isRequired,
      initTodos: PropTypes.func.isRequired,
    }),
  };

  constructor(props) {
    super(props);
    this.onAddClick = this.onAddClick.bind(this);
    this.onTodoClick = this.onTodoClick.bind(this);
    this.onFilterChange = this.onFilterChange.bind(this);
  }

  componentDidMount() {
    this.props.actions.initTodos();
  }

  onAddClick(text) {
    return this.props.actions.addTodo(text);
  }

  onTodoClick(id) {
    return this.props.actions.toggleTodo(id);
  }

  onFilterChange(nextFilter) {
    return this.props.actions.setVisibilityFilter(nextFilter);
  }

  render() {
    return (
      <div style={styles.todoListView}>
        <AddTodo onAddClick={this.onAddClick} />
        <TodoList
          todos={this.props.visibleTodos}
          onTodoClick={this.onTodoClick}
        />
        <Footer
          filter={this.props.visibilityFilter}
          onFilterChange={this.onFilterChange}
        />
        <div style={{ ...styles.overlay, display: (this.props.isFetching ? 'block' : 'none') }} />
      </div>
    );
  }
}

const styles = {
  todoListView: {
    position: 'relative',
    width: 300,
    height: 400,
    margin: 'auto',
    padding: 10,
    border: '1px solid gray',
    overflow: 'auto',
  },
  overlay: {
    background: 'rgba(0, 0, 0, 0.2)',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
};
