import dispatcher from '../dispatcher';


export function createTodo(text) {
  dispatcher.dispatch({
    type: 'CREATE_TODO',
    text
  })
}

export function deleteTodo(id) {
  dispatcher.dispatch({
    type: 'DELETE_TODO',
    id
  })
}

export function reloadTodoList() {
  dispatcher.dispatch({type: 'FETCH_TODOLiST'});

  setTimeout(() => {
    dispatcher.dispatch({
      type: 'RECEIVE_TODOLIST',
      todoList: [
        {
          id: 44,
          text: 'Go home again',
          complete: false
        },
        {
          id: 333,
          text: 'Learn something',
          complete: true
        }
      ]
    })
  }, 1000)
}
