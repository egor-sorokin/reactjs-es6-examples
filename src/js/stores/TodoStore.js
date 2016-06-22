import { EventEmitter } from 'events';

import dispatcher from '../dispatcher'


class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.todoList = [
      {
        id: 123,
        text: 'Go home',
        complete: false
      },
      {
        id: 124,
        text: 'Go shopping',
        complete: false
      },
      {
        id: 125,
        text: 'Walk around',
        complete: true
      }
    ];
  }

  createTodo(text) {
    const id = Date.now();

    this.todoList.push({
      id,
      text,
      complete: false
    });

    this.emit('change');
  }

  deleteTodo(id) {
    for (let i = 0; i < this.todoList.length; i++) {
      if (this.todoList[i].id === id) {
        this.todoList.splice(i, 1);
        break;
      }
    }

    this.emit('change');
  }

  reloadTodoList(todoList) {
    this.todoList = todoList;

    this.emit('change');
  }

  handlerAction(action) {
    switch (action.type) {
      case 'CREATE_TODO':
        this.createTodo(action.text);
        break;
      case 'DELETE_TODO':
        this.deleteTodo(action.id);
        break;
      case 'RECEIVE_TODOLIST':
        this.reloadTodoList(action.todoList);
        break;
    }
  }

  getAll() {
    return this.todoList;
  }
}

const todoStore = new TodoStore();
dispatcher.register(todoStore.handlerAction.bind(todoStore));

export default todoStore
