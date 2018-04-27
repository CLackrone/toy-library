export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_TOYS':
      return action.toys
    case 'ADD_TOY':
      return [...state, action.toy]
    case 'UPDATE_TOY':
      //filter out all toys with an id that does not === the action.id and concat with action.toy
      return [...state.filter(toy => toy.id !== action.toy.id), action.toy]
    case 'DELETE_TOY':
      return state.filter(toy => toy.id !== action.id)
    default: 
      return state
  }
}

