export const initialState = {
  todos: []
}

const reducer = (state, action) => {
  // console.log(action)

  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, todos: [action.payload, ...state.todos] }
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: [...state.todos].filter(todo => todo.id !== action.payload)
      }

    case 'COMPLETE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id !== action.payload) {
            return todo
          } else {
            return {
              ...todo,
              isComplated: !todo.isComplated
            }
          }
        })
      }
 

      case 'UPDATE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id !== action.payload.todoId) {
            return todo
          } else {
            return {
              ...todo,
              content: action.payload.newValue
            }
          }
        })
      }

    default: {
      return { ...state }
    }
  }
}

export default reducer
