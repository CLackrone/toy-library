export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_TOYS':
      return action.toys

    case 'TOY_FETCHED':
    console.log('j')
      const index = state.findIndex(toy => toy.id === action.toy.id)
      if (index > -1) {
        return state.map(toy => {
          if (toy.id === action.toy.id) {
            return action.toy 
          } else {
            return toy 
          }
        })
      } else {
        return [...state, action.toy]
      }

    case 'ADD_TOY':
      return [...state, action.toy]

    case 'UPDATE_TOY':
    console.log('i')
      //filter out all toys with an id that does not === the action.id and concat with action.toy
      return [...state.filter(toy => toy.id !== action.toy.id), action.toy]

    case 'DELETE_TOY':
      return state.filter(toy => toy.id !== action.id)

    default: 
      return state
  }
}

