const TODO_ADD = "PRACAPP/todoReducer/TODO_ADD"

const addTodo = (text) => {
  return { type: TODO_ADD, text }
}

export {
  TODO_ADD,
  addTodo
}