
const initialState = {
  todos: []
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return { todos: [
        ...state.todos,
        {
            id: Math.random(),
            text: action.payload
        }
    ]
}
    case 'DELETE_TODO':
      return {  todos:[
        ...state.todos.filter((todo)=> action.id !== todo.id )
      ]

    };
    default:
      return state;
  }
}
