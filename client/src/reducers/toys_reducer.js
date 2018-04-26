export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_TOYS':
      return action.toys
    case 'ADD_TOY':
      return [...state, action.toy]
    case 'DELETE_TOY':
      return state.filter(toy => toy.id !== action.id)
    default: 
      return state
  }
}


