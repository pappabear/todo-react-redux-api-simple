const todo = (state, action) => {
  
  switch (action.type) {
  
    case 'ADD_TODO':
      console.log("in pt1")
      let new_todo = {
        id: action.id,
        title: action.title,
        complete: false
      }
      return new_todo

    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        complete: !state.complete
      })

    default:
		  return state
	}
}

const todos = (state = [], action) => {
	switch (action.type) {
    
  case 'ADD_TODO':
    console.log("in pt2")    
		return [
			...state,
			todo(undefined, Object.assign(action, {
				id: state.length
			}))
		]
  
  case 'TOGGLE_TODO':
		return state.map(t =>
			todo(t, action)
		)
  
  case 'GET_TODO_DATA_RECEIVED':
		return action.data
  
  default:
		return state
	}
}

export default todos
