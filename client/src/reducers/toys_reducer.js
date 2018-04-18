export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_TOYS':
      return action.toys
    default: 
      return state
  }
}