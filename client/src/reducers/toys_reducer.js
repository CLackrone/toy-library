export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_TOYS':
      return action.toys
    case 'ADD_TOY'
      return [...state, action.toy]
    default: 
      return state
  }
}