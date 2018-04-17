export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_TOYS':
      return action.toys
    default: 
      console.log('returning default state')
      return state
  }
}