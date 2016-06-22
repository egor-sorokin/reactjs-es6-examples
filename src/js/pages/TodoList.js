import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Todo from '../components/Todo'
import TodoStore from '../stores/TodoStore'
import * as TodoActions from '../actions/TodoActions'


class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: TodoStore.getAll(),
      todoText: ''
    };

    this.getTodoList = this.getTodoList.bind(this);
    this.changeInput = this.changeInput.bind(this);
    this.createTodo = this.createTodo.bind(this);
    this.reloadTodoList = this.reloadTodoList.bind(this);
  }

  createTodo() {
    if (this.refs.todoInp.value === '') {
      return;
    }

    TodoActions.createTodo(this.state.todoText);

    this.refs.todoInp.value = '';
  }

  deleteTodo(id) {
    TodoActions.deleteTodo(id);
  }

  changeInput(e) {
    this.setState({
      todoText: e.target.value
    });
  }

  componentWillMount() {
    TodoStore.on('change', this.getTodoList);
  }

  componentWillUnmount() {
    TodoStore.removeListener('change', this.getTodoList);
  }

  getTodoList() {
    this.setState({
      todoList: TodoStore.getAll()
    });
  }

  reloadTodoList() {
    TodoActions.reloadTodoList();
  }

  render() {
    const { todoList } = this.state;
    const TodoComponent = todoList.map((todo) => {
      let boundClick = this.deleteTodo.bind(this, todo.id);

      return <Todo onClick={boundClick} key={todo.id} {...todo} />;
    });

    return (
      <div>
        <div className="row m-t-40">
          <div className="col-lg-4">

            <div className="form-group">
              <div className="input-group input-group-sm">
                <input className="form-control"
                       ref="todoInp"
                       onChange={this.changeInput}/>
                <span className="input-group-btn">
                  <button type="button" className="btn btn-primary"
                          onClick={this.createTodo}>
                    Create
                  </button>
                </span>
                <span className="input-group-btn">
                  <button type="button" className="btn btn-info"
                          onClick={this.reloadTodoList}>
                    Reload
                  </button>
                </span>
              </div>
            </div>

            <h1>To do list</h1>
            <div className="bs-component">
              <ul className="list-group">
                <ReactCSSTransitionGroup transitionName="todo-list" transitionEnterTimeout={500}
                                         transitionLeaveTimeout={300}>
                  {TodoComponent}
                </ReactCSSTransitionGroup>
              </ul>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default TodoList
